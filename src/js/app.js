document.addEventListener('DOMContentLoaded', function() {
    navegacionFija()
    crearGaleria()
    resaltarEnlace()
    scrollNav()
    activarCarruselScrollHorizontal('carousel') // <-- Aquí agregamos la llamada
    moverCarouselAutomaticamente('banner-slider', 1) // scroll automático
})

function navegacionFija() {
    const header = document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival')

    document.addEventListener('scroll', function() {
        if(sobreFestival.getBoundingClientRect().bottom < 1) {
            header.classList.add('fixed')
        } else {
            header.classList.remove('fixed')
        }
    })
}

function crearGaleria() {
    const CANTIDAD_IMAGENES = 16
    const galeria = document.querySelector('.galeria-imagenes')
    
    for(let i = 1; i <= CANTIDAD_IMAGENES; i++){
        const imagen = document.createElement('PICTURE');
        imagen.innerHTML = `
        <source srcset="build/img/gallery/thumb/${i}.avif" type="image/avif">
        <source srcset="build/img/gallery/thumb/${i}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/gallery/thumb/${i}.jpg" alt="imagen galeria">
    `; 

        // Event Handler
        imagen.onclick = function() {
            mostrarImagen(i)
        }
        
        galeria.appendChild(imagen)
    }
}

function mostrarImagen(i) {
    const imagen = document.createElement('IMG')
    imagen.src = `src/img/gallery/full/${i}.jpg`
    imagen.alt = 'Imagen Galería'

    // Generar Modal
    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarModal

    // Botón cerrar modal
    const cerrarModalBtn = document.createElement('BUTTON')
    cerrarModalBtn.textContent = 'X'
    cerrarModalBtn.classList.add('btn-cerrar')
    cerrarModalBtn.onclick = cerrarModal

    modal.appendChild(imagen)
    modal.appendChild(cerrarModalBtn)

    // Agregar al HTML
    const body = document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(modal)
}

function cerrarModal() {
    const modal = document.querySelector('.modal')
    modal.classList.add('fade-out')

    setTimeout(() => {
        modal?.remove()

        const body = document.querySelector('body')
        body.classList.remove('overflow-hidden')
    }, 500);
}

function resaltarEnlace() {
    document.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section')
        const navLinks = document.querySelectorAll('.navegacion-principal a')

        let actual = '';
        sections.forEach( section => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight
            if(window.scrollY >= (sectionTop - sectionHeight / 3 ) ) {
                actual = section.id
            }
        })

        navLinks.forEach(link => {
            link.classList.remove('active')
            if(link.getAttribute('href') === '#' + actual) {
                link.classList.add('active')
            }
        })
    })
}

function scrollNav() {
    const navLinks = document.querySelectorAll('.navegacion-principal a')

    navLinks.forEach( link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            const sectionScroll = e.target.getAttribute('href')
            const section = document.querySelector(sectionScroll)

            section.scrollIntoView({behavior: 'smooth'})
        })
    })
}

// --- NUEVA FUNCIÓN agregada ---
function activarCarruselScrollHorizontal(idCarrusel) {
    const carousel = document.getElementById(idCarrusel)

    if (carousel) {
        carousel.addEventListener('wheel', (evt) => {
            evt.preventDefault()
            carousel.scrollLeft += evt.deltaY
        })
    } else {
        console.warn(`No se encontró un carrusel con el id: ${idCarrusel}`)
    }
}

function moverCarouselAutomaticamente(idCarrusel, velocidad = 1) {
    const carousel = document.getElementById(idCarrusel);

    if (carousel) {
        const imagenes = carousel.querySelectorAll('img');
        let indice = 0;

        setInterval(() => {
            // Mover al siguiente elemento
            indice = (indice + 1) % imagenes.length; // % para que vuelva al inicio cuando llegue al final

            // Desplazar al siguiente elemento
            carousel.scrollLeft = imagenes[indice].offsetLeft;
        }, 3000); // Cambia de imagen cada 3 segundos (ajustable)
    } else {
        console.warn(`No se encontró un carrusel con el id: ${idCarrusel}`);
    }
}


