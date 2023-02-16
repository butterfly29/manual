 $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 1) {
          document.getElementById("stick").className = "stick visible";
        } else {
          document.getElementById("stick").className = "stick";
        }
        
      });
      var swiperManual = new Swiper(".manual_carousel", {
          pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
          },
          autoplay: {
            delay: 5000,
          },
          spaceBetween: 50,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          observer: true,
          observeParents: false,
        });