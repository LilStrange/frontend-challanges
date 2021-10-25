var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");

var body = document.querySelector('body');
var css_text = document.getElementById('css_text');

function changeBackground(el){
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

    css_text.textContent = body.style.backgroundImage;
}

color1.addEventListener('input', changeBackground);
color2.addEventListener('input', changeBackground);