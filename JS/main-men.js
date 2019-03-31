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
                         "<a href='#' class='qwe'>" +
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
 main_Men_Shoes(mainMenShoes, 0);
 main_Men_Shoes(mainMenSneakers, 12);
 main_Men_Shoes(mainMenBoots, 24);

// /*--------------------------------------------------------------------------------------------------------------------*/

var mainMenShoesAll = document.getElementById('main-men-shoes-all');
var mainMenSneakersAll = document.getElementById('main-men-sneakers-all');
var mainMenBootsAll = document.getElementById('main-men-boots-all');
console.log(mainMenShoesAll)
function main_Men_Shoes_All(id, number) {
    var xhr = new XMLHttpRequest();
    var bd;
    xhr.open("GET", "../../json/BD.json");

    xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            bd = JSON.parse(xhr.responseText);
            for (let i = number; i < number + 12; i++) {
/*
                data-id=" + bd[i]["id"]
*/
                id.innerHTML +=
                    `<a href='http://localhost:63342/ST-34-85/HTML/main/product.html?_ijt=rnhpogjukbvcnvg560jotek0ii#=${bd[i]["id"]}' class='qwe'>` +
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

/*var items = [{id: 1, title: 'Nike'},{id: 2, title: 'Puma'},{id: 3, title: 'Adidas'}]; // это набор всех наших товаров, к примеру

var html = '';//будущая разметка

//цикл по товарам - чтобы построить хтмл
items.forEach(function(item){
    html += `
                <a href="/product.html?id=${item.id}">
                        <h2>${item.title}</h2>
                          //...вся остальная разметка
                </a>
        `;
});

document.querySelector('.container').innerHTML = html; // вставили разметку на страницу

в итоге ссылки будут какого-то такого вида -
<a href="/product.html?id=1">...</a>
<a href="/product.html?id=2">...</a>*/


/*
    корзина

     при клике на кнопку надо сохранить все в LocalStorage

     function addItemToCart() {
        var item = {
            id: 1,
            size: 43,
        };
         var itemsInCart = JSON.parse(localStorage.getItem('cart-items'));
            if (!itemsInCart) {
            itemsInCart = [];
             }
         itemsInCart.push(item);

        localStorage.setItem('cart-items', JSON.stringify(itemsInCart));
    }*/



/*function renderShoppingCart() {
    var itemsinCart = JSON.parse(localStorage.getItem("cart-items"));
    var cartContainer = document.querySelector(".app");

    var itemsHTML = "";

    itemsinCart.forEach(function (item) {
        var itemData = findItemInJSON(item.id);
        itemsHTML += `<div>
<h2>${item.title}</h2>
<h3>${item.price}</h3>
</div>`
    });
    cartContainer.innerHTML = itemsHTML;
}*/


/*
    var jsonData = [{
        id: 1,
        title: 'asd',
        price: 45
    },{
        id: 2,
        title: 'aqwesd',
        price: 4234
    }];

    function findItemJSON(id) {
        var itemData = jsonData.filter(function(item){
            return item.id === id;
        });
        return itemData[0];
    }
        */















