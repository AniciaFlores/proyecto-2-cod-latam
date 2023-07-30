const links = document.querySelectorAll('nav li a');

links.forEach(link => {
  link.addEventListener('click', function() {
    links.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});

//Botón CAMBIAR Estilo de la página

const cambioBtn = document.querySelector('#cambiarEstilo');

cambioBtn.addEventListener('click', function(){
  document.body.classList.toggle('cambio-estilo');
});

const menuHamburg = document.querySelector('#menu_hamburguer')

//Aquí estoy vreificaando en consola que sí tomé el elemento que quiero modificar
console.log(menuHamburg);

menuHamburg.addEventListener('click', function(){
  document.body.classList.toggle('mobile-menu-active')
});

//galeria
/*
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
  slides.forEach(slide => slide.classList.remove('show'));
  slides[currentSlide].classList.add('show');
  currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(showSlide, 3000); // Cambia la imagen cada 3 segundos (3000 milisegundos)*/
