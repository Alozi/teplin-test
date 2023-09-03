//header__menu-item
document.addEventListener('DOMContentLoaded', function () {
  let items = document.querySelector(".header__inline-menu").querySelectorAll("details.mega-menu");

  items.forEach(item => {
    item.addEventListener("mouseover", () => {
      item.setAttribute("open", true);
      item.querySelector(".mega-menu__content").addEventListener("mouseover", () => {
        item.setAttribute("open", true);
      });
      item.querySelector(".mega-menu__content").addEventListener("mouseleave", () => {
        item.removeAttribute("open");
      });
      item.addEventListener("mouseleave", () => {
        item.removeAttribute("open");
      });
    });
  });
});