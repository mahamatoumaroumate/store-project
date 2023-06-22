import { setStorage } from './utils.js'
import { getStorage } from './utils.js'
let storage = getStorage('storage')
const setStore = (products) => {
  storage = products.map((product) => {
    const {
      id,
      fields: { featured, name, price, image: img, company, colors },
    } = product
    const image = img[0].thumbnails.large.url
    return { id, featured, name, price, image, colors, company }
  })
  setStorage('storage', storage)
  return storage
}
export { setStore }
