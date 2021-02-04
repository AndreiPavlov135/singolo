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

/* mobileLinks.addEventListener('click', () => {
    mobileMeny.classList.toggle('meny_mobile_add');
}); */
mobileLinks.forEach(item => {
    item.addEventListener('click', () => {
        mobileMeny.classList.toggle('meny_mobile_add');
    })
})
console.log(mobileLinks);
