import { productSetItems } from './productSetItems.js'
import { getElement } from './getElement.js'
const priceInput = getElement('.price-input')
const priceText = getElement('.price-text')
const setUpprice = (store) => {
  let max = store.map((product) => product.price / 100)
  max = Math.max(...max)
  max = Math.ceil(max)
  priceInput.value = max
  priceInput.max = max
  priceInput.min = 0
  priceText.textContent = `Value:$${max}`
  priceInput.addEventListener('input', function () {
    const value = parseInt(priceInput.value)
    priceText.textContent = `Value:$${value}`
    const newStore = store.filter((product) => product.price / 100 <= value)
    if (newStore.length < 1) {
      const container = getElement('.product-container')
      container.innerHTML = `<h1 class="filter-error">Sorry,not mached the result</h1>`
    } else {
      productSetItems(newStore, getElement('.product-container'), true)
    }
  })
}
export { setUpprice }
