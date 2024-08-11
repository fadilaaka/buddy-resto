import runtime from 'serviceworker-webpack-plugin/lib/runtime'

const RegisterSW = async () => {
  if ('serviceWorker' in navigator) {
    await runtime.register()
    return
  }
  console.log('Service worker not supported')
}

export default RegisterSW
