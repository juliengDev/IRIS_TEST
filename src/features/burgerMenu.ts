const closeMenuEl = document.getElementById('close-menu') as HTMLButtonElement
const openMenuEl = document.getElementById('open-menu') as HTMLButtonElement
const mobileMenuEl = document.getElementById('mobile-menu') as HTMLDivElement

if (openMenuEl && closeMenuEl && mobileMenuEl) {
    mobileMenuEl.setAttribute('aria-hidden', 'true')
    openMenuEl.setAttribute('aria-expanded', 'false')

    closeMenuEl.addEventListener('click', () => {
        openMenuEl.focus()

        mobileMenuEl.classList.add('hidden')
        mobileMenuEl.setAttribute('aria-hidden', 'true')
        openMenuEl.setAttribute('aria-expanded', 'false')
    })

    openMenuEl.addEventListener('click', () => {
        mobileMenuEl.classList.remove('hidden')
        mobileMenuEl.setAttribute('aria-hidden', 'false')
        openMenuEl.setAttribute('aria-expanded', 'true')

        closeMenuEl.focus()
    })
}
