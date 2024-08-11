import 'regenerator-runtime' /* for async await transpile */
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import '../styles/main.css'
import '../styles/detail.css'
import './components/preloader'
import './components/scroll-up'
import './components/appbar'
import './components/heroslider'
import './components/content'
import './components/subscribe'
import './components/footer'
import App from './app'
import RegisterSW from './tools/register-sw'

const app = new App({
  button: document.querySelector('#icon'),
  drawer: document.querySelector('nav'),
  content: document.querySelector('main-content')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  RegisterSW()
})
