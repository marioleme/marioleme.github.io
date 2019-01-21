const $menu = document.querySelector('.menu');
const $open2 = $menu.querySelector('.open-menu');



$open2.addEventListener("click", event => {
    event.preventDefault();
    $menu.classList.toggle("-active");
    $open2.classList.remove("-active");

})