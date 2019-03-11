function xhttr() {
    var xhr = new XMLHttpRequest();
    var BD;
    xhr.open("GET", "../json/BD.json");

    xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            BD = JSON.parse(xhr.responseText);
            console.log(BD)
        }
    });
    xhr.send();
}

xhttr();

document.getElementById('slider-left').onclick = sliderLeft;
document.getElementById('slider-right').onclick = sliderRight;
document.getElementById('block-search').onclick = blockSearch;
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




function blockSearch() {
    document.getElementById('block-search').style.paddingLeft = '50px';

}





























