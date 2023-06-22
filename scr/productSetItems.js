import { getElement } from './getElement.js'
import { formatPrice } from './utils.js'
import { AddToCart } from './setUpcart.js'
const productSetItems = (product, element, filter) => {
  element.innerHTML = product
    .map((product) => {
      if (!filter) {
        const loading = getElement('.div-loading')
        loading.innerHTML = ''
      }
      return ` 
        <div class="single-feature">
          <div class="featured-img">
            <img src="${product.image}" alt="${product.name}" class="img" />
            <div class="icons">
              <a href="single-product.html?id=${product.id}">
                <i class="fa-solid fa-search"></i>
              </a>
              <button class="btn-shop" data-id="${product.id}">
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
          <h3>${product.name}</h3>
          <h2>${formatPrice(product.price)}</h2>
        </div>`
    })
    .join('')
  if (filter) {
    return
  }
  element.addEventListener('click', function (e) {
    if (e.target.parentElement.classList.contains('btn-shop')) {
      AddToCart(e.target.parentElement.dataset.id)
    }
  })
}
export { productSetItems }
