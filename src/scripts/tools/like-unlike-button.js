import { createLikeButton, createUnlikeButton } from '../templates/template-creator'

const LikeButtonInitiator = {
  async init ({ likeButtonContainer, restaurant, favoriteResto, resto }) {
    this._likeButtonContainer = likeButtonContainer
    this._resto = resto
    this._restaurant = restaurant
    this._favoriteResto = favoriteResto

    await this._renderButton()
  },

  async _renderButton () {
    const { id } = this._resto

    if (await this._isRestaurantExist(id)) {
      this._renderLiked()
    } else {
      this._renderLike()
    }
  },

  async _isRestaurantExist (id) {
    const resto = await this._favoriteResto.getRestaurant(id)
    return !!resto
  },

  _renderLike () {
    this._likeButtonContainer.innerHTML = createLikeButton()

    const likeButton = document.querySelector('#like-button')
    likeButton.addEventListener('click', async () => {
      await this._favoriteResto.putRestaurant(this._resto)
      this._renderButton()
    })
  },

  _renderLiked () {
    this._likeButtonContainer.innerHTML = createUnlikeButton()

    const likeButton = document.querySelector('#like-button')
    likeButton.addEventListener('click', async () => {
      await this._favoriteResto.deleteRestaurant(this._resto.id)
      this._renderButton()
    })
  }
}

export default LikeButtonInitiator
