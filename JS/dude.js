var govno = document.getElementById('govno');

var names = ['Igor', "Pisya", "Olya", "Tom"];

function BD() {
    var xhr = new XMLHttpRequest();
    var BD;
    xhr.open("GET", "../json/BD.json");

    xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            BD = JSON.parse(xhr.responseText);
            //console.log(BD);
            govno.innerHTML += "<div class = 'qwe'>" + BD[4]['img'] + "</div>";
        }
    });
    xhr.send();
}

BD();

//for (let i = 0; i < names.length; i++)
    //govno.innerHTML += "<div class = 'qwe'>" + names[i] + "</div>");

