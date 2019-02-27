document.getElementById('slider-left').onclick = sliderLeft;
document.getElementById('slider-right').onclick = sliderRight;

autoSlider();
var left = 0;
var right = 0;
var timer;

function sliderLeft() {
    var polosa = document.getElementById('polosa');
    left = left -152;
    if (left < -912) {
        left = 0;
    }
    polosa.style.left = left + 'px';
}

function sliderRight() {
    var polosasa = document.getElementById('polosa');
    right = right +152;
    if (right < +912) {
        right = 0;
    }
    polosasa.style.right = right + 'px';
}

function autoSlider() {
    timer = setInterval(sliderLeft, 3000);
}
