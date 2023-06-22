import { getElement } from './scr/getElement.js'
import { showMenu } from './scr/show-menu.js'
import { showShop } from './scr/show-shop.js'
import { fetchdata } from './scr/fetchData.js'
import { setStore } from './scr/setUpstore.js'
import { setProduct } from './scr/setProduct.js'
showMenu()
showShop()
const products = await fetchdata()
const newproduct = setStore(products)
setProduct(newproduct, getElement('.featured-items'))
