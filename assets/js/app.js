const burger = document.querySelector('.burger__menu')
const header = document.querySelector('.header')

burger.addEventListener('click', ()=>{
  header.classList.toggle('header-active')
})

const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
    },
});

console.log('');


