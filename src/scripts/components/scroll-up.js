class ScrollUp extends HTMLElement {
  connectedCallback () {
    this.render()
    document.getElementById('tombol-up').innerHTML = `
    <style>
    #myTop {
      display: none;
      position: fixed;
      bottom: 20px;
      right: 30px;
      z-index: 99;
      border: none;
      outline: none;
      background: #e89f71;
      color: #1a1c20;
      cursor: pointer;
      padding: 15px;
      border-radius: 10px;
      font-size: 30px;
      transition: 1s;
    }
      #myTop:hover {
        background-color: #edcfa9;
        opacity: 80%;
      }
    </style>
    <button aria-label="Tap to Scroll Up" id="myTop" class="fa fa-angle-double-up">
    </button>
    `

    const myTopButton = document.getElementById('myTop')
    window.onscroll = () => {
      scroll()
    }

    function scroll () {
      if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        myTopButton.style.display = 'block'
      } else {
        myTopButton.style.display = 'none'
      }
    }

    function toTheTop () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }

    document.getElementById('myTop').addEventListener('click', toTheTop)
  }

  render () {
    this.innerHTML = `
    <div id="tombol-up"></div>
    `
  }
}

customElements.define('scroll-up', ScrollUp)
