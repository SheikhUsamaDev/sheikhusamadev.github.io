const burger = document.querySelector(".burger-menu")
const navbar = document.querySelector(".nav-menu")


function toggleMenu(){
    burger.classList.toggle('hidden');
    navbar.classList.toggle('hidden');
}



burger.addEventListener('click', toggleMenu);