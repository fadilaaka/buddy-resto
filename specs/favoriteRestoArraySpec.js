/* eslint-disable no-undef */

import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract'

let favoriteResto = []

const FavoriteRestoArray = {

  getRestaurant (id) {
    if (!id) {
      return
    }

    return favoriteResto.find((resto) => resto.id === id)
  },

  getAllRestaurant () {
    return favoriteResto
  },

  putRestaurant (resto) {
    if (!resto.hasOwnProperty('id')) {
      return
    }

    // pastikan id ini belum ada dalam daftar favorite
    if (this.getRestaurant(resto.id)) {
      return
    }

    favoriteResto.push(resto)
  },

  deleteRestaurant (id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteResto = favoriteResto.filter((resto) => resto.id !== id)
  }
}

describe('Favorite Resto Array Contract Test Implementation', () => {
  afterEach(() => favoriteResto === [])

  itActsAsFavoriteRestoModel(FavoriteRestoArray)
})
