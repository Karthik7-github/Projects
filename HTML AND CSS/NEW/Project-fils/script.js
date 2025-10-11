let bg = document.querySelector("body");
let navcolor = document.querySelector('.navbar');
let img = document.getElementById('imgs')

let toggle = false;

function changebg() {
    if (toggle) {
        bg.style.backgroundImage = "linear-gradient(180deg, #040918 0%, #091540 100%)";
        navcolor.style.backgroundColor = "#212636ff";
        img.src='icon-sun.svg';
        bg.style.color='whitesmoke';

    } else {
        bg.style.backgroundImage = "linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)";
        navcolor.style.backgroundColor = "#fbfdfeff";
        img.src='icon-moon.svg';
        bg.style.color='black';
    }
    toggle = !toggle;
}
