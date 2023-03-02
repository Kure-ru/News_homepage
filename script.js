const menuBar = document.querySelector('#nav__bar')
const iconMenu = document.querySelector('#icon--menu')
const iconClose = document.querySelector('#icon--menu--close')
const darkFilter = document.querySelector('#darken--bg')

iconMenu.addEventListener('click', openMenu)
iconClose.addEventListener('click', closeMenu)

function openMenu() {
    menuBar.classList.add('menu--open')
    darkFilter.classList.add('dark--bg')
}

function closeMenu() {
    console.log('close')
    menuBar.classList.remove('menu--open')
    darkFilter.classList.remove('dark--bg')
}