var mainMenShoes = document.getElementById('main-men-shoes');
var mainMenSneakers = document.getElementById('main-men-sneakers');
var mainMenBoots = document.getElementById('main-men-boots');

function main_Men_Shoes(id, number, type) {
    var xhr = new XMLHttpRequest();
    var bd;
    xhr.open("GET", "../../json/BD.json");

    xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            bd = JSON.parse(xhr.responseText);
            for (var i = number; i < number + 4; i++){
                if (bd[i]['type'] = type)
                id.innerHTML +=
                    "<a class='qwe'>" +
                    "<div class='card'>" +
                    "<img src=" + bd[i]['img-1'] +">" +
                    "<hr>" +
                    "<h2>" + bd[i]['firm'] + "</h2>" +
                    "<h3>" + bd[i]['name'] + "</h3>" +
                    "<h1>" + bd[i]['price'] + "</h1>" +
                    "</div>" +
                    "</a>";
            }
        }
    });
    xhr.send();
}
main_Men_Shoes(mainMenShoes, 0, "shoes");
main_Men_Shoes(mainMenSneakers, 4,"sneakers");
main_Men_Shoes(mainMenBoots, 8, "boots");

/*
var xhr = new XMLHttpRequest();
var bd;
xhr.open("GET", "../../json/BD.json");

xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        bd = JSON.parse(xhr.responseText);
        for (var i = 0; i < 4; i++){
            id.innerHTML +=
                "<a class='qwe'>" +
                "<div class='card'>" +
                "<img src=" + bd[i]['img'] +">" +
                "<hr>" +
                "<h2>" + bd[i]['firm'] + "</h2>" +
                "<h3>" + bd[i]['name'] + "</h3>" +
                "<h1>" + bd[i]['price'] + "</h1>" +
                "</div>" +
                "</a>";
        }
    }
});
xhr.send();
}*/


/* + bd[0]['img'] + */

/*
<a href="">
  <div class="card">
    <img src="../images/main-photo/men/Shoes/men-shoes-/men-shoes--.jpg" alt="">
    <hr>
    <h2>NIKE</h2>
    <h3>sfsdfsdfsdfsdfsdfsdfsdf</h3>
    <h1>149.99$</h1>
  </div>
</a>
*/


/*--------------------------------------------------------------------------------------------------------------------*/
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


























