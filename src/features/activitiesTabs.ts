interface Location {
    name: string
    title: string
    txt: string
    img: string
}
//Intégration WORDPRESS
// Fonction pour obtenir le bon chemin d'image
function getImagePath(relativePath: string): string {
    // Vérifier si on a les variables WordPress disponibles
    if (typeof (window as any).irisTheme !== 'undefined') {
        // En WordPress, utiliser l'URL du thème
        return `${(window as any).irisTheme.themeUrl}/dist${relativePath}`
    }
    // En développement Vite, utiliser le chemin relatif
    return relativePath
}

const locations: Location[] = [
    {
        name: 'Gruissan Pôle Mer',
        title: 'Gruissan Pôle Mer',
        txt: 'Découvrez Gruissan Pôle Mer, un espace dédié aux activités nautiques et à la découverte de la mer Méditerranée.',
        img: '/assets/base-gruissan-pole-mer.png',
    },
    {
        name: 'Gruissan Pôle Étang',
        title: 'Gruissan Pôle Étang',
        txt: "Explorez Gruissan Pôle Étang, un site unique au cœur des étangs et des marais, idéal pour l'observation de la faune et de la flore.",
        img: '/assets/base-gruissan-etang.jpg',
    },
    {
        name: 'Carry le Rouet',
        title: 'Carry le Rouet',
        txt: 'Carry le Rouet vous invite à profiter de ses plages, de ses calanques et de son port animé, entre nature et authenticité.',
        img: '/assets/base-carry-rouet.jpg',
    },
    {
        name: 'Gorges de la Loue',
        title: 'Gorges de la Loue',
        txt: "Les Gorges de la Loue offrent un cadre exceptionnel pour la randonnée et les activités de plein air au cœur d'un paysage verdoyant.",
        img: '/assets/base-gorges-loue.webp',
    },
]

document.addEventListener('DOMContentLoaded', () => {
    const titleEl = document.getElementById(
        'activitie-title'
    ) as HTMLHeadingElement
    const paragrapheEl = document.getElementById(
        'activitie-description'
    ) as HTMLParagraphElement
    const locationsEl = document.getElementById(
        'activities-location'
    ) as HTMLUListElement
    const sectionActivitiesEl = document.getElementById(
        'section-base-activites'
    ) as HTMLElement

    if (!titleEl || !paragrapheEl || !locationsEl || !sectionActivitiesEl) {
        console.warn('Certains éléments de la section activités sont manquants')
        return
    }

    if (locations.length > 0) {
        const firstLocation = locations[0]
        titleEl.textContent = firstLocation.title
        paragrapheEl.textContent = firstLocation.txt
        sectionActivitiesEl.style.backgroundImage = `url('${getImagePath(firstLocation.img)}')`
    }

    locationsEl.querySelectorAll('li').forEach((li) => {
        li.addEventListener('click', (e) => {
            e.preventDefault()

            locationsEl
                .querySelectorAll('li')
                .forEach((item) => item.classList.remove('active'))

            const clickedLi = e.currentTarget as HTMLLIElement
            clickedLi.classList.add('active')

            const nameClicked = clickedLi.textContent?.trim()
            if (!nameClicked) return

            const location = locations.find((loc) => loc.name === nameClicked)
            if (!location) return

            titleEl.textContent = location.title
            paragrapheEl.textContent = location.txt
            sectionActivitiesEl.style.backgroundImage = `url('${getImagePath(location.img)}')`
        })
    })
})
