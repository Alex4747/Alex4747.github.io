var mainKidsBoys = document.getElementById('main-kids-boys');
var mainKidsGirls = document.getElementById('main-kids-girls');

function main_Kids_Shoes(id, number, type) {
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
                        /*"<hr>" +*/
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
main_Kids_Shoes(mainKidsBoys, 72, "kids-shoes");
main_Kids_Shoes(mainKidsGirls, 84,"kids-sneakers");

/*--------------------------------------------------------------------------------------------------------------------*/

var mainBoysAll = document.getElementById('main-boys-shoes');
var mainGirlsAll = document.getElementById('main-girls-shoes');

function main_Children_All(id, number) {
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
                    /*"<hr>" +*/
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
main_Children_All(mainBoysAll, 72);
main_Children_All(mainGirlsAll, 84);