var mainWomenShoes = document.getElementById('main-women-shoes');
var mainWomenSneakers = document.getElementById('main-women-sneakers');
var mainWomenBoots = document.getElementById('main-women-boots');

function main_Women_Shoes(id, number, type) {
    var xhr = new XMLHttpRequest();
    var bd;
    xhr.open("GET", "../../json/BD.json");

    xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            bd = JSON.parse(xhr.responseText);
            for (var i = number; i < number + 4; i++){
                if (bd[i]['type'] = type) {
                    id.innerHTML +=
                        `<a href='http://localhost:63342/ST-34-85/HTML/main/product.html?id=${bd[i]["id"]}' class='qwe'>` +
                        "<div class='card'>" +
                        "<img src=" + bd[i]['img-1'] + ">" +
                        "<hr>" +
                        "<h2>" + bd[i]['firm'] + "</h2>" +
                        "<h3>" + bd[i]['name'] + "</h3>" +
                        "<h1>" + bd[i]['price'] + "</h1>" +
                        "</div>" +
                        "</a>";
                }
                else {
                    alert("dibil");
                }
            }
        }
    });
    xhr.send();
}
main_Women_Shoes(mainWomenShoes, 36, "women-shoes");
main_Women_Shoes(mainWomenSneakers, 48,"women-sneakers");
main_Women_Shoes(mainWomenBoots, 60, "women-boots");

/*--------------------------------------------------------------------------------------------------------------------*/

var mainWomenShoesAll = document.getElementById('main-women-shoes-all');
var mainWomenSneakersAll = document.getElementById('main-women-sneakers-all');
var mainWomenBootsAll = document.getElementById('main-women-boots-all');

function main_Women_Shoes_All(id, number) {
    var xhr = new XMLHttpRequest();
    var bd;
    xhr.open("GET", "../../json/BD.json");

    xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            bd = JSON.parse(xhr.responseText);
            for (var i = number; i < number + 12; i++) {
                id.innerHTML +=
                    `<a href='http://localhost:63342/ST-34-85/HTML/main/product.html?id=${bd[i]["id"]}' class='qwe'>` +
                    "<div class='card'>" +
                    "<img src=" + bd[i]['img-1'] + ">" +
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
main_Women_Shoes_All(mainWomenShoesAll, 36);
main_Women_Shoes_All(mainWomenSneakersAll, 48);
main_Women_Shoes_All(mainWomenBootsAll, 60);