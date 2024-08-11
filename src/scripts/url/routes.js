import Home from '../view-page/home'
import Favorite from '../view-page/favorite'
import Detail from '../view-page/detail'

const routes = {
  '/': Home,
  '/home': Home,
  '/favorite': Favorite,
  '/detail/:id': Detail
}

export default routes
