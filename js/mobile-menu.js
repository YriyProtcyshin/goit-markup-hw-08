(() => {
  const refs = {
    menuBtn: document.querySelector('.main-nav__toggler'),
    header: document.querySelector('.header'),
    body: document.querySelector('body'),
  };
  refs.menuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.header.classList.toggle('is-open');
    refs.body.classList.toggle('no-scroll');
  }
})();
