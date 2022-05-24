/// Rappel des types de données ///

let string = "Thomas";
let number = 23;
let boolean = true;
let maVariable; // Undefined

// connaitre le type d'une donnée = typeof //

// Tableaux 
let array = ["Paris", "Lyon", "Strasbourg"];

// console.log(array[0][1]); affiche la lettre a

let array2 = ["Paris", 23, true, [1, 2], { nom: "Sofia" }];

// console.log(array2[4].nom);

let data = [
    {
        pseudo: "Fantasio",
        age: 23,
        technos: ["Javascript", "Css", "Html"],
        admin: true,
    },
    {
        pseudo: "Kaowru",
        age: 23,
        technos: ["Php", "Css", "Html"],
        admin: false,
    },
    {
        pseudo: "Yotogo",
        age: 24,
        technos: ["React", "Sass", "Html"],
        admin: false,
    },
]

// console.log(data[2].pseudo);


/// Les structures de controle ///
if (data[2].age > data[1].age) {
    console.log(data[2].pseudo + " est plus agé que " + data[1].pseudo);
} else { console.log(data[2].pseudo + " est plus jeune que " + data[1].pseudo) }

// While //

let w = 0;

// while (w < 10) {
//     w++;
//     console.log("la valeur de w est : " + w)
// }

// Boucle For //
for (const user of data) {
    document.body.innerHTML += `<li>${user.pseudo}</li>`; // `` permet d'ajouter du code
}

// on déclare la valeur de i, jusqu'où on bouble, on incrémente i tant que la condition 2 n'est pas vraie
for (i = 0; i < data.length; i++) {
    document.body.innerHTML += "<h2>" + data[i].pseudo + "</h2>";

}


/// Switch ///

document.body.addEventListener('click', (e) => {
    console.log(e.target.id); // permet de récupérer l'id au clic

    switch (e.target.id) {
        case "javascript":
            document.body.style.background = "yellow";
            break;
        case "php":
            document.body.style.background = "lightblue";
            break;
        case "css":
            document.body.style.background = "blue";
            break;

    }
})



/// Méthodes String ///
let string2 = "Javascript est un language orienté objet";

// typeof => permet de connaitre la nature
// eval => additione les éléments "1"+2 = 12
//parseInt => transforme string en number parseInt("1")+2 = 3
//variable.lenght = connaitre la longueur d'un élément
// indexOf => connaitre à quel index l'élement commence


/// Méthodes Numbers ///
let number2 = 24.12;

// parseFloat => garde les chiffres dans un string
// math => pleins de formules lié au mathématique (voir internet)
// math.random() * x => donne un chiffre entre 0 et 1 fois x si on veut plus grand
// math.floor => arrondi à l'inférieur


/// Méthodes Tableau ///
let array3 = ["Javascript", "Css", "Php"];
let array4 = ["Solidity", "Ruby"];

// array3.concat(array4) => fusionne les tableau en gardant la nature tableau
// array3.join("-") => permet d'ajouter un élément entre les éléments du tableau, ici on ajoute -


// IMPORTANT //
let arrayNumbers = [4, 46, 22, 17, 21];
// console.log(arrayNumbers.reduce((x, y) => x + y)); additionne les éléments

arrayNumbers.push(14); // ajoute un élément
console.log(arrayNumbers)


/// FILTER, SORT, MAP ///

// console.log(arrayNumbers.filter((number) => number > 20)) // filtre les éléments, ici affiche seulement numbers supérieur à 20


console.log(arrayNumbers.sort((a, b) => a - b)); // classe par ordre


arrayNumbers.map((number) => console.log(number)) // permet de lister les tableaux 



// Méthodes objets //

document.body.innerHTML += data
    .sort((a, b) => b.age - a.age)

    .map(

        (user) =>
            `  
<div class="user-card">
    <h2> Pseudo : ${user.pseudo}</h2>
    <p>Age : ${user.age} ans</p>
    <p>Status : ${user.admin ? "Modérateur" : "Membre"} </p>
</div
`)
    .join("");



/// Les Dates ///

let date = new Date();

console.log(date)

// Timestamp
let timestamp = Date.parse(date);
console.log(timestamp)


// IsoString
let iso = date.toISOString();

function dateParser(chaine) {
    let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })
    return newDate;
};

console.log(dateParser(date));



//// Destructuring ////
let moreData = {
    destVar: ["Element 1", "Element 2"]
}

const { destVar } = moreData // est l'équivalent de moreData.destVar

// console.log(moreData.destVar)
// console.log(destVar)

let array5 = [17, 22, 24];
let [x, y, z] = array5; // permet d'isoler les éléments d'un tableau dans des variables
console.log(x)


const dateDestructuring = (chaine) => {
    let newDate = chaine.split("T")[0]; //tu coupes la date à partir du T et tu gardes que la premiere partie du tabeau
    [y, m, d] = newDate.split("-");
    // [y, m, d] = newDate
    return [d, m, y].join("/");

}
console.log(dateDestructuring(iso));





//// Les Datasets //// 
// Permet d'attribuer des données aux balises, ca peut remplacer les classes ou id

const h3js = document.getElementById("javascript");

console.log(h3js.dataset)

const h3 = document.querySelectorAll("h3");

h3.forEach((language) => console.log(language.dataset.lang));



//// Les Regex ////
// Permet de tester les choses

let mail = "thomas.viei@hotmail.fr";

console.log(mail.search(/thomas/)); // la fonction search permet de chercher des éléments précis si c'est ok = 0 sinon =-1

// console.log(mail.replace(/thomas/, "nicolas")); // la fonction repalce() permet de remplacer un élément par un autre

console.log(mail.match(/THomas/i)); // la focntion match() permet de vérifier si un élément existe, on rajoute le "i" pour se protéger du case sensitive

// exemple : on demande à un utilisateur de mettre au moins un caractère spécial dans un MediaCapabilities, on peut vérifier avec une Regex = https://cheatography.com/davechild/cheat-sheets/regular-expressions/ pour toutes les regex possible

// ex: console.log(mail.match(/[zutg]/)); ici on a vérifier si le mot contenait au moins z,u,t ou g

// console.log(mail.match(/[\w]/)); => vérifie s'il y a un mot
// console.log(mail.match(/[\d]/)); => vérifie s'il y a un chiffre

console.log(mail.match(/^[\w\._-]+@[\w-/]+\.[a-z]{2,4}$/i));
// ca veut dire on commence par ^ puis "On veut des mots qui peuvent contenir un . ou - ou _ puis obligatoirement un @ ensuit encore des mots et enfin un point suivi de 2 à 4 caractères et le i pour les majuscules" et on finit par $ => pour un mail

// Beaucoup de regex sont déja codés, et dispo sur le web


