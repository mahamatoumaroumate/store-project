const allProductsUrl = 'https://course-api.com/javascript-store-products'
const sinProductUrl = 'https://course-api.com/javascript-store-single-product'
const setStorage = (name, product) => {
  localStorage.setItem(name, JSON.stringify(product))
}
const formatPrice = (price) => {
  let formattedprice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2))
  return formattedprice
}
let getStorage = (name) => {
  let storage = localStorage.getItem(name)
  if (storage) {
    storage = JSON.parse(localStorage.getItem(name))
  } else {
    storage = []
  }
  return storage
}
const store = getStorage('storage')
export {
  allProductsUrl,
  setStorage,
  getStorage,
  formatPrice,
  sinProductUrl,
  store,
}
