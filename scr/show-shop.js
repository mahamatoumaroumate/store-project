import { getElement } from './getElement.js'
const shop = getElement('.shop-menu')
const shopitem = getElement('.shop-item')
const btnShopping = getElement('.btn-shopping')
const btnClose = getElement('.shop-item-btn-close')
const showShop = () => {
  btnShopping.addEventListener('click', () => {
    shop.classList.add('show')
    shopitem.classList.add('show')
  })
  btnClose.addEventListener('click', () => {
    shop.classList.remove('show')
    shopitem.classList.remove('show')
  })
}
const openShop = () => {
  shop.classList.add('show')
  shopitem.classList.add('show')
}
export { showShop, openShop }
