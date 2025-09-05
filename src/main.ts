import './style.css'

// section  menu

const closeMenuEl = document.getElementById('close-menu') as HTMLButtonElement
const openMenuEl = document.getElementById('open-menu') as HTMLImageElement
const mobileMenu = document.getElementById('mobile-menu') as HTMLDivElement
const menu = document.getElementById('menu') as HTMLDivElement

mobileMenu.setAttribute('aria-hidden', 'true')
openMenuEl.setAttribute('aria-expanded', 'false')
closeMenuEl.setAttribute('aria-expanded', 'true')

closeMenuEl.addEventListener('click', () => {
    mobileMenu.classList.add('hidden')
    menu.classList.remove('hidden')

    mobileMenu.setAttribute('aria-hidden', 'true')
    openMenuEl.setAttribute('aria-expanded', 'false')
})

openMenuEl.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden')
    menu.classList.add('hidden')

    mobileMenu.setAttribute('aria-hidden', 'false')
    openMenuEl.setAttribute('aria-expanded', 'true')
})


