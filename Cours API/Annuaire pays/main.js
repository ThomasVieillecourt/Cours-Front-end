// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)
countries = [];
const container = document.querySelector(".countries-container");
const inputSearch = document.getElementById("inputSearch");
const inputRange = document.getElementById("inputRange");
const rangeValue = document.getElementById("rangeValue");
let sortMethod = "alpha";
const btnSort = document.querySelectorAll(".btnSort")



async function countriesGenerator() {
    await fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => countries = data);

    console.log(countries)
    countriesDisplay() // Important lancer la fonction display dans le fetch
}
countriesGenerator()

function countriesDisplay() {
    container.innerHTML = countries
        .filter((country) => country.name.common.toLowerCase().includes(inputSearch.value.toLowerCase()))

        .sort((a, b) => {
            if (sortMethod === "alpha") {
                return a.name.common.localeCompare(b.name.common)
            } else if (sortMethod === "minToMax") {
                return a.population - b.population;
            } else if (sortMethod === "maxToMin") {
                return b.population - a.population;
            }
        })

        .slice(0, inputRange.value)

        .map((country) =>
            `
        <div class="card">
            <img src=${country.flags.png} alt=${country.name.common}>
            <h2>${country.name.common}</h2>
            <h4>${country.capital}</h4>
            <p>Population : ${country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</p>
        </div>
        `
        )

        .join("")

}
countriesDisplay()

inputSearch.addEventListener("input", countriesDisplay);
inputRange.addEventListener("input", () => {
    rangeValue.textContent = inputRange.value;
    countriesDisplay();
})

btnSort.forEach((button) => {
    button.addEventListener("click", (e) => {
        sortMethod = e.target.id;
        countriesDisplay()

    })
})
