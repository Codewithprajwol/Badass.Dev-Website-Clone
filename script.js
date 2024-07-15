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
  breakpoints: {
    // when window width is >= 320px
    10: {
      slidesPerView:1,
      spaceBetweeen:10,
    },
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    // when window width is >= 640px
    840: {
      slidesPerView: 4.5,
      spaceBetween: 20
    }
  }
});

const play=document.querySelectorAll('.human-img-container svg');
const swiperSlide=document.querySelector('.swiper-wrapper');
const slidingContainer=document.querySelectorAll('.sliding-container');
const imgOverlays=document.querySelectorAll('.img-overlay');

play.forEach((playbutton)=>{
 playbutton.style.display="none";
})

swiperSlide.addEventListener('mousemove',(e)=>{
  const hoveredContainer = e.target.closest('.sliding-container');

  if (hoveredContainer) { 
      const playPauseBtn=hoveredContainer.querySelector('.human-img-container svg');
      const imageOverlay=hoveredContainer.querySelector('.inner-img-container .img-overlay');
      playPauseBtn.style.display="block";
      imageOverlay.style.display="block";
  }
});

swiperSlide.addEventListener('mouseleave', () => {
  // Reset display style for all play buttons when mouse leaves swiperSlide
  document.querySelectorAll('.human-img-container svg').forEach((playbutton) => {
    playbutton.style.display = "none";
  });
  document.querySelectorAll('.img-overlay').forEach((overlay)=>{
    overlay.style.display="none";
  })
});

slidingContainer.forEach((slider)=>{
slider.addEventListener('mouseleave', () => {
  // Reset display style for all play buttons when mouse leaves swiperSlide
  document.querySelectorAll('.human-img-container svg').forEach((playbutton) => {
    playbutton.style.display = "none";
  });
});
});
imgOverlays.forEach((overlay)=>{
overlay.addEventListener('mouseleave', () => {
        overlay.style.display="none";
});
});


