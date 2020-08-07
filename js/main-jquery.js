// Sync Two Sliders:
$('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    adaptiveHeight: true,
    infinite: true,
    useTransform: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});

$('.slider-nav')
    .on('init', function(event, slick) {
        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
        centerMode: true,
        slidesToShow: 1,
        respondTo: 'min',
        slidesToScroll: 1,
        dots: false,
        focusOnSelect: false,
        infinite: true,
        adaptiveHeight:false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
        }
        }, {
            breakpoint: 420,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
    }
        }]
    });

$('.slider-single').on('afterChange', function(event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
});

$('.slider-nav').on('click', '.slick-slide', function(event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.slider-single').slick('slickGoTo', goToSingleSlide);
});

// Add Active Class And Scroll to Sections

$('nav div ul li a').click(function(){

    $(this).addClass('active-link').siblings().removeClass('active-link');

    $('html, body').animate({
        scrollTop: $('#' + $(this).data('nav')).offset().top
    }, 1000);

});

$(window).scroll(function(){
    const thrdElement = $('#Header .start-form .form-elements:nth-of-type(3)').offset().top + 10;
    const _window = window.pageYOffset;
    if(_window >= thrdElement){
        $('nav').addClass('active-nav');
    }else{
        $('nav').removeClass('active-nav');
    }
});

// For The Accordion

const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });   
}

// Adjust Accordion Section Height

// $('.faqs').css('height', $('.faqs .container').scrollHeight+"px")

