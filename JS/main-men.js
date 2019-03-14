var mainMenShoes = document.getElementById('main-men-shoes');
var mainMenSneakers = document.getElementById('main-men-sneakers');
var mainMenBoots = document.getElementById('main-men-boots');

function main_Men_Shoes(id, number) {
    var xhr = new XMLHttpRequest();
    var bd;
    xhr.open("GET", "../../json/BD.json");

    xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            bd = JSON.parse(xhr.responseText);
            for (var i = number; i < number + 4; i++){
                    id.innerHTML +=
                        "<a class='qwe'>" +
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
main_Men_Shoes(mainMenShoes, 0, "men-shoes");
main_Men_Shoes(mainMenSneakers, 12,"mwn-sneakers");
main_Men_Shoes(mainMenBoots, 24, "men-boots");

/*--------------------------------------------------------------------------------------------------------------------*/

var mainMenShoesAll = document.getElementById('main-men-shoes-all');
var mainMenSneakersAll = document.getElementById('main-men-sneakers-all');
var mainMenBootsAll = document.getElementById('main-men-boots-all');

function main_Men_Shoes_All(id, number) {
    var xhr = new XMLHttpRequest();
    var bd;
    xhr.open("GET", "../../json/BD.json");

    xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            bd = JSON.parse(xhr.responseText);
            for (var i = number; i < number + 12; i++) {
                    id.innerHTML +=
                        "<a class='qwe'>" +
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
    main_Men_Shoes_All(mainMenShoesAll, 0);
    main_Men_Shoes_All(mainMenSneakersAll, 12);
    main_Men_Shoes_All(mainMenBootsAll, 24);