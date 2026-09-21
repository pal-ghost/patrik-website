// Burger menu for mobile and tablet (the menu is always visible on desktop).
const toggle = document.querySelector(".menu-toggle");
const menu = document.getElementById("site-menu");

function setMenu(open) {
  menu.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", String(open));
}

toggle.addEventListener("click", () => {
  setMenu(toggle.getAttribute("aria-expanded") !== "true");
});

menu.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

window.matchMedia("(min-width: 900px)").addEventListener("change", () => setMenu(false));
