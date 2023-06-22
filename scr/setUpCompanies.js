import { getElement } from './getElement.js'
import { productSetItems } from './productSetItems.js'
import { getStorage } from './utils.js'
const storage = getStorage('storage')
const companies = (products, element) => {
  let company = new Set(products.map((company) => company.company))
  company = ['all', ...company]
  element.innerHTML = company
    .map((company) => {
      return ` <button class="company" data-id="${company}">${company}</button>`
    })
    .join('')
  element.addEventListener('click', function (e) {
    e.preventDefault()
    let newstorage
    if (e.target.classList.contains('company')) {
      if (e.target.dataset.id === 'all') {
        newstorage = [...storage]
      } else {
        newstorage = storage.filter(
          (product) => product.company === e.target.dataset.id
        )
      }
      productSetItems(newstorage, getElement('.product-container'), true)
    }
  })
}
export { companies }
