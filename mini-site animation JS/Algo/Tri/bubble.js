// Le tri à bulle conssiste à analyser des éléments et toujours placer le plus grand en dernier, via une boucle. //

// Exercice d'algo mais on peut utiliser la méthode Sort pour aller beacuoup plus vite ex : function bubble(array){
//     array.sort((a,b) => a-b);
// console.log(bubble);
// }

function bubbleSort(array) {

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                // let temp = array[j];
                // array[j] = array[j + 1];
                // array[j + 1] = temp;
                [array[j], array[j + 1]] = [array[j + 1], array[j]]; // permet d'intervertir des ééléments

                // console.log(array)

            }
        }
    }
    console.log(array)
}

bubbleSort([450, 34, 56, 17, 289, 88, 4, 142]);






// Séléction Sort, on prend l'élément le plus petit à chaque tour et on le met au début//

function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {

        let minIndex = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        [array[i], array[minIndex]] = [array[minIndex], array[i]];

    }
    console.log(array)

}

selectionSort([450, 34, 56, 17, 289, 88, 4, 142]);



// Quick sort, le dernier élément est le pivot, et après on tri, tout ce qui est plus grand ou plus petit avant de refaire uen boucle //

function quickSort(array) {

    if (array.length === 1) {
        return array;
    }

    const pivot = array[array.length - 1] // pour prendre le dernier élément du tableau
    let arrayLeft = [];
    let arrayRight = [];

    for (let i = 0; i < array.length - 1; i++) {
        array[i] < pivot ? arrayLeft.push(array[i]) : arrayRight.push(array[i]);
    }

    if (arrayLeft.length > 0 && arrayRight.length > 0) {
        console.log(arrayLeft, pivot, arrayRight)
        return [...quickSort(arrayLeft), pivot, ...quickSort(arrayRight)];
    } else if (arrayLeft.length > 0) {
        return [...quickSort(arrayLeft), pivot];

    } else {
        return [pivot, ...quickSort(arrayRight)]
    }
}


console.log(
    quickSort([450, 34, 56, 17, 289, 88, 4, 142, 86, 54, 198, 202, 3, 51])
);
