class MainContent extends HTMLElement {
  render () {
    this.innerHTML = ''
  }
}

customElements.define('main-content', MainContent)
