import LikeButtonInitiator from '../../src/scripts/tools/like-unlike-button'
import FavoriteResto from '../../src/scripts/data/favorite-resto'

const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteResto: FavoriteResto,
    resto
  })
}

export { createLikeButtonPresenterWithResto }
