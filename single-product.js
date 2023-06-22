import { getElement } from './scr/getElement.js'
import { showMenu } from './scr/show-menu.js'
import { showShop, openShop } from './scr/show-shop.js'
import { sinProductUrl } from './scr/utils.js'
import { formatPrice } from './scr/utils.js'
import { AddToCart } from './scr/setUpcart.js'
const url = window.location.search
const container = getElement('.single-product-container')
const imageDom = getElement('.single-img')
const productInfo = getElement('.product-info')
const Domcolors = getElement('.colors')
const DomName = getElement('.single-product-container h1')
const DomCompany = getElement('.single-product-container h2')
const DomPrice = getElement('.single-product-container h3')
const DomDes = getElement('.single-product-container p')
const AddItem = getElement('.single-product-container button')
const SingleText = getElement('.div-about h1')
showMenu()
showShop()
let productid
const div = getElement('.loading')
window.addEventListener('DOMContentLoaded', async function () {
  div.style.display = 'none'
  try {
    const response = await fetch(`${sinProductUrl}${url}`)
    if (response.status >= 200 && response.status <= 299) {
      const data = await response.json()
      const { id, fields } = data
      productid = id
      const { name, price, company, description, colors, image } = fields
      const img = image[0].thumbnails.large.url
      this.document.title = `${name.toUpperCase()}|Comfy`
      SingleText.textContent = `Home/ ${name}`
      imageDom.src = img
      DomName.textContent = name
      DomPrice.textContent = formatPrice(price)
      DomDes.textContent = description
      DomCompany.textContent = company
      colors.forEach(function (color) {
        const element = document.createElement('span')
        element.classList.add('color')
        element.style.color = color
        Domcolors.appendChild(element)
      })
    } else {
      container.innerHTML = `<div class="center"><h1>there is something wont wrong</h1>
      <br>
      <a href="index.html" class="all-a">Back To Home</a></div>`
    }
  } catch (error) {
    console.log(error)
  }
})
AddItem.addEventListener('click', function () {
  AddToCart(productid)
})
