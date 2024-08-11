/* eslint-disable no-undef */

import FavoriteResto from './../src/scripts/data/favorite-resto'
import * as TestFactories from './helper/testFactories'

describe('Like A Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>'
  }

  beforeEach(() => {
    addLikeButtonContainer()
  })

  it('should show the like button when the resto has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 })

    expect(document.querySelector('[aria-label="like restaurant"]')).toBeTruthy()
  })

  it('should not show the unlike button when the resto has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 })

    expect(document.querySelector('[aria-label="unlike restaurant"]')).toBeFalsy()
  })

  it('should be able to like the resto', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 })

    document.querySelector('#like-button').dispatchEvent(new Event('click'))
    const resto = await FavoriteResto.getRestaurant(1)
    expect(resto).toEqual({ id: 1 })
    FavoriteResto.deleteRestaurant(1)
  })

  it('should not add a resto again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 })

    await FavoriteResto.putRestaurant({ id: 1 })
    document.querySelector('#like-button').dispatchEvent(new Event('click'))
    expect(await FavoriteResto.getAllRestaurant()).toEqual([{ id: 1 }])

    FavoriteResto.deleteRestaurant(1)
  })

  it('should not add a resto when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({})

    document.querySelector('#like-button').dispatchEvent(new Event('click'))

    expect(await FavoriteResto.getAllRestaurant()).toEqual([])
  })
})
