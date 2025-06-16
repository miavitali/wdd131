const currentYear = document.querySelector("#currentYear")
const today = new Date();
currentYear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const lastModified = document.querySelector("#lastModified")
lastModified.innerHTML = `Last modified: ${document.lastModified}`

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

populateProduct(products);

function populateProduct(products) {
    products.forEach(product => {
        let item = document.createElement("option");
        item.textContent = product.name;
        item.setAttribute("value", product.id);
        document.querySelector("#product").appendChild(item);
    }
    )
}

const reviewSubmited = document.querySelector("#submit")
reviewSubmited.addEventListener("click", (event) => {
    event.preventDefault();

    if (validateForm()) {
        reviewSubmit();
    }
});

function validateForm() {
    const requiredInputs = document.querySelectorAll('input[required]');

    const allRequiredFilled = Array.from(requiredInputs).every(input => {
        return input.value.trim() !== '';
    });

    if (!allRequiredFilled) {
        alert('Please complete all required fields that are marked with an astrisk (*) before submitting.');
        return false;
    }
    return true;
}

function reviewSubmit() {
    let numReviews = Number(window.localStorage.getItem("reviewSubmit")) || 0;
    numReviews++;
    localStorage.setItem("reviewSubmit", numReviews);
    reviewForm.reset();
    alert("Review subbmitted successfully!");
    console.log(`Total reviews submitted: ${numReviews}`);
}