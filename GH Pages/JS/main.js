document.getElementById('slider-left').onclick = sliderLeft;
document.getElementById('slider-right').onclick = sliderRight;
let stop = document.getElementById('slider-left');
let stope = document.getElementById('slider-right');

autoSlider();
var left = 0;
var timer;
var polosa = document.getElementById('polosa');

function sliderLeft() {
    left = left + 152;
    if (left === +152) {
        left = -912;
    }
    polosa.style.left = left + 'px';
}

function sliderRight() {
    left = left - 152;
    if (left === -1064) {
        left = 0;
    }
    polosa.style.left = left + 'px';
}

function autoSlider() {
    timer = setInterval(sliderRight, 3000);
}

stop.addEventListener('click', () => {
    clearInterval(timer);
});

/*--------------------------------------------------------------------------------------------------------------------*/

var search = document.getElementById('block_search');

search.onclick = function() {
    search.innerHTML +=
        `<a href='http://localhost:63342/ST-34-85/HTML/main/product.html?id=${bd[i]["id"]}' class='qwe'>` +
        "<div class='card'>" +
        "<img src=" + bd[i]['img-1'] + ">" +
        "<hr>" +
        "<h2>" + bd[i]['firm'] + "</h2>" +
        "<h3>" + bd[i]['name'] + "</h3>" +
        "<h1>" + bd[i]['price'] + "</h1>" +
        "</div>" +
        "</a>";
};