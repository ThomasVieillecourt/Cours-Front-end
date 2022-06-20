const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const img = new Image();
img.src = "./media/flappy-bird-set.png"

// general settings //

let gamePlaying = false;
const gravity = .5;
const speed = 6.2;
const size = [51, 36];
const jump = -11.5;
const cTenth = (canvas.width / 10); // 1/10 du canvas.width


// reglage tuyaux
const pipeWidth = 78;
const pipeGap = 270;
const pipeLoc = () => (Math.random() * ((canvas.height - (pipeGap + pipeWidth)) - pipeWidth)) + pipeWidth;



let index = 0, // pour gérer l'effet parallax fond / poteaux
    bestScore = 0,
    currentScore = 0,
    pipes = [],
    flight,
    flyHeight;


const setup = () => {
    currentScore = 0;
    flight = jump;
    flyHeight = (canvas.height / 2) - (size[1] / 2);

    // On créé un array de 3 éléments pour afficher toujours 3 tuyaux avec la méthode .fill(), ensuite on enelvera le tuyaux à gauche et on en remet un à droite
    pipes = Array(3).fill().map((a, i) => [canvas.width + (i * (pipeGap + pipeWidth)), pipeLoc()]);
}

const render = () => {
    index++;


    //background
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height, -((index * (speed / 2)) % canvas.width) + canvas.width, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height, -((index * (speed / 2)) % canvas.width), 0, canvas.width, canvas.height);






    // oiseau
    if (gamePlaying) {
        ctx.drawImage(img, 432, Math.floor((index % 9) / 3) * size[1], ...size, cTenth, flyHeight, ...size);
        flight += gravity;
        flyHeight = Math.min(flyHeight + flight, canvas.height - size[1]);


    } else {
        ctx.drawImage(img, 432, Math.floor((index % 9) / 3) * size[1], ...size, ((canvas.width / 2) - size[0] / 2), flyHeight, ...size); // pour séléctioner une petite partie de l'image (juste le décor ou l'oiseau)
        flyHeight = (canvas.height / 2) - (size[1] / 2);

        // Pour ajouter du texte dans un canvas
        ctx.fillText(`Meilleur score : ${bestScore}`, 55, 245);
        ctx.fillText(`Cliquez pour jouer`, 48, 535);
        ctx.font = "bold 30px courier"
    }

    // Affichage tuyaux
    if (gamePlaying) {

        pipes.map(pipe => {
            pipe[0] -= speed;

            //top tuyaux
            ctx.drawImage(img, 432, 588 - pipe[1], pipeWidth, pipe[1], pipe[0], 0, pipeWidth, pipe[1]);


            //bottom tuyaux
            ctx.drawImage(img, 432 + pipeWidth, 108, pipeWidth, canvas.height - pipe[1] + pipeGap, pipe[0], pipe[1] + pipeGap, pipeWidth, canvas.height - pipe[1] + pipeGap);


            if (pipe[0] <= -pipeWidth) {
                currentScore++;
                bestScore = Math.max(bestScore, currentScore); // on garde la valeur max, au cas ou on est en train de battre son PB

                // remove tuyaux + création nouveau
                pipes = [...pipes.slice(1), [pipes[pipes.length - 1][0] + pipeGap + pipeWidth, pipeLoc()]];
            }


            // Contact tuyaux
            if ([pipe[0] <= cTenth + size[0],
            pipe[0] + pipeWidth >= cTenth,
            pipe[1] > flyHeight || pipe[1] + pipeGap < flyHeight + size[1]].every(elem => elem)) { //every poermet de tester toutes les conditions
                gamePlaying = false;
                setup();
            }
        })
    }

    document.getElementById("bestScore").innerHTML = `Meilleur : ${bestScore}`;
    document.getElementById("currentScore").innerHTML = `Actuel : ${currentScore}`;


    window.requestAnimationFrame(render);
}

setup();
img.onload = render;

document.addEventListener("click", () => gamePlaying = true);
window.onclick = () => flight = jump;