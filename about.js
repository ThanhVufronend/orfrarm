$('.happy-slide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    arrows:false,
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          }
        },
        {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          },
      ]
  });