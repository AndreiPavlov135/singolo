let mobileMeny = document.querySelector('.meny_mobile_hide');
let iconBurger = document.querySelector('.burger_icon_add');
let iconBurgerHide = document.querySelector('.burger_icon_remove');

iconBurger.addEventListener('click', () => {
    mobileMeny.classList.toggle('meny_mobile_add');
});

iconBurgerHide.addEventListener('click', () => {
    mobileMeny.classList.remove('meny_mobile_add');
});

let mobileLinks = document.querySelectorAll('.mobile_link');

mobileLinks.forEach(item => {
    item.addEventListener('click', () => {
        mobileMeny.classList.toggle('meny_mobile_add');
    })
})
console.log(mobileLinks);

let controllerRight = document.querySelector('.slider_controls_arrow_right');
let controllerLeft = document.querySelector('.slider_controls_arrow_left');
let sliderBlue = document.querySelector('.slider_content_blue');
let sliderRosseNone = document.querySelector('.slider');
let controllerAdd = document.querySelector('.slider_controls');
let animeLeft = document.querySelector('.anime_left')

controllerLeft.addEventListener('click', () => {
    sliderRosseNone.classList.toggle('slider_none');
    sliderBlue.classList.toggle('slider_content_blue_add');
    controllerAdd.classList.toggle('slider_controls_add');
});

controllerRight.addEventListener('click', () => {
    sliderRosseNone.classList.toggle('slider_none');
    sliderBlue.classList.toggle('slider_content_blue_add');
    controllerAdd.classList.toggle('slider_controls_add');
});
