import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

class AppBar extends HTMLElement {
  connectedCallback () {
    this.render()
    function showMenu () {
      document.getElementsByClassName('burger-menu')[0].classList.toggle('responsive')
    }
    document.querySelector('#icon').addEventListener('click', showMenu)
  }

  render () {
    this.innerHTML = `
    <style>
    #appbar img {
      width: 100%;
      max-width: 300px;
      height: auto;
      margin-left: auto;
      margin-right: auto;
      margin-top: 15px;
      margin-bottom: 5px;
      display: block;
    }

    #appbar a img{
      transition: transform .2s;
    }

    #appbar a img:hover {
      transform: scale(1.07);
    }

    .brandLogo {
      object-fit: cover;
    }

    nav {
      background: #f9c49a;
      width: 100%;
      height: auto;
    }

    .burger-menu {
      display: flex;
      justify-content: center;
      width: -moz-fit-content;
      width: -webkit-fit-content;
      width: fit-content;
      margin: auto;
      padding: 0;
    }

      .burger-menu .navigation {
        list-style: none;
        font-family: 'Gabriola', sans-serif;
        margin-left: auto;
        margin-right: auto;
      }

      .burger-menu .navigation a {
        font-size: 1.7em;
        color: #1a1c20;
        text-decoration: none;
        padding: 0 15px 0 15px;
        display: block;
        transition: 0.5s;
      }

      .burger-menu .navigation a:hover {
        background: #ec823a;
        color: #f4f4f4;
        font-style: italic;
        text-decoration: underline;
      }

    .icon {
      display: none;
    }

    .icon:hover {
      background: #ec823a;
      color: #f4f4f4;
      width: 100%;
    }

    /* Jika ukuran layar 680px atau kurang dari itu */
    @media screen and (max-width:680px) {
      #appbar {
        width: auto;
      }

      nav .burger-menu {
        padding: 0;
      }

      nav .burger-menu .navigation {
        display:none;
      }

      .icon {
        display: inline-block;
        font-size: 50px;
        color: #1a1c20;
        text-decoration: none;
      }
    }

    @media screen and (max-width:680px) {
      nav .burger-menu.responsive {
        flex-direction: column;
        position:relative;
        padding: 0;
        width: 100%;
      }

      nav .burger-menu.responsive .navigation {
        display: inline;
      }

      nav .burger-menu.responsive .navigation a {
        display: block;
        text-align: center;
      }

      .icon {
        display: block;
        text-align: center;
      }
    }

    </style>
    <div id="appbar">
      <a href="/"><img class="lazyload brandLogo" data-src="./images/brand.png" alt="brand logo"></a>
      <nav>
        <ul class="burger-menu">
          <a id="icon" class="icon" href="javascript:void(0);">☰</a>
          <li class="navigation"><a href="#/home">Home</a></li>
          <li class="navigation"><a href="#/favorite">Favorite</a></li>
          <li class="navigation"><a href="https://www.instagram.com/akafadila09">About Us</a></li>
        </ul>
      </nav>
    </div>`
  }
}

customElements.define('app-bar', AppBar)
