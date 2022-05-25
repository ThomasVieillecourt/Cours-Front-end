const todoValue = document.querySelector("#inputValeur");

let span = document.querySelector("span");


function storage() {
    window.localStorage.todo = listContainer.innerHTML;
}

function getStorage() {
    if (window.localStorage.todo) {
        listContainer.innerHTML = window.localStorage.todo;
    } else {
        listContainer.innerHTML = `<li>Ajoutez votre première tâche !</li>`;
    }
}

getStorage();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    listContainer.innerHTML += `<li>${todoValue.value}</li>`;
    todoValue.value = "";
    storage();

    const lists = document.querySelectorAll("li");

    lists.forEach((list) => {
        list.addEventListener("click", () => {
            list.classList.add('check');

            list.addEventListener("click", () => {
                list.remove();
                storage();

            })
        })
    })

})



