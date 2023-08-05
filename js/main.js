
//Efecto 'activo' en los botones del nav
const links = document.querySelectorAll('nav li a');

links.forEach(link => {
  link.addEventListener('click', function() {
    links.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});

// Botón CAMBIAR Estilo de la página (botón oculto en el móvil)
const cambioBtn = document.querySelector('#cambiarEstilo');
const modoBotonMobile = document.querySelector('#modoBotonMobile');

function cambiarModo() {
  document.body.classList.toggle('cambio-estilo');
}

// Asignar la función al botón original (oculto en móvil)
cambioBtn.addEventListener('click', cambiarModo);

// Asignar la función al botón específico para móvil
modoBotonMobile.addEventListener('click', cambiarModo);


//Menú hamburguesa
const menuHamburg = document.querySelector('#menu_hamburguer');

//Aquí estoy vreificaando en consola que sí tomé el elemento que quiero modificar
//console.log(menuHamburg);

menuHamburg.addEventListener('click', function () {
  document.body.classList.toggle('mobile-menu-active');
});


