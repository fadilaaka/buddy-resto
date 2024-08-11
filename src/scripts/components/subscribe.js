import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

class Subscribe extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
    <style>

    #flex-container {
      display: flex;
      justify-content: center;
      width: 1000px;
      height: auto;
      margin: 0 auto;
      margin-top: 20px;
      margin-bottom: 20px;
    }

    .image-container {
      width: 500px;
      height: auto;
      object-fit: cover;
    }

    .image-subscribe {
      width: 100%;
    }

    .subscribe-placeholder {
      background-color: #edcfa9;
      width: 500px;
      height: auto;
      text-align: center;
    }

    .text-subscribe {
      width: 100%;
      margin: 0 auto;
      margin-top: 30px;
      color: #cf7500;
    }

      .text-subscribe i {
        font-size: 75px;
      }

      .text-subscribe h2 {
        font-size: 50px;
        font-family: 'Gabriola', sans-serif;
        margin: 0;
      }

      .text-subscribe p {
        font-size: 25px;
        font-family: 'Acme', sans-serif;
        margin: 0;
        margin-bottom: 15px;
      }

    .input {
      border: none;
      outline: none;
      border-bottom: 2px solid #cf7500;
      background-color: #edcfa9;
    }

      .input:focus {
        background-color: #f4f4f4;
      }

    .enter {
      background: none;
      border: none;
      cursor: pointer;
      outline: none;
    }

      .enter:hover {
        opacity: 75%;
      }

      .enter:active {
        border: none;
        transform: translateY(4px);
      }

    @media screen and (max-width: 1100px) {
      #flex-container {
        display: flex;
        justify-content: center;
        width: 95%;
        height: auto;
        margin: 20px;
      }
      .subscribe-placeholder {
        padding: 0;
        min-height: 100%;
      }
      .text-subscribe {
        margin: 0 auto;
        margin-top: 10px;
      }
      .text-subscribe i {
        font-size: 52px;
      }

      .text-subscribe h2 {
        font-size: 37px;
        font-family: 'Gabriola', sans-serif;
        margin: 0;
      }

      .text-subscribe p {
        font-size: 16px;
        font-family: 'Acme', sans-serif;
        margin: 0;
        margin-bottom: 15px;
      }
    }

    @media screen and (max-width: 680px) {
      #flex-container {
        display: flex;
        justify-content: center;
        width: 95%;
        height: auto;
        margin: 20px;
      }
      .subscribe-placeholder {
        padding: 0;
        height: 209.31px;
        margin-right: 20px;
        object-fit: cover;
      }
      .text-subscribe {
        margin: 0 auto;
        margin-top: 10px;
      }
      .text-subscribe i {
        font-size: 50px;
      }

      .text-subscribe h2 {
        font-size: 35px;
        font-family: 'Gabriola', sans-serif;
        margin: 0;
      }

      .text-subscribe p {
        font-size: 15px;
        font-family: 'Acme', sans-serif;
        margin: 0;
        margin-bottom: 15px;
      }
      .image-subscribe {
        height: 100%;
      }
    }

    </style>

    <h1 class="title">Subscribe</h1>
    <div id="flex-container">
      <div class="image-container">
        <img crossorigin="anonymous" class="lazyload image-subscribe" data-src="./images/heros/hero-image_1.jpg" srcset="./images/heros/hero-image_1.jpg 480w, ./images/heros/hero-image_1.jpg 800w" sizes="(max-width: 680px) 480px, 800px" alt="human person cook">
      </div>
      <div class="subscribe-placeholder">
        <div class="text-subscribe">
          <i class="fa fa-inbox"></i>
          <h2>Stay Tuned</h2>
          <p>Subscribe to our newsletter and get the latest updates</p>
          <input aria-label="Text email here..." id="email" class="input" type="text" value="" placeholder="Enter your email...">
          <button aria-label="Tap to Submit" onclick="alert('Email telah disubmit, Terima kasih :D');" type="submit" name="button" class="enter fa fa-angle-double-right"></button>
        </div>
      </div>
    </div>
    `
  }
}

customElements.define('subscribe-email', Subscribe)
