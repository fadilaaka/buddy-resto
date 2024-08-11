import FavoriteResto from '../data/favorite-resto'
import { createRestaurantList } from '../templates/template-creator'
import ErrorFavorite from '../data/error-favorite'

const Favorite = {
  async render () {
    return `
    <h2 class="title">Favorite Restaurant</h2>
    <div id="cards"></div>
    <div id="RestoNotFound"></div>
    `
  },

  async afterRender () {
    const restaurants = await FavoriteResto.getAllRestaurant()
    const restoCards = document.querySelector('#cards')
    const error = ErrorFavorite
    document.querySelector('#RestoNotFound').innerHTML = error

    restaurants.forEach((resto) => {
      restoCards.innerHTML += createRestaurantList(resto)
      document.querySelector('#RestoNotFound').style.display = 'none'
    })
  }
}

export default Favorite
