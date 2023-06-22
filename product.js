import { getElement } from './scr/getElement.js'
import { showMenu } from './scr/show-menu.js'
import { showShop } from './scr/show-shop.js'
import { fetchdata } from './scr/fetchData.js'
import { setStore } from './scr/setUpstore.js'
import { setProduct } from './scr/setProduct.js'
import { productSetItems } from './scr/productSetItems.js'
import { companies } from './scr/setUpCompanies.js'
import { getStorage } from './scr/utils.js'
import { setUpprice } from './scr/setUpprice.js'
import { AddToCart } from './scr/setUpcart.js'
const producterr = getElement('.product-container')
let newproduct = getStorage('storage')
async function init() {
  if (newproduct.length < 1) {
    const value = await fetchdata()
    newproduct = setStore(value)
  }
  productSetItems(newproduct, getElement('.product-container'), false)
  companies(newproduct, getElement('.companies'))
  const form = getElement('.search-form')
  const input = getElement('.input-search')
  function init() {}
  form.addEventListener('keyup', function (e) {
    e.preventDefault()
    let value = input.value
    let newstorage
    if (value === '') {
      newstorage = [...newproduct]
    } else if (value !== '') {
      newstorage = newproduct.filter((product) =>
        product.name.startsWith(value)
      )
    } else if (newstorage.length < 1) {
      producterr.innerHTML = `<h1 class="filter-error">Sorry,not mathed the result</h1>`
    }

    productSetItems(newstorage, getElement('.product-container'), true)
  })
}
init()
showMenu()
showShop()
setUpprice(newproduct)
