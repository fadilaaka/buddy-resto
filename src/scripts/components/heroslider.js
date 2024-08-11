import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

class HeroSlider extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
    <style>

    #heroslider{
      width: 100%;
      margin: 0 auto;
      overflow: hidden;
    }

    .slide {
      display: flex;
      width: 200%;
      position: relative;
      -webkit-animation:slide 20s infinite;
      -moz-animation:slide 20s infinite;
      -ms-animation:slide 20s infinite;
      -o-animation:slide 20s infinite;
      animation:slide 20s infinite;
    }

      .slide .section1 {
        width: 50%;
        height: 550px;
      }
      .slide .section2 {
        width: 50%;
        height: 550px;
      }
      @-webkit-keyframes slide {
        0% {left:0;}
        25% {left:0;}
        50% {left:-100%;}
        75% {left:-100%;}
        100% {left:0;}
      }
      @-moz-keyframes slide {
        0% {left:0;}
        25% {left:0;}
        50% {left:-100%;}
        75% {left:-100%;}
        100% {left:0;}
      }
      @-ms-keyframes slide {
        0% {left:0;}
        25% {left:0;}
        50% {left:-100%;}
        75% {left:-100%;}
        100% {left:0;}
      }
      @-o-keyframes slide {
        0% {left:0;}
        25% {left:0;}
        50% {left:-100%;}
        75% {left:-100%;}
        100% {left:0;}
      }
      @keyframes slide {
        0% {left:0;}
        25% {left:0;}
        50% {left:-100%;}
        75% {left:-100%;}
        100% {left:0;}
      }

    .section1 {
      position: relative;
      display: block;
      width: 100%;
      height: 550px;
    }

    .section2 {
      position: relative;
      display: block;
      width: 100%;
      height: 550px;
    }

    .image {
      display: block;
      width: 100%;
      height: 550px;
      opacity: 50%;
      object-fit: cover;
    }

    .text1 {
      position: absolute;
      font-family: 'Acme', sans-serif;
      font-size: 1em;
      top: 50%;
      left: 50%;
      transform: translate( -50%, -50% );
      text-align: center;
      color: #1a1c20;
    }

      .text1 p {
        font-size: 1.5em;
      }

    .text2 {
      position: absolute;
      font-family: 'Acme', sans-serif;
      font-size: 1em;
      top: 50%;
      left: 50%;
      transform: translate( -50%, -50% );
      text-align: center;
      color: #1a1c20;
    }

      .text2 p {
        font-size: 1.5em;
      }


    @media screen and (max-width:680px) {
      .image {
        max-width: 700px;
      }
      .text1 {
        font-size: 1em;
      }
    }

    </style>

    <div id="heroslider">
      <div class="slide">
        <div class="section1">
          <img crossorigin="anonymous" class="lazyload image" data-src="./images/heros/hero-image_2.jpg" srcset="./images/heros/hero-image_2.jpg 480w, ./images/heros/hero-image_2.jpg 800w" sizes="(max-width: 680px) 480px, 800px" alt="Background makanan">
          <div class="text1">
            <h1>Nothing will benefit human health and increase chances <br>
                for survival of life on Earth as much as the evolution to a vegetarian diet.</h1>
            <p>~Albert Einstein~</p>
          </div>
        </div>
        <div class="section2">
          <img crossorigin="anonymous" class="lazyload image" data-src="./images/heros/hero-image_4.jpg" srcset="./images/heros/hero-image_4.jpg 480w, ./images/heros/hero-image_4.jpg 800w" sizes="(max-width: 680px) 480px, 800px" alt="Background makanan kedua">
          <div class="text2">
            <h1>There are people in the world so hungry that God <br>
                cannot appear to them except in the form of bread.</h1>
            <p>~Mahatma Ghandi~</p>
          </div>
        </div>
      </div>
    </div>
    `
  }
}

customElements.define('hero-slider', HeroSlider)
