
// -- Rappel des objets -- //
// Chaque balise est un objet, chaque tableau est un objet

const obj = {
    // on reconnait les objets grace aux {} et à index: "vaue",
    pseudo: "Thomas",
    ville: "Chatillon",

    direBonjour: function () {
        console.log("Bonjour " + this.pseudo);

    }

    // direBonjour() {
    //     console.log("Bonjour" + this.pseudo)
    //     //this permet de désigner les éléments dans un objet
    // }
}
console.log(typeof obj);

// ajouter paramètre / Supprimer
obj.age = 24;
obj["ville"] = "Montesson"

delete obj.age


// Checker si propriété existe, renvoie true ou false

console.log("pseudo" in obj)

// Parcourir un objet 
// for (const key in obj) {
//     console.log(obj[key]);
// }

// 


/// --- Obtenir les clés
const keys = Object.keys(obj)
console.log(keys)

/// --- Obtenir les valeurs
const values = Object.values(obj)
console.log(values)

// Empecher les modifications

// const newObj = Object.freeze(obj);
const newObj = Object.seal(obj); // => on peut modifier mais pas ajouter des paramètres




/// --- Cosntructeur d'objet --- ///

// Fonction constructeur
//première lettre en MAj et arguments
function User(pseudo, ville) {
    this.pseudo = pseudo;
    this.ville = ville;

    this.getCity = function () {
        console.log(this.pseudo + " habite à " + this.ville)
    }
}
// permet de construire à la chaine

const user1 = new User("Nicolas", "Sartrouville")
const user2 = new User("Thomas", "Montesson")

// console.log(user2.getCity())




/// --- Factory functions --- ///
function UserFactory(pseudo, ville) {
    return {
        pseudo,
        ville
    }
}

const user3 = UserFactory("Arthur", "Saint-Germain-En-Laye");
const user4 = UserFactory("Danny", "Creteil");

console.log(user3, user4);




/// --- Class --- ///
class Utilisateur {
    constructor(pseudo, ville) {
        this.pseudo = pseudo;
        this.ville = ville;
    }
    //Method
    sayMyname = function () {
        console.log("Bonjour je suis " + this.pseudo)
    }
}
const user5 = new Utilisateur('Arnaud', 'Lyon')


// Dans chaque objet on a accès aux "proto" ce qui nous permet de voir quelles méthodes on peut ajouter(dans le console.log)



/// --- l'Héritage --- ///

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    saySomething(text) {
        console.log(this.name + " dit : " + text);
    }
}

class Dog extends Animal { // extends permet de prendre les attibuts de la class Animal
    run() {
        console.log("le chien court");
    }
}

class Cat extends Animal {
    hunt() {
        console.log("j'ai chassé un oiseau");
    }
}

const milou = new Dog("Milou", 12)
console.log(milou)