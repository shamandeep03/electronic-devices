(function ($) {
    "use strict";
    let products = [
        {
            "id":1,
            "name":"DS-2CE72DF3T-LSE", 
            "img":"DS-2CE72DF3T-LSE",
            "heading":"2MP Smart Hybrid Light ColorVu Fixed Turret Camera",
            "details":"High quality imaging with 2 MP, 1920 × 1080 resolution\n24/7 color imaging with F1.0 aperture Smart-Hybrid light, optimize your security with flexible lighting options\nClear imaging against strong back light due to 130 dB true WDR technology\n3D DNR technology delivers clean and sharp images\n2.8 mm, 3.6 mm fixed focal lens \nUp to 40 m white light distance for bright night imaging\nUp to 40 m IR distance for bright night imaging High quality audio with audio over coaxial cable, built-in mic\nWater and dust resistant (IP67)"
        },
        {
            "id":2,
            "name":"DS-2CE12KFOT-FS",
            "img":"DS-2CE12KFOT-FS",
            "heading":"3K ColorVu Audio Fixed Bullet Camera",
            "details":"High quality imaging with 3K, 2960 × 1665 resolution\n24/7 color imaging with F1.0 aperture\n2.8 mm, 3.6 mm, 6 mm fixed focal lens\nUp to 40 m white light distance for bright night imaging\nOne port for four switchable signals (TVI/AHD/CVI/CVBS)\nWater and dust resistant (IP67)\nHigh quality audio with audio over coaxial cable, built-in mic\n"
        },
        {
            "id":3,
            "name":"DS-2CE50DF3T-VPLSE",
            "img":"DS-2CE50DF3T-VPLSE",
            "heading":"2MP Smart Hybrid Light ColorVu Fixed Dome Camera",
            "details":"High quality imaging with 2 MP, 1920 × 1080 resolution\n24/7 color imaging with F1.0 aperture\nSmart-Hybrid light, optimize your security with flexible lighting options\nClear imaging against strong back light due to 130 dB true WDR technology\n3D DNR technology delivers clean and sharp images\n2.8 mm, 3.6 mm fixed focal lens\nUp to 40 m white light distance for bright night imaging\nUp to 40 m IR distance for bright night imaging\nHigh quality audio with audio over coaxial cable, built-in mic\n Water and dust resistant (IP67) and vandal resistant (IK10)"
        },
        {
            "id":4,
            "name":"IDS-7104HQHI-M1/S",
            "img":"IDS-7104HQHI-M1_S_4I",
            "heading":"4-ch 1080P Mini 1U H.265 AcuSense DVR",
            "details":"Deep learning based human and vehicle targets classification of Motion Detection 2.0\nDeep learning-based perimeter protection\nH.265 Pro+/H.265 Pro/H.265 video compression\nHDTVI/AHD/CVI/CVBS/IP video inputs\nAudio via coaxial cable\nUp to 6-ch IP camera inputs (up to 6 MP)\nEncoding ability up to 3K/5M Lite @ 12 fps"
        },
        {
            "id":5,
            "name":"IDS-7104HQHI-M1/S",
            "img":"IDS-7104HQHI-M1_S_4I_5",
            "heading":"4-ch 5MP Mini 1U H.265 AcuSense DVR",
            "details":"Deep learning based human and vehicle targets classification of Motion Detection 2.0\nDeep learning-based perimeter protection\nH.265 Pro+/H.265 Pro/H.265 video compression\nHDTVI/AHD/CVI/CVBS/IP video inputs\nAudio via coaxial cable\nUp to 6-ch IP camera inputs (up to 8 MP)\nUp to 8MP@8 fps encoding capablity"
        },
        {
            "id":6,
            "name":"IDS-7104HQHI-M1/S",
            "img":"IDS-7104HQHI-M1_S_16I",
            "heading":"16-ch 1080P Mini 1U H.265 AcuSense DVR",
            "details":"Deep learning based human and vehicle targets classification of Motion Detection 2.0\nDeep learning-based perimeter protection\nH.265 Pro+/H.265 Pro/H.265 video compression\nHDTVI/AHD/CVI/CVBS/IP video inputs\nAudio via coaxial cable\nUp to 6-ch IP camera inputs (up to 6 MP)\nEncoding ability up to 3K/5M Lite @ 12 fps"
        },
        {
            "id":7,
            "name":"DS-7204HGHI-K1",
            "img":"DS-7204HGHI-K1",
            "heading":"4-ch 1080p Lite 1U H.265 DVR",
            "details":"Deep learning based human and vehicle targets classification of Motion Detection 2.0\nH.265 Pro+/H.265 Pro/H.265 video compression\nHDTVI/AHD/CVI/CVBS/IP video input\nAudio via coaxial cable\nUp to 5-ch IP camera inputs (up to 2 MP)\nUp to 1080p Lite@30 fps encoding capabilty\nMax. 1200 m for 720p HDTVI signal"
        },
        {
            "id":8,
            "name":"DS-7208HGHI-M1",
            "img":"DS-7208HGHI-M1",
            "heading":"8-ch 720p 1U H.265 DVR",
            "details":"Deep learning based human and vehicle targets classification of Motion Detection 2.0\nH.265 Pro+/H.265 Pro/H.265 video compression\nHDTVI/AHD/CVI/CVBS/IP video input\nUp to 10-ch IP camera input (up to 5 MP)\nEncoding ability up to 1080p lite @ 15 fps\nMax. 1200 m for 720p HDTVI signal"
        },
        {
            "id":8,
            "name":"DS-7216HGHI-M1",
            "img":"DS-7216HGHI-M1",
            "heading":"16-ch 720p 1U H.265 DVR",
            "details":"Deep learning based human and vehicle targets classification of Motion Detection 2.0\nH.265 Pro+/H.265 Pro/H.265 video compression\nHDTVI/AHD/CVI/CVBS/IP video input\nAudio via coaxial cable\nUp to 18-ch IP camera inputs (up to 5 MP)\nUp to 1080p Lite@15 fps encoding capability\nMax. 1200 m for 720p HDTVI signal"
        },
        {
            "id":8,
            "name":"DS-2AE5225TI-A",
            "img":"DS-2AE5225TI-A",
            "heading":"5-inch 2 MP 25X Powered by DarkFighter IR Analog Speed Dome",
            "details":"High quality imaging with 2 MP resolution\nExcellent low-light performance via powered-by- DarkFighter technology\nClear imaging against strong back lighting due to 120 dB WDR technology\nPan and tilt ability enables camera to monitor zones of interest\n25x optical zoom allows for closer viewing of subjects in expansive areas\nUp to 150m IR range ensures safety at night\nWater and dust resistant (IP66)"
        },
        {
            "id":8,
            "name":"DS-2AE5232T-A",
            "img":"DS-2AE5232T-A",
            "heading":"5-inch 2 MP 32X Powered by DarkFighter Analog Speed Dome",
            "details":"High quality imaging with 2 MP resolution\nExcellent low-light performance via powered-by- DarkFighter technology\nClear imaging against strong back lighting due to 120 dB WDR technology\nPan and tilt ability enables camera to monitor zones of interest\n32x optical zoom allows for closer viewing of subjects in expansive areas\nWater and dust resistant (IP66)"
        },
        {
            "id":8,
            "name":"DS-2AE4225TI-D",
            "img":"DS-2AE4225TI-D",
            "heading":"4-inch 2 MP 25X Powered by DarkFighter IR Analog Speed Dome",
            "details":"High quality imaging with 2 MP resolution\nExcellent low-light performance via powered-by- DarkFighter technology\nClear imaging against strong back lighting due to 120 dB WDR technology\nPan and tilt ability enables camera to monitor zones of interest\n25 × optical zoom allows for closer viewing of subjects in expansive areas\nUp to 100 m IR range ensures safety at night\nWater and dust resistant (IP66)"
        }
    ]
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

    if($('#product-container')){
        console.log(products)
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
})(jQuery);

