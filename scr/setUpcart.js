import { formatPrice, getStorage, setStorage, store } from './utils.js'
import { getElement } from './getElement.js'
import { openShop } from './show-shop.js'
import { setCartItems } from './setCartItems.js'
import { fetchdata } from './fetchData.js'
import { setStore } from './setUpstore.js'
const price = getElement('.footer h3')
const amountDOM = getElement('.nav-right span')
const shopcontainer = getElement('.shop-item-items')
let newstore = store
let cart = getStorage('cart')
if (newstore.length < 1) {
  const data = await fetchdata()
  newstore = setStore(data)
}
const AddToCart = (id) => {
  let item = cart.find((product) => product.id === id)
  if (!item) {
    let product = newstore.find((product) => product.id === id)
    product = { ...product, amount: 1 }
    cart = [...cart, product]
    setCartItems(product)
  } else {
    let value = increaseAmount(id)
    const allItemsbtn = [...document.querySelectorAll('.div-items h2')]
    allItemsbtn.forEach((item) => {
      if (item.dataset.id === id) {
        item.textContent = value
      }
    })
  }
  setStorage('cart', cart)
  setCartAmount(id)
  openShop()
  setAmount()
  Totalamount()
}
function Totalamount() {
  let a = cart.reduce((total, item) => {
    return (total += item.price * item.amount)
  }, 0)
  a = formatPrice(a)
  price.textContent = `Total: ${a}`
}
function setAmount() {
  const i = cart.reduce((total, item) => {
    return (total += item.amount)
  }, 0)
  amountDOM.textContent = i
}
function increaseAmount(id) {
  let newAmount = cart.find((item) => item.id === id)
  newAmount = newAmount.amount
  newAmount++
  const value = cart.map((item) => {
    if (item.id === id) {
      item = { ...item, amount: newAmount }
      return item
    }
    return item
  })
  cart = [...value]
  return newAmount
}
function decreaseAmount(id) {
  let newAmount = cart.find((item) => item.id === id)
  newAmount = newAmount.amount
  newAmount--
  const value = cart.map((item) => {
    if (item.id === id) {
      item = { ...item, amount: newAmount }
      return item
    }
    return item
  })
  cart = [...value]
  return newAmount
}
function setCartAmount(id) {
  if (cart.length >= 1) {
    const cartamount = getElement('.number-item')
    const a = cart.find((item) => item.id === id)
  }
}

function removeItem(id) {
  cart = cart.filter((item) => item.id !== id)
}
function setUpcartfonctionality() {
  shopcontainer.addEventListener('click', function (e) {
    const element = e.target
    const parent = e.target.parentElement
    const id = element.dataset.id
    const partentID = parent.dataset.id

    if (element.classList.contains('btn-remove-items')) {
      removeItem(id)
      parent.parentElement.remove()
    }
    if (parent.classList.contains('btn-increase')) {
      let x = increaseAmount(partentID)
      parent.parentElement.lastElementChild.textContent = x
    }
    if (parent.classList.contains('btn-decrease')) {
      let x = decreaseAmount(partentID)
      if (x === 0) {
        removeItem(partentID)
        parent.parentElement.parentElement.remove()
      } else {
        parent.parentElement.lastElementChild.textContent = x
      }
    }
    setStorage('cart', cart)
    setAmount()
    Totalamount()
  })
}
function displayCartamount() {
  cart.forEach(function (item) {
    setCartItems(item)
  })
  setAmount()
}
const init = () => {
  //displayCartTotal()
  displayCartamount()
  Totalamount()
  setUpcartfonctionality()
}
init()
export { AddToCart }
