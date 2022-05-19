// Créer un événement au scroll
// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut
// Faire apparaitre l'image de la partie improvise


const nav = document.querySelector("nav");

const image = document.querySelector('#imgImprovise');

const popUp = document.querySelector(".pop-up");

const btnPopup = document.querySelector("#closeBtn");

let playOnce = true;


window.addEventListener('scroll', () => {
    let newScroll = window.scrollY;


    if (newScroll > 20) {
        nav.style.height = "60px"
    }
    else {
        nav.style.height = "90px"

    }

    //////////

    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;  // valeur en pourcentage car la valeur du scroll est différente en fonction de la taille du display //
    console.log(scrollValue)

    if (scrollValue > 0.45) {
        image.style.opacity = 1;
        image.style.transform = "translateX(0)"

    }

    //////////

    if (newScroll >= 1100 && playOnce) {
        popUp.style.opacity = 1;
        popUp.style.transform = "translateX(0)"
        popUp.style.position = "absolute"
        playOnce = false;
    }



    console.log(newScroll);
})


btnPopup.addEventListener('click', () => {
    popUp.style.opacity = 0;
    popUp.style.transform = "translateX(400px)"

})






// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
