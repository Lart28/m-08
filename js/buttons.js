(() => {
  var menu = document.querySelector('.button-animated');
  function toggleMenu() {
    menu.classList.toggle('open');
  }
  menu.addEventListener('click', toggleMenu);
})();
