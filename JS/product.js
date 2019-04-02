var productPhoto = document.getElementById('selected');
var productInfo = document.getElementById('div-after-selected');

function selected(str) {
    var xhr = new XMLHttpRequest();
    var bd;

    xhr.open("GET", "../../json/BD.json");
    xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            bd = JSON.parse(xhr.responseText);

            function findById(elem, index, array) { // ищет и возвращает єлемент с переданным в строке запроса id
                return elem.id == str;
            }

            let elem = bd.find(findById); // возвращает элемент с нужным id

            productPhoto.innerHTML +=
                "<img src=" + elem['img-1'] +" class='img-padding'>" +
                "<div class='three-photo-div'>" +
                "<a href='#'>" + "<div class='selected-div-img'>" + "<img src=" + elem['img-1'] +" class='three-photo'>" + "</div>" + "</a>" +
                "<a href='#'>" + "<div class='selected-div-img'>" + "<img src=" + elem['img-2'] +" class='three-photo'>" + "</div>" + "</a>" +
                "<a href='#'>" + "<div class='selected-div-img'>" + "<img src=" + elem['img-3'] +" class='three-photo'>" + "</div>" + "</a>" +
                "</div>";

            productInfo.innerHTML +=
                "<div class='h1-after-selected'>" + elem['firm'] + "</div>" +
                "<div class='h4-after-selected'>" + elem['name'] + "</div>" +
                "<div class='h2-after-selected'>" + elem['price'] + "</div>";
        }
    });
    xhr.send();
}

const urlParams = new URLSearchParams(window.location.search);
// Если нужны известные параметры можно брать их напрямую
let param = urlParams.get('id');

selected(param);
