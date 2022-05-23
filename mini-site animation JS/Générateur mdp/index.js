const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toLocaleUpperCase();
const dataNumbers = "1234567890";
const dataSymbols = "&é'(-è_çà)=,;:!ù*^$?./§%µ¨£@}]^|[{#~";
const rangeValue = document.getElementById('password-length');
const passwordOutput = document.getElementById('password-output');

function generatePassword() {
    let data = [];
    let password = "";

    if (lowercase.checked) data.push(...dataLowercase);
    if (uppercase.checked) data.push(...dataUppercase);
    if (numbers.checked) data.push(...dataNumbers);
    if (symbols.checked) data.push(...dataSymbols);


    for (i = 0; i < rangeValue.value; i++) {
        password += data[Math.floor(Math.random() * data.length)];
    }

    if (data.length === 0) {
        alert("Veuillez séléctionner des critères")
        return
    }

    passwordOutput.value = password;


    passwordOutput.select();
    document.execCommand("copy");

    generateButton.textContent = "Copié !";

    setTimeout(() => {
        generateButton.textContent = "Générer mot de passe"
    }, 2000);


}


generateButton.addEventListener('click', generatePassword);


