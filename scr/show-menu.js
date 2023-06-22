import { getElement } from './getElement.js'
const menu = getElement('.div-menu')
const btnMenu = getElement('.btn-menu')
const btnCloseMenu = getElement('.btn-close')
export const showMenu = () => {
  btnMenu.addEventListener('click', () => {
    menu.classList.add('show')
  })
  btnCloseMenu.addEventListener('click', () => {
    menu.classList.remove('show')
  })
}
