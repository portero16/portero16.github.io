const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");
const navLinks = [...document.querySelectorAll(".navigation a")];

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  menuButton.textContent = open ? "Menu" : "Close";
  navigation.classList.toggle("open", !open);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "Menu";
    navigation.classList.remove("open");
  });
});

document.querySelector("[data-year]").textContent = new Date().getFullYear();
