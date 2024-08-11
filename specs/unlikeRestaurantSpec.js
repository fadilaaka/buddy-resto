/* eslint-disable no-undef */

import FavoriteResto from './../src/scripts/data/favorite-resto'
import * as TestFactories from './helper/testFactories'

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>'
}

describe('Unlike A Resto', () => {
  beforeEach(async () => {
    addLikeButtonContainer()
    await FavoriteResto.putRestaurant({ id: 1 })
  })

  afterEach(async () => {
    await FavoriteResto.deleteRestaurant(1)
  })

  it('should display unlike widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 })

    expect(document.querySelector('[aria-label="unlike restaurant"]')).toBeTruthy()
  })

  it('should not display like widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 })

    expect(document.querySelector('[aria-label="like restaurant"]')).toBeFalsy()
  })

  it('should be able to remove liked resto from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 })
    document.querySelector('[aria-label="unlike restaurant"]').dispatchEvent(new Event('click'))

    expect(await FavoriteResto.getAllRestaurant()).toEqual([])
  })

  it('should not throw error if the unliked resto is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 })
    // Hapus dulu resto dari daftar resto favorit
    await FavoriteResto.deleteRestaurant(1)
    // kemudian simulasi pengguna menekan widget batal menyukai film
    document.querySelector('[aria-label="unlike restaurant"]').dispatchEvent(new Event('click'))

    expect(await FavoriteResto.getAllRestaurant()).toEqual([])
  })
})
