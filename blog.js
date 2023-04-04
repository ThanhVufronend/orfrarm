$('.slide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    arrows:true,
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