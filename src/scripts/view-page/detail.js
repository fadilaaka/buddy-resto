import UrlParser from '../url/url-parser'
import RestaurantSource from '../data/restaurant-source'
import { createRestaurantDetail } from '../templates/template-creator'
import LikeButtonInitiator from '../tools/like-unlike-button'
import dateNow from '../tools/dateNow'
import FavoriteResto from '../data/favorite-resto'

const Detail = {
  async render () {
    return `
    <h2 class="title">Detail Restaurant</h2>
    <div id="detail"></div>
    <div id="likeButtonContainer"></div>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const resto = await RestaurantSource.DetailResto(url.id)
    const restoDetail = document.querySelector('#detail')
    const restaurants = createRestaurantDetail(resto.restaurant)
    restoDetail.innerHTML = restaurants
    console.log(resto.restaurant)

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: FavoriteResto,
      resto: {
        id: url.id,
        pictureId: resto.restaurant.pictureId,
        name: resto.restaurant.name,
        description: resto.restaurant.description,
        rating: resto.restaurant.rating,
        city: resto.restaurant.city
      }
    })

    const submitButton = document.querySelector('#input-submit')
    submitButton.addEventListener('click', () => {
      const inputName = document.querySelector('#input-name').value
      const inputReview = document.querySelector('#input-review').value
      const inputText = {
        id: url.id,
        name: inputName,
        review: inputReview,
        date: dateNow
      }

      RestaurantSource.PostReview(inputText)
      const updateUi = document.querySelector('.detail-review-grid')
      updateUi.innerHTML += `
        <div class="detail-review-card">
        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
          <div class="detail-review-text">
            <p class="detail-review-name">${inputText.name}</p>
            <p class="detail-review-date">${inputText.date}</p>
            <p class="detail-review-reviewer">${inputText.review}</p>
          </div>
        </div>
      `
      document.querySelector('#input-name').value = ''
      document.querySelector('#input-review').value = ''
    })
  }
}

export default Detail
