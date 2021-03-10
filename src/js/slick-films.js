$('.slick-films').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
            }
        }]
});