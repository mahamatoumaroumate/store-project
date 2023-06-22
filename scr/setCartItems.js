import { getElement } from './getElement.js'
import { formatPrice } from './utils.js'
const setCartItems = ({ id, price, name, amount, image }) => {
  const value = `<img
            src="${image}"
            alt="${name}"
            class="shop-items-img"
          />
          <div class="shop-item-items-info">
            <h2>${name}</h2>
            <h3>${formatPrice(price)}</h3>
            <button class="btn-remove-items"data-id="${id}">remove</button>
          </div>
          <div class="shop-item-amount" data-id="${id}">
            <button class="btn-increase" data-id="${id}">
              <i class="fa-solid fa-chevron-up"></i>
            </button>
            <button class="btn-decrease" data-id="${id}">
              <i class="fa-solid fa-chevron-down"></i>
            </button>
             <h2 class="number-item" data-id="${id}">${amount}</h2>
          </div>`
  const element = document.createElement('div')
  element.innerHTML = value
  const container = getElement('.shop-item-items')
  element.classList.add('div-items')
  container.appendChild(element)
}
export { setCartItems }
