document.addEventListener('DOMContentLoaded', () => {
  navegacionFija();
  crearGaleria();
  resaltarEnlace();
  scrollNav();
  activarCarruselScrollHorizontal('carousel');
  moverCarouselAutomaticamente('banner-slider', 1);
  // Muestra el botón desde 300 px ó cuando la sección .sobre-festival
  // haya salido por completo de la vista (elige el que prefieras):
  activarBotonSubir({ trigger: 300 });               // ← por píxeles
  // activarBotonSubir({ trigger: '.sobre-festival' }); // ← por selector
});

/* -------------------------------------------------------------------------- */
/*  Navegación fija                                                           */
/* -------------------------------------------------------------------------- */
function navegacionFija () {
  const header        = document.querySelector('.header');
  const sobreFestival = document.querySelector('.sobre-festival');

  document.addEventListener('scroll', () => {
    header.classList.toggle('fixed', sobreFestival.getBoundingClientRect().bottom < 1);
  });
}

/* -------------------------------------------------------------------------- */
/*  Galería con modal                                                         */
/* -------------------------------------------------------------------------- */
function crearGaleria () {
  const CANTIDAD_IMAGENES = 16;
  const galeria           = document.querySelector('.galeria-imagenes');

  for (let i = 1; i <= CANTIDAD_IMAGENES; i++) {
    const picture = document.createElement('picture');
    picture.innerHTML = `
      <source srcset="build/img/gallery/thumb/${i}.avif" type="image/avif">
      <source srcset="build/img/gallery/thumb/${i}.webp" type="image/webp">
      <img loading="lazy" width="200" height="300"
           src="build/img/gallery/thumb/${i}.jpg" alt="Imagen galería ${i}">
    `;
    picture.addEventListener('click', () => mostrarImagen(i));
    galeria.appendChild(picture);
  }
}

function mostrarImagen (i) {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
    <img src="src/img/gallery/full/${i}.jpg" alt="Imagen galería ${i}">
    <button class="btn-cerrar">X</button>
  `;

  modal.addEventListener('click', cerrarModal);
  modal.querySelector('.btn-cerrar').addEventListener('click', cerrarModal);

  document.body.append(modal);
  document.body.classList.add('overflow-hidden');
}

function cerrarModal () {
  const modal = document.querySelector('.modal');
  modal?.classList.add('fade-out');
  setTimeout(() => {
    modal?.remove();
    document.body.classList.remove('overflow-hidden');
  }, 500);
}

/* -------------------------------------------------------------------------- */
/*  Resaltar enlace activo + scroll suave                                     */
/* -------------------------------------------------------------------------- */
function resaltarEnlace () {
  const sections  = document.querySelectorAll('section');
  const navLinks  = document.querySelectorAll('.navegacion-principal a');

  document.addEventListener('scroll', () => {
    let actual = '';
    sections.forEach(sec => {
      const top    = sec.offsetTop;
      const height = sec.clientHeight;
      if (window.scrollY >= top - height / 3) actual = sec.id;
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + actual);
    });
  });
}

function scrollNav () {
  document.querySelectorAll('.navegacion-principal a')
    .forEach(link => link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href'))
              .scrollIntoView({ behavior: 'smooth' });
    }));
}

/* -------------------------------------------------------------------------- */
/*  Carrusel horizontal manual y automático                                   */
/* -------------------------------------------------------------------------- */
function activarCarruselScrollHorizontal (id) {
  const carousel = document.getElementById(id);
  if (!carousel) return console.warn(`No se encontró ${id}`);
  carousel.addEventListener('wheel', e => {
    e.preventDefault();
    carousel.scrollLeft += e.deltaY;
  });
}

function moverCarouselAutomaticamente (id, velocidad = 1) {
  const carousel = document.getElementById(id);
  if (!carousel) return console.warn(`No se encontró ${id}`);

  const imgs   = carousel.querySelectorAll('img');
  let   indice = 0;

  setInterval(() => {
    indice              = (indice + velocidad) % imgs.length;
    carousel.scrollLeft = imgs[indice].offsetLeft;
  }, 3000);
}

function activarBotonSubir(id, scroll){

    id = "BtnSubir"
    scroll = 300;
    const bton = document.getElementById(id);
    if (!bton) return;

    function Visibilidad(){
        bton.style.display = window.scrollY > scroll ? "block": "none";

    }

    window.addEventListener("scroll", Visibilidad);
    Visibilidad();

    bton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });


}
