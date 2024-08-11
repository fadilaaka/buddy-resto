import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

const ErrorFavorite = `
<style>
  #error {
    text-align: center;
    margin: 20px auto;
  }
  #errorImage {
    object-fit: cover;
    max-width: 500px;
    min-width: 200px;
  }
  #error p {
    margin: 0;
    font-family: 'Acme', sans-serif;
    font-size: 20px;
  }
</style>
<div id=error>
  <img class="lazyload" aria-label="Tidak ada restaurant yang disukai" crossorigin="anonymous" id="errorImage" data-src="./images/error.png" alt="error"/>
  <p>Data not found, please like the restaurant first...</p>
</div>
`

export default ErrorFavorite
