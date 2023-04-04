 $('.happy-slide-preview').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay:true,
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