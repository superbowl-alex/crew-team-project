(() => {
  const refs = {
    openMenuBtn: document.querySelector(".menu-btn-open"),
    closeMenuBtn: document.querySelector(".mobile-btn-close"),
    menu: document.querySelector(".mobile-menu"),
    body: document.querySelector(".body"),
    header: document.querySelector("header"),
  };
  
  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
    refs.header.classList.toggle("hidden-header")
  }
})();