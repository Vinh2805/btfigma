 var swiperBottom = new Swiper(".librarySwiper", {
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
  // Layout của 1 slide (dùng template string)
const slideContent = `
  <div class="row py-4">
                            <!-- Cột trái -->
                            <div class="col-md-6">
                                <div class="card border-0">

                                    <img src="assets/img/header/Rectangle.png" class="img-fluid" alt="news">
                                    <div class="position-absolute bottom-0 start-0 text-white p-3 w-100">
                                        <span class="badge text-danger bg-white">Y DƯỢC HỌC TRONG NƯỚC</span>
                                        <h5 class=" header-news-image mt-2">Bộ Y tế đã cấp mới, gia hạn số đăng ký
                                            16.000 loại thuốc,
                                            vaccine, sinh phẩm</h5>
                                        <small><img src="./assets/img/header/Union1.png" alt="Union icon">
                                            21/10/2023</small>
                                    </div>
                                </div>
                            </div>


                            <!-- Cột phải -->
                            <div class="col-md-6 ">
                                <ul class="list-unstyled">
                                    <li class="my-3 d-flex pb-3" style="border-bottom: 1px dotted #999;">
                                        <span class="me-2 text-danger"><img src="./assets/img/header/Widget.png"
                                                alt="Widget icon"></span>
                                        <a href="#" class="header-breaking-news text-decoration-none">
                                            Robot mổ não Modus V Synaptive có khả năng giúp bác sĩ thấy rõ các bó sợi
                                            thần kinh, các mô não lành...
                                        </a>
                                    </li>
                                    <li class="my-3 d-flex pb-3" style="border-bottom: 1px dotted #999;">
                                        <span class="me-2 text-danger"><img src="./assets/img/header/Widget.png"
                                                alt="Widget icon"></span>
                                        <a href="#" class="header-breaking-news text-decoration-none">
                                            Robot mổ não Modus V Synaptive có khả năng giúp bác sĩ thấy rõ các bó sợi
                                            thần kinh, các mô não lành...
                                        </a>
                                    </li>
                                    <li class="my-3 d-flex pb-3" style="border-bottom: 1px dotted #999;">
                                        <span class="me-2 text-danger"><img src="./assets/img/header/Widget.png"
                                                alt="Widget icon"></span>
                                        <a href="#" class="header-breaking-news text-decoration-none">
                                            Robot mổ não Modus V Synaptive có khả năng giúp bác sĩ thấy rõ các bó sợi
                                            thần kinh, các mô não lành...
                                        </a>
                                    </li>
                                    <li class="my-3 d-flex">
                                        <span class="me-2 text-danger"><img src="./assets/img/header/Widget.png"
                                                alt="Widget icon"></span>
                                        <a href="#" class="header-breaking-news text-decoration-none">
                                            Robot mổ não Modus V Synaptive có khả năng giúp bác sĩ thấy rõ các bó sợi
                                            thần kinh, các mô não lành...
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
`;

// Chèn 3 slide giống nhau vào Swiper
const wrapper = document.querySelector(".topSwiper .swiper-wrapper");
for (let i = 0; i < 3; i++) {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");
  slide.innerHTML = slideContent;
  wrapper.appendChild(slide);
}

// Khởi tạo Swiper
var swiperTop = new Swiper(".topSwiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
