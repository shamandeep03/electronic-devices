(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    if($('#product-container')){
        console.log('hello world')
        $.ajax({
            url: './js/products.json',
            dataType: 'json',
            success: function(products) {
                // Loop through each product and generate HTML
                console.log()
                $.each(products, function (index, product) {

                    if(index <7  && location.pathname == '/index.html' ){
                        var productHTML = `
                            <div class="col-md-6 col-lg-3 wow fadeInUp service-main" data-wow-delay="0.1s">
                                <div class="service-item">
                                    <div class="overflow-hidden" style="display: flex;justify-content: center;">
                                        <img class="img-fluid" src="./img/products/${product.img}.jpeg" alt="${product.name}">
                                    </div>
                                    <div class="p-4 text-center">
                                        <h4 class="mb-3">${product.name}</h4>
                                        <p>${product.heading}</p>
                                        <a class="fw-medium" href="./explore.html?id=${product.id}">Read More<i class="fa fa-arrow-right ms-2"></i></a>
                                    </div>
                                </div>
                            </div>
                        `;
                        $('#product-container').append(productHTML)
                    }
                });
                if(location.pathname == '/service.html'){
                    $.each(products, function (index, product) {
                            var productHTML = `
                                <div class="col-md-6 col-lg-3 wow fadeInUp service-main" data-wow-delay="0.1s">
                                    <div class="service-item">
                                        <div class="overflow-hidden" style="display: flex;justify-content: center;">
                                            <img class="img-fluid" src="./img/products/${product.img}.jpeg" alt="${product.name}">
                                        </div>
                                        <div class="p-4 text-center">
                                            <h4 class="mb-3">${product.name}</h4>
                                            <p>${product.heading}</p>
                                            <a class="fw-medium" href="./explore.html?id=${product.id}">Read More<i class="fa fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                </div>
                            `;
                            $('#product-container').append(productHTML)
                    });
                }
            }
        });
    }
})(jQuery);

