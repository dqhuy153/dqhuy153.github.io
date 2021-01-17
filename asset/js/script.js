const menuOpen = document.querySelector(".menu__collapse");
const menuClose = document.querySelector(".menu__close");
const headerMenu = document.querySelector(".header .header__nav");

menuOpen.addEventListener("click", function() {
    headerMenu.classList.add("is-open");
});

menuClose.addEventListener("click", function() {
    headerMenu.classList.remove("is-open");
})
document.addEventListener("click", function(){
    if(
        !headerMenu.contains(event.target) && //headerMenu ko chua element khi click
        !event.target.matches(".menu__collapse") //elment khi click ko phai la menuOpen
    ) {
        headerMenu.classList.remove("is-open");
    }
})