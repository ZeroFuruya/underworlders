const toggleButton = document.querySelector(".bar-container");
const mobMenu = document.querySelector(".mobile-menu");
const menCon = document.querySelector(".menu-container");

toggleButton.addEventListener('click', () => {

    mobMenu.classList.toggle("active");
    menCon.classList.toggle("active");

});