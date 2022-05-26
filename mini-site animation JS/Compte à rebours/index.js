// Créer la logique de compte à rebours

const inputValue = document.querySelector("#choice");
let totalSeconds;
let interval;


function countDown() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    let sec = seconds < 10 ? "0" + seconds : seconds;

    countdownDisplay.textContent = minutes + " : " + sec;

    if (totalSeconds > 0) {
        totalSeconds--;
    } else {
        countdownDisplay.textContent = "C'est terminé"
        clearInterval(interval);

    }

}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    totalSeconds = inputValue.value * 60;
    inputValue.value = "";
    clearInterval(interval);

    interval = setInterval(countDown, 1000);
})






// function countDown() {

//     let minutes = Math.floor(totalSeconds / 60);
//     let seconds = totalSeconds % 60; // modulo permet de récupérer les secondes qui ne sont pas dans minutes

//     let sec = seconds < 10 ? "0" + seconds : seconds;

//     countdownDisplay.textContent = minutes + " : " + sec;

//     if (totalSeconds > 0) {
//         totalSeconds--;
//     } else {
//         countdownDisplay.textContent = "C'est terminé";
//         clearInterval(interval); //nettoie la fonction
//     }

// }



// form.addEventListener('submit', (e) => {

//     e.preventDefault();

//     totalSeconds = inputValue.value * 60;
//     inputValue.value = "";
//     clearInterval(interval);

//     interval = setInterval(countDown, 1000);

// })




