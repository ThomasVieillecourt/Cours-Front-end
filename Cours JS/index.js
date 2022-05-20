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

while (w < 10) {
    w++;
    console.log("la valeur de w est : " + w)
}

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
