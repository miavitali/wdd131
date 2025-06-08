const currentYear = document.querySelector("#currentYear");
currentYear.innerHTML = new Date().getFullYear();

const modified = document.querySelector("#lastModified");
modified.innerHTML ="Last modified: "+ document.lastModified;

const menuBtn = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");

menuBtn.addEventListener('click', function() {
    navigation.classList.toggle('show')
    menuBtn.classList.toggle('show')
})

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "images/nigeria-temple.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "images/manti-temple.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "images/payson-utah-temple.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "images/yigo_guam_temple.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "images/washington-dc-temple.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "images/lima-peru-temple.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    area: 116642,
    imageUrl: "images/mexico-city-temple.jpg"
  },
  {
    templeName: "Buenos Aires Argentina",
    location: "Buenos Aires, Argentina",
    dedicated: "1986, January, 19",
    area: 30659,
    imageUrl:"images/buenos-aires-argentina-temple.jpg"
  },
  {
    templeName: "Belém Brazil",
    location: "Belém, Brazil",
    dedicated: "2022, November, 20",
    area: 28675,
    imageUrl:"images/belem-brazil-temple.jpg"
  },
  {
    templeName: "Montevideo Uruguay",
    location: "Montevideo, Uruguay",
    dedicated: "2001, March, 18",
    area: 10700,
    imageUrl: "images/montevideo-uruguay-temple.jpg"
  
  },
];



const cardsContainer = document.querySelector("#temple-cards");

// Utility to extract year from dedication date string
function getYear(dedicatedStr) {
  return parseInt(dedicatedStr.split(",")[0]);
}

// Function to create the HTML string for a temple card (using map returns an array of HTML strings)
function createTempleCards(templeArray) {
  // Use map to transform each temple object into an HTML string for the card
  return templeArray
    .map(
      (temple) => `
    <section class="temple-card">
      <h3>${temple.templeName}</h3>
      <p>Location: ${temple.location}</p>
      <p>Dedicated: ${temple.dedicated}</p>
      <p>Area: ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="270" height="200" referrerpolicy="no-referrer"/>
    </section>
  `
    )
    .join(""); // join all HTML strings into one big string
}
// Function to display temples by inserting HTML into container
function displayTemples(templeArray) {
  cardsContainer.innerHTML = createTempleCards(templeArray);
}

// Show all temples initially
displayTemples(temples);

// FILTERS USING FILTER METHOD

// Old temples: built before 1900
function filterOld() {
  return temples.filter((temple) => getYear(temple.dedicated) < 1900);
}

// New temples: built after 2000
function filterNew() {
  return temples.filter((temple) => getYear(temple.dedicated) > 2000);
}

// Large temples: area > 90000 sq ft
function filterLarge() {
  return temples.filter((temple) => temple.area > 90000);
}

// Small temples: area < 10000 sq ft
function filterSmall() {
  return temples.filter((temple) => temple.area < 10000);
}

// BONUS: Using reduce to find the total area of all temples displayed
function totalArea(templeArray) {
  return templeArray.reduce((sum, temple) => sum + temple.area, 0);
}

// EVENT LISTENERS

document.querySelector("#home").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(filterOld());
});

document.querySelector("#new").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(filterNew());
});

document.querySelector("#large").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(filterLarge());
});

document.querySelector("#small").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(filterSmall());
});