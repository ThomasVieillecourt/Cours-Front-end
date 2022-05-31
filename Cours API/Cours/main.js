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

const init2 = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        pseudo: "Fantasio",
        message: "Joue aux jeux-vidéos",
    }),
    mode: "cors",
    credentials: "same-origin",
};


document.querySelector("form"); addEventListener("submit", () => {
    fetch('http://localhost:3000/posts', init2).then(() => console.log('data envoyée'))
});



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