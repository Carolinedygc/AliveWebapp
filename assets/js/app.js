// Dropdown menu
function toggleMenu() {
    let getMenu = document.querySelector('.nav-list');
    getMenu.classList.toggle('show');
}

let getBurgerMenu = document.querySelector("#burgerMenuIcon");
getBurgerMenu.addEventListener('click', toggleMenu);

