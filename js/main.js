$(document).ready(function () {
  const flowersSlider = new Swiper('.slider-flowers', {
    loop: true,
    slidesPerView: 6,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 6,
      }
    }
});

const reviewsSlider = new Swiper('.slider-reviews', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
$("#review-1").on('click', function() {
  $.fancybox.open([
    {
      src  : 'https://images.unsplash.com/photo-1507137739556-a99b0eca04e5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80/1500x1000',
      opts : {
        caption : 'First caption',
        thumb   : 'https://images.unsplash.com/photo-1507137739556-a99b0eca04e5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80/240x160'
      }
    },
    {
      src  : 'https://images.unsplash.com/photo-1512056495345-913a0c261dc8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80/1500x1000',
      opts : {
        caption : 'Second caption',
        thumb   : 'https://images.unsplash.com/photo-1512056495345-913a0c261dc8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80/240x160'
      }
    }
  ], {
    loop : true,
    thumbs : {
      autoStart : true
    }
  });
});
$("#review-2").on('click', function() {
  $.fancybox.open([
    {
      src  : 'https://images.unsplash.com/photo-1525169651900-b9c6aa4764fc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80/1500x1000',
      opts : {
        caption : 'First caption',
        thumb   : 'https://images.unsplash.com/photo-1525169651900-b9c6aa4764fc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80/240x160'
      }
    },
    {
      src  : 'https://images.unsplash.com/photo-1521632394700-e22130c3143a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80/1500x1000',
      opts : {
        caption : 'Second caption',
        thumb   : 'https://images.unsplash.com/photo-1521632394700-e22130c3143a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80/240x160'
      }
    }
  ], {
    loop : true,
    thumbs : {
      autoStart : true
    }
  });
});
$("#review-3").on('click', function() {
  $.fancybox.open([
    {
      src  : 'https://images.unsplash.com/photo-1600965876572-9958c342bf52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80/1500x1000',
      opts : {
        caption : 'First caption',
        thumb   : 'https://images.unsplash.com/photo-1600965876572-9958c342bf52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80/240x160'
      }
    },
    {
      src  : 'https://images.unsplash.com/photo-1531160690804-fcdd7fa11417?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=619&q=80/1500x1000',
      opts : {
        caption : 'Second caption',
        thumb   : 'https://images.unsplash.com/photo-1531160690804-fcdd7fa11417?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=619&q=80/240x160'
      }
    }
  ], {
    loop : true,
    thumbs : {
      autoStart : true
    }
  });
});

});