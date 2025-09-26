 var swiper = new Swiper(".librarySwiper", {
    slidesPerView: 2,   
    spaceBetween: 20,    
    loop: true,         
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },    
      768: { slidesPerView: 1 },  
      992: { slidesPerView: 2 }   
    }
  });