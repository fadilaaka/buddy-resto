/* eslint-disable no-undef */

Feature('Liking Restaurants')

Scenario('showing empty liked restaurants', (I) => {
  I.amOnPage('/#/favorite')
  I.seeElement('#preloader')
  I.see('Data not found, please like the restaurant first...', '#RestoNotFound')
})

Scenario('Liking one resto', (I) => {
  I.amOnPage('/')

  I.seeElement('#preloader')

  I.seeElement('.card-title a')
  I.scrollTo(locate('.card-title a').first())
  I.click(locate('.card-title a').first())

  I.amOnPage('/#/detail/rqdv5juczeskfw1e867')
  I.seeElement('#like-button')
  I.click('#like-button')

  I.amOnPage('/#/favorite')
  I.seeElement('#cards')
})

Scenario('Unlike one resto', (I) => {
  I.amOnPage('/')

  I.seeElement('#preloader')

  I.seeElement('.card-title a')
  I.scrollTo(locate('.card-title a').first())
  I.click(locate('.card-title a').first())

  I.amOnPage('/#/detail/rqdv5juczeskfw1e867')
  I.seeElement('#like-button')
  I.click('#like-button')

  I.amOnPage('/#/favorite')
  I.amOnPage('/#/detail/rqdv5juczeskfw1e867')
  I.seeElement('#like-button')
  I.click('#like-button')
})

Scenario('Review this resto', (I) => {
  I.amOnPage('/')

  I.seeElement('#preloader')

  I.seeElement('.card-title a')
  I.scrollTo(locate('.card-title a').first())
  I.click(locate('.card-title a').first())

  I.amOnPage('/#/detail/rqdv5juczeskfw1e867')
  I.seeElement('#input-name')
  I.scrollTo('#input-name')
  I.fillField('#input-name', 'Anonymous')
  I.seeElement('#input-review')
  I.scrollTo('#input-review')
  I.fillField('#input-review', 'This is good restaurant')
  I.seeElement('#input-submit')
  I.scrollTo('#input-submit')
  I.click('#input-submit')
})
