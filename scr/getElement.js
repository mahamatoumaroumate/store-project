export const getElement = (value) => {
  const element = document.querySelector(value)
  if (element) {
    return element
  } else {
    throw new Error(`There is an error in your selection ${value} `)
  }
}
