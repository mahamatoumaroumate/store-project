import { allProductsUrl } from './utils.js'
const fetchdata = async () => {
  const response = await fetch(allProductsUrl)
  const data = await response.json()
  if (data) {
    return data
  } else {
    throw new Error(`${console.error}`)
  }
}
export { fetchdata }
