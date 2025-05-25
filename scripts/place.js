const currentYear = document.querySelector("#currentYear");
currentYear.innerHTML = new Date().getFullYear();

const modified = document.querySelector("#lastModified");
modified.innerHTML ="Last modified: "+ document.lastModified;

function windChill (wind, temp) {
    // return 35.74 + (0.6215 * temp) - (35.75 * wind**0.16) + (0.4275 * temp * wind**0.16)
    let chill = 13.12 + (0.6215 * temp) - (11.37 * wind**0.16) + (0.3965 * temp * wind**0.16)
    return chill.toFixed(1)
}

const wind = 3;
const temperature = 28;
const windElement = document.getElementById('windChill');

if (wind > 4.8 && temperature <=10) {
    windElement.innerHTML = windChill(wind, temperature) + " <sup>o</sup>C"
} else {
    windElement.innerHTML = "N/A"
}