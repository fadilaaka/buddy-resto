class Footer extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
    <style>

    footer {
      position: relative;
      bottom: 0;
      font-family: 'Acme', sans-serif;
      background: #7c3c21;
      width: 100%;
      text-align: center;
      color: #e8e4e1;
      padding: 10px;
    }

    </style>

    <footer>
      <p>Copyright &copy 2020 - Buddy's Resto Apps</p>
    </footer>
    `
  }
}

customElements.define('footer-bottom', Footer)
