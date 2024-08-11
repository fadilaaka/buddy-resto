import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

const ErrorDetail = `
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
  <img class="lazyload" crossorigin="anonymous" id="errorImage" data-src="./images/error.png" alt="error"/>
  <p>Data not found, please try again...</p>
</div>
`

export default ErrorDetail
