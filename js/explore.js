(function ($) {
    function getUrlParameter(name) {
        name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
    $(window).scroll(function() {
        // Check if user has scrolled down 10px
            if ($(this).scrollTop() >= 100) {
                $('#explore-nav').css('top', '74px');
            }
        })
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
    var id = getUrlParameter('id');
    let product = products.find(i => i.id == id)
    if(product) $('#explore-img').attr('src', `./img/products/${product.img}.jpeg`);
    $('#explore-heading').text(product.heading)
    $('#heading-top').text('< '+product.name)
    console.log(product.details.split('\n'))
    $.each(product.details.split('\n'), function (index, test) {
        var productHTML = `<li class='pb-2'>${test}</li>`;
        $('#explore-content').append(productHTML)
    });
})(jQuery);

