// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus
const btnToggle = document.querySelector('.toggle-btn');
const btnClicked = document.querySelector('.btn-clicked');
const body = document.querySelector('.content');

const sidebar = document.getElementById('side-bar');

btnToggle.addEventListener('click', () => {

    on = btnToggle.classList.toggle('btn-clicked');

    if (on == true) {
        sidebar.style.left = 0;
        body.style.opacity = 0.5;
    } else if (on == false) {
        sidebar.style.left = "-240px";
        body.style.opacity = 1;

    }

})


// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml
