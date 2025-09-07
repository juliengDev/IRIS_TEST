const btnLeftEl = document.getElementById('left-slide') as HTMLButtonElement
const btnRightEl = document.getElementById('rigth-slide') as HTMLButtonElement
const carousel = document.getElementById('carousel') as HTMLDivElement

let currentIndex = 0
const totalSets = 2

function updateCarousel() {
    const moveAmount = currentIndex * 100
    carousel.style.transform = `translateX(-${moveAmount}%)`
}

function nextSlide() {
    currentIndex++
    updateCarousel()

    if (currentIndex >= totalSets) {
        setTimeout(() => {
            carousel.style.transition = 'none'
            currentIndex = 0
            updateCarousel()
            setTimeout(() => {
                carousel.style.transition = 'transform 0.5s ease'
            }, 50)
        }, 500)
    }
}

function prevSlide() {
    if (currentIndex <= 0) {
        carousel.style.transition = 'none'
        currentIndex = totalSets - 1
        updateCarousel()
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease'
            currentIndex--
            updateCarousel()
        }, 50)
    } else {
        currentIndex--
        updateCarousel()
    }
}

btnLeftEl.addEventListener('click', () => {
    prevSlide()
})
btnRightEl.addEventListener('click', () => {
    nextSlide()
})
// init
updateCarousel()
