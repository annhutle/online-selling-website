let menu = document.querySelector(".navbar");

document.querySelector("#menu-icon").onclick = () => {
    menu.classList.toggle("open-menu")
}

let logo = document.querySelector("#logo");

logo.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
}