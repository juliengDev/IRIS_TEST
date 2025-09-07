const labelArr = ['wingfoil', 'windsurf', 'voile', 'canoe']

const slidesContainer = document.getElementById(
    'slides-container'
) as HTMLUListElement
const prevButton = document.getElementById(
    'slide-arrow-prev'
) as HTMLButtonElement
const nextButton = document.getElementById(
    'slide-arrow-next'
) as HTMLButtonElement
const sportNamelabelEl = document.getElementById(
    'sportNamelabel'
) as HTMLHeadingElement

const tabsContainer = document.getElementById('tabs') as HTMLDivElement

const slides = Array.from(slidesContainer.children) as HTMLLIElement[]
let currentIndex = 0

const updateCarousel = () => {
    const slideWidth = slidesContainer.clientWidth

    slidesContainer.scrollTo({
        left: currentIndex * slideWidth,
        behavior: 'smooth',
    })
    sportNamelabelEl.textContent = labelArr[currentIndex]
    
    tabsContainer
        .querySelectorAll<HTMLButtonElement>('.tab-btn')
        .forEach((t, i) => {
            if (i === currentIndex) {
                t.setAttribute('aria-selected', 'true')
                t.classList.remove('bg-white/50', 'w-1')
                t.classList.add('bg-white', 'w-14')
            } else {
                t.setAttribute('aria-selected', 'false')
                t.classList.remove('bg-white', 'w-14')
                t.classList.add('bg-white/50', 'w-1')
            }
        })
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length
    updateCarousel()
})

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length
    updateCarousel()
})

tabsContainer.addEventListener('click', (e) => {
    const tab = (e.target as HTMLElement).closest<HTMLButtonElement>('.tab-btn')
    if (!tab) return
    currentIndex = Number(tab.dataset.index)
    updateCarousel()
})

//init
updateCarousel()
