const currentYear = document.querySelector("#currentYear")
const today = new Date();
currentYear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const lastModified = document.querySelector("#lastModified")
lastModified.innerHTML = `Last modified: ${document.lastModified}`