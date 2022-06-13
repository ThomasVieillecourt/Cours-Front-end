

const canvas = document.getElementById("art");
const ctx = canvas.getContext("2d");

const colorsBtn = document.querySelectorAll(".colors");
const sizeBtn = document.querySelectorAll(".size");

let sizeChange = 3;
let colors = 0;


const words = [
    "Avion",
    "Chien",
    "Fusée",
    "Poisson",
    "Link",
    "Shrek",
    "Superman",
    "Kirby",
    "Spider-man",
    "Royaume-Uni",
    "Gamer",
    "Gants",
    "Dromadaire",
    "Twister",
    "Wifi",
    "Paysan",
    "Oreiller",
    "Réfrigérateur",
    "Fracture",
    "Lucarne",
    "Trésor",
    "Vaccin",
    "Larynx",
    "Thé",
    "Flûte",
    "Microscope",
    "Multivers",
    "Saumon"
];

let guessWord = document.querySelector("#guessWord");
const guessBtn = document.getElementById("guessBtn");
const hideBtn = document.getElementById("hideBtn");
let answerNeeded = "";

let score = 0;
const game = document.getElementById("game");
const container = document.querySelector(".container")
const answerList = document.querySelector("ul")






guessWord.textContent = "Cliquer sur la flèche";

function changeWord() {
    guessWord.textContent = words[Math.floor(Math.random() * words.length)];
    answerNeeded = guessWord.textContent;
}


guessBtn.addEventListener("click", changeWord)



hideBtn.addEventListener("click", () => {
    guessWord.classList.toggle("hidden");
})

const answerInput = document.getElementById("answer");




answerInput.addEventListener("input", (e) => {
    e.preventDefault();
    if (e.target.value == answerNeeded) {
        score++
        let endDraw = document.querySelector("span")

        endDraw.innerHTML =
            ` <h3> Score : ${score}</h3>`


        answerList.innerHTML += `
        <li>${answerNeeded}</li>`


        ctx.clearRect(0, 0, canvas.width, canvas.height);
        answerInput.value = "";
        changeWord();
    }
})



sizeBtn.forEach((sizeButton) => {
    sizeButton.addEventListener("click", (e) => {
        sizeChange = e.target.value;
    })
})



colorsBtn.forEach((color) => {
    color.addEventListener("click", (e) => {
        colors = e.target.id;

    })
})



function getMousePos(e) {
    const rect = canvas.getBoundingClientRect();

    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
    }
}

function mouseMove(e) {
    const mousePos = getMousePos(e);
    ctx.lineTo(mousePos.x, mousePos.y);
    ctx.stroke();
    ctx.strokeStyle = colors;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = sizeChange;

}

canvas.addEventListener('mousedown', (e) => {
    e.preventDefault();
    const mousePos = getMousePos(e);
    ctx.beginPath();
    ctx.moveTo(mousePos.x, mousePos.y);

    canvas.addEventListener('mousemove', mouseMove);
    canvas.addEventListener('mouseup', () => {
        canvas.removeEventListener('mousemove', mouseMove)
    });
})

reset.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

})


game.addEventListener("click", () => {
    game.style.display = "none";
    container.style.display = "contents";

})