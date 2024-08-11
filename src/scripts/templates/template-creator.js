import CONFIG from '../data/config'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

const createRestaurantList = (restaurant) => `
  <div class="cards-item">
    <div class="card">
      <div class="card-image">
      <span class="label-rating fa fa-star"> ${restaurant.rating}</span>
      <span class="label-city fa fa-building-o"> ${restaurant.city}</span>
      <a href="${`/#/detail/${restaurant.id}`}">
      <img class="lazyload" crossorigin="anonymous" id="imagecard" alt="picture of restaurant" data-src="${CONFIG.BASE_URL_PHOTO}/${restaurant.pictureId}">
      </a>
      </div>
    <div class="card-content">
      <div class="card-title">
      <a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a>
      </div>
      <p class="card-text" maxlength="100">${restaurant.description}</p>
    </div>
  </div>
</div>
`

const createRestaurantDetail = (restaurant) => `
  <div class="detail-container">
    <div class="detail-card">
      <img class="lazyload" crossorigin="anonymous" id="detail-image" alt="picture of restaurant" data-src="${CONFIG.BASE_URL_PHOTO}/${restaurant.pictureId}">
      <div class="detail-text">
        <h2 class="detail-title">${restaurant.name}</h2>
        <p><i class="fa fa-star" aria-hidden="true"></i> ${restaurant.rating}</p>
        <p><i class="fa fa-map-marker" aria-hidden="true"></i> ${restaurant.address}, ${restaurant.city}</p>
        <p><i class="fa fa-cutlery" aria-hidden="true"></i> ${restaurant.categories
          .map((category) => `
          ${category.name}
          `
          ).join('')}
        </p>
        <p>${restaurant.description}</p>
      </div>
    </div>
  </div>
  <div class="detail-menus-container">
    <h2 class="detail-container-title">Menu</h2>
    <div class="detail-menus-flex">
    <ul class="detail-menus-foods">
    <h3><i class="fa fa-spoon" aria-hidden="true"></i> Foods</h3>${restaurant.menus.foods
          .map((food) => `
            <li class="detail-menus-items">${food.name}</li>
          `
          ).join('')}
    </ul>
    <ul class="detail-menus-drinks">
    <h3><i class="fa fa-glass" aria-hidden="true"></i> Drinks</h3>${restaurant.menus.drinks
          .map((drink) => `
            <li class="detail-menus-items">${drink.name}</li>
            `
          ).join('')}
    </ul>
    </div>
  </div>
  <div class="detail-review-container">
    <h2 class="detail-container-title">Consumer Reviews</h2>
    <div class="detail-review-grid">
      ${restaurant.consumerReviews
          .map((reviews) => `
          <div class="detail-review-card">
          <i class="fa fa-user-circle-o" aria-hidden="true"></i>
            <div class="detail-review-text">
              <p class="detail-review-name">${reviews.name}</p>
              <p class="detail-review-date">${reviews.date}</p>
              <p class="detail-review-reviewer">${reviews.review}</p>
            </div>
          </div>
          `
        ).join('')}
    </div>
  </div>
  <div class="input-review-container">
  <h2 class="input-review-title">Review this restaurant</h2>
    <input id="input-name" value="" aria-label="Text name here..." type="text" placeholder="Enter your Name...">
    <textarea id="input-review" value="" aria-label="Text review here..." type="text" placeholder="This Resto is awesome..."></textarea>
    <button id="input-submit" aria-label="submit">Submit Review</button>
  </div>
`

const createLikeButton = () => `
  <button aria-label="like restaurant" id="like-button" class="like-button">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createUnlikeButton = () => `
  <button aria-label="unlike restaurant" id="like-button" class="like-button">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createRestaurantList,
  createRestaurantDetail,
  createLikeButton,
  createUnlikeButton
}
