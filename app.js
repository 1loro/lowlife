document.addEventListener('DOMContentLoaded', function() {
  // Código para el menú de hamburguesa
  const hamburger = document.querySelector('.hamburger-menu');
  const mobileNav = document.querySelector('.mobile-nav');
  
  hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileNav.classList.toggle('active');
  });

  const mobileLinks = mobileNav.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('active');
    });
  });


// Detecta el evento de scroll
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  
  // Cambia el valor a un número mayor para hacer que el scroll tenga que ser más largo
  if (window.scrollY > 150) { // Aumenta el valor para hacerlo menos sensible
    header.classList.add('scrolled'); // Agrega la clase cuando se hace scroll
  } else {
    header.classList.remove('scrolled'); // Elimina la clase cuando no se hace scroll
  }
});




});
