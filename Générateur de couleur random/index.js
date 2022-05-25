// Créer 3 variables pour stocker des chiffres

let r = 0;
let g = 0;
let b = 0;

const body = document.querySelector("body");
const paragrapheTexte = document.querySelector("p");

//Donner au body une couleur de fond en RGB
function randomizer() {
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);

    body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    paragrapheTexte.textContent = "RGB ( " + r + " , " + g + " , " + b + " )";

}




setInterval(randomizer, 3000);

console.log(r, g, b);


