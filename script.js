var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4.5,
  spaceBetween: 20,
  loopAdditionalSlides:1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.hello',
    prevEl: '.hi',
  },
});

const play=document.querySelectorAll('.human-img-container svg');
const swiperSlide=document.querySelector('.swiper-wrapper');

play.forEach((playbutton)=>{
 playbutton.style.opacity=0;
})

swiperSlide.addEventListener('mousemove',(e)=>{
     console.log(e.target);
})