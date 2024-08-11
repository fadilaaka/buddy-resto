import RestaurantSource from '../data/restaurant-source'
import { createRestaurantList } from '../templates/template-creator'

const Home = {
  async render () {
    return `
    <h1 class="title">Explore Restaurants</h1>
    <div id="cards"></div>
    `
  },

  async afterRender () {
    const resto = await RestaurantSource.Home()
    console.log(resto)
    const restoCards = document.querySelector('#cards')
    resto.forEach((restaurants) => {
      restoCards.innerHTML += createRestaurantList(restaurants)
    })
  }
}

export default Home
