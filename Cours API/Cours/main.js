// Méthode XMLHttpRequest (ancienne méthode) //

// function reqListener() {
//     console.log(this.responseText);
// }


// let req = new XMLHttpRequest();
// req.onload = reqListener;
// req.open('get', 'https://api.blablagues.net/?rub=blagues', true);
// req.send();


// FETCH //

// fetch("monlien", "option").then((response) => {
//     // interprétation response
// }).catch((error) => console.log(error));


// fetch("data.txt")
//     .then((res) => {
//         res.text()
//             .then((data) => { console.log(data) })
//     });


// fetch("data.json")
//     .then((response) => response.json()
//         .then((data) => console.log(data)));


const myHeaders = new Headers();

const init = {
    method: "GET", // permet de lire les données
    headers: myHeaders,
    mode: "cors",
    cache: "default"
}

fetch("data.json").then((res) => console.log(res));

// CRUD = Create(POST), Read (get), Update(put), Delete(delete)

// const init2 = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         pseudo: "Fantasio",
//         message: "Joue aux jeux-vidéos",
//     }),
//     mode: "cors",
//     credentials: "same-origin",
// };


// document.querySelector("form"); addEventListener("submit", () => {
//     fetch('http://localhost:3000/posts', init2).then(() => console.log('data envoyée'))
// });



// --- Methode Asynchrone --- //
// => ca veut dire attendre qqchose avant une action

setTimeout(() => {
    console.log("test")
}, 2000);

/// --- Promise ---

// fetch("monlien").then((res) => res)


/// --- async/await ---

async function fetchData() {
    await fetch("monlien")
    // attend que le await soit éxécuté avant de faire la suite


    executeFunction();
}


// --- JSON = JavaScript Object Notation --- //

/// Méthode .json() => méthode qui s'auto-résout en renvoyant le bidy de la requete

fetch('data.json').then((res) => res.json()).then((data) => {
    // Stringify converti en JSON (objet json)
    let settings = JSON.stringify(data);
    // Parse transforme en json en objet JS
    console.log(JSON.parse(settings));
});



// -----------
// Web API
// -----------

// --- Client Storage ---
//Local Storage

// Capacité de stockage cookie = 4ko
// capacité LocalStorage = 10Mo
localStorage.data = "Je stock la data"; // Stocker des éléments = localStorage.variable = contenu

// document.body.textContent = localStorage.data;
localStorage.removeItem('data');

localStorage.user = "Denis";
// Il faut passer des chaines de caractères 

const obj = {
    name: "Thomas",
    age: 23,
}
localStorage.data = JSON.stringify(obj);
// permet d'afficher des obj ou tableau en les convertissant en obj JSON


// Session Storage //
sessionStorage.dataSettings = "55px";
sessionStorage.clear();

// Cookies // => 
document.cookie = "username=Thomas;path=/;max-age=45000;secure; samesite";

// " information, chemin, duration, sécurité, site "




