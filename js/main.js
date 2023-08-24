$(document).ready(function(){
  
  AOS.init({
    disable: function(){
      const maxWidth = 1100;
      return window.innerWidth < maxWidth
    }
  });

    $(window).scroll(function(){

      const sct = $(window).scrollTop();
      console.log(sct);

      if(sct > 1){
        $(".header").addClass('active');
        $(".header .menu li").addClass('active');
      }else{
        $(".header").removeClass('active');
        $(".header .menu li").removeClass('active');
      }
    })

    // sec-2 swiper
    const ww = $(window).width();

    var swiper = new Swiper(".mySwiper", {
        initialSlide:"0",
        slidesPerView:"2",
        spaceBetween: 20,
        // loop:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints:{
          1100:{
            slidesPerView:"4"
          }
        }
      });
      // 토글메뉴 클릭 이벤트
      $("#icon").click(function(){
        $(".m-toggle-menu").toggleClass('active')
      })
      // 헤더 호버 이벤트
      $(".header > .menu a").mouseenter(function(){
        $(".header").addClass('active')
        $(".header > .menu li").addClass('active')
      })
      $(".header > .menu").mouseleave(function(){
        $(".header").removeClass('active')
        $(".header > .menu li").removeClass('active')
      })
      // about 호버이벤트
      $(".tab1").mouseenter(function(){
        $(".about").addClass('active')
        $(".sub-menu-box").addClass('active')
      })
      $(".about-head").mouseleave(function(){
        $(".about").removeClass('active')
        $(".sub-menu-box").removeClass('active')
      })
      // menu 호버이벤트
      $(".tab3").mouseenter(function(){
        $(".menu").addClass('active')
        $(".sub-menu-box").addClass('active')
      })
      $(".menu-head").mouseleave(function(){
        $(".menu").removeClass('active')
        $(".sub-menu-box").removeClass('active')
      })
      // company 호버이벤트
      $(".tab4").mouseenter(function(){
        $(".company").addClass('active')
        $(".sub-menu-box").addClass('active')
      })
      $(".company-head").mouseleave(function(){
        $(".company").removeClass('active')
        $(".sub-menu-box").removeClass('active')
      })

      if(ww > 1100){
        $(".contentbox").mouseenter(function(){
          $(".sec6-container").css("animation-play-state","paused")
        })
        $(".contentbox").mouseleave(function(){
          $(".sec6-container").css("animation-play-state","running")
        })
      }else{
        
      }
      
      
})
