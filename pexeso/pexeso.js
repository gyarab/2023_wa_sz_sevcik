let el = document.getElementById("stav_hry");
let counter = 5;

function func(){
    el.innerHTML = counter;
    counter--;
    if (counter > 0) {
        setTimeout(func, 1000);
    }
}

func();

el.innerHTML = "New Game";

let card1 = document.getElementById("card1")
let card2 = document.getElementById("card2")

function clickCard(){
    card1.innerHTML = "<img src =Img/Car1.jpg>"
}