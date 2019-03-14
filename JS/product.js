var productPhoto = document.getElementById('selected');
var productInfo = document.getElementById('div-after-selected');

function selected(id) {
    var xhr = new XMLHttpRequest();
    var bd;

    xhr.open("GET", "../../json/BD.json");
    xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            bd = JSON.parse(xhr.responseText);
                productPhoto.innerHTML +=
                    "<img src=" + bd[0]['img-1'] +" class='img-padding'>" +
                    "<div class='three-photo-div'>" +
                    "<a href='#'>" + "<div class='selected-div-img'>" + "<img src=" + bd[0]['img-1'] +" class='three-photo'>" + "</div>" + "</a>" +
                    "<a href='#'>" + "<div class='selected-div-img'>" + "<img src=" + bd[0]['img-2'] +" class='three-photo'>" + "</div>" + "</a>" +
                    "<a href='#'>" + "<div class='selected-div-img'>" + "<img src=" + bd[0]['img-3'] +" class='three-photo'>" + "</div>" + "</a>" +
                    "</div>";

                productInfo.innerHTML +=
                    "<div class='h1-after-selected'>" + bd[0]['firm'] + "</div>" +
                    "<div class='h4-after-selected'>" + bd[0]['name'] + "</div>" +
                    "<div class='h2-after-selected'>" + bd[0]['price'] + "</div>";

            }
    });
    xhr.send();
}
selected();
