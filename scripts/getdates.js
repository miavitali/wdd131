const currentyear = document.querySelector("#currentyear")
const today = new Date();
currentyearyear.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}</span>`;

const lastModified = document.querySelector("#lastModified")
lastModified.innerHTML = `Last modified: ${document.lastModified}`