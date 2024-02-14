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
    $.ajax({
        url: './js/products.json',
        dataType: 'json',
        success: function(products) {
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
        }
    });
})(jQuery);

