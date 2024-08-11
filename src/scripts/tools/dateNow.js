const namaBulan = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December']
const date = new Date()
const month = namaBulan[date.getMonth()]
const day = String(date.getDate()).padStart(2)
const year = date.getFullYear()
const dateNow = day + ' ' + month + ' ' + year

export default dateNow
