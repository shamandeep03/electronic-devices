function getUrlParameter(name) {
    name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

window.addEventListener('scroll', function () {
    if (window.scrollY >= 100) {
        document.getElementById('explore-nav').style.top = '74px';
    }
});

var id = getUrlParameter('id');
let product = products.find(i => i.id == id);
if (product) {
    document.getElementById('explore-img').src = `./img/products/${product.img}.jpeg`;
    document.getElementById('explore-heading').textContent = product.heading;
    document.getElementById('heading-top').textContent = '< ' + product.name;

    product.details.split('\n').forEach(function (detail) {
        var li = document.createElement('li');
        li.textContent = detail;
        document.getElementById('explore-content').appendChild(li);
    });
}