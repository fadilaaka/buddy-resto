import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

class PreLoader extends HTMLElement {
  connectedCallback () {
    this.render()
    if (document.querySelector('main-content').style.display === 'block') {
      document.getElementById('preloader').style.opacity = 1
    } else {
      setTimeout(function () {
        document.getElementById('preloader').style.opacity = 0
      }, 1000)
      setTimeout(function () {
        document.getElementById('preloader').style.display = 'none'
      }, 5000)
    }
  }

  render () {
    this.innerHTML = `
    <style>

    #preloader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 999;
      background-color: #e8e4e1;
      transition: 3s ease;
    }

    #preloader .loading {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      font: 14px arial
    }

    #preloader.hidden{
      opacity:0;
    }

    .loading p {
      text-align: center;
      font-family: 'Acme', sans-serif;
    }

    </style>

    <div id="preloader">
      <div class="loading">
        <img class="lazyload" crossorigin="anonymous" data-src="/images/RippleLoading.gif" alt="Loading Image" sizes="(max-width: 600px) 480px, 800px">
        <p>Data sedang dimuat...</p>
      </div>
    </div>
    `
  }
}

customElements.define('pre-loader', PreLoader)
