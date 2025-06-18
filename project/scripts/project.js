const currentYear = document.querySelector("#currentYear")
const today = new Date();
currentYear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const lastModified = document.querySelector("#lastModified")
lastModified.innerHTML = `Last modified: ${document.lastModified}`

// Boton hamburguesa
const menuBtn = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");

menuBtn.addEventListener('click', function() {
    navigation.classList.toggle('show')
    menuBtn.classList.toggle('show')
})

// Local Storage
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.querySelector("#name").value.trim();
      const email = document.querySelector("#email").value.trim();
      const message = document.querySelector("#message").value.trim();

      if (name && email && message) {
        const newEntry = {
          name,
          email,
          message,
          date: new Date().toISOString()
        };

        // Obtener mensajes existentes o array vacío si no hay
        const existingMessages = JSON.parse(localStorage.getItem("contactMessages")) || [];

        // Agregar nuevo mensaje
        existingMessages.push(newEntry);

        // Guardar de nuevo en localStorage
        localStorage.setItem("contactMessages", JSON.stringify(existingMessages));

        alert("Your message has been saved locally!");
        form.reset();
      } else {
        alert("Please fill out all required fields.");
      }
    });
  }
});


// Local Storage para Rate Us
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("reviewForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const service = document.querySelector('input[name="rating-service"]:checked')?.value;
        const delivery = document.querySelector('input[name="rating-delivery"]:checked')?.value;
        const quality = document.querySelector('input[name="rating-quality"]:checked')?.value;
        const reviewText = document.getElementById("review").value;
        const name = document.getElementById("name").value;

        if (!service || !delivery || !quality) {
            alert("Please complete all required ratings.");
            return;
        }

        const reviewData = {
            service,
            delivery,
            quality,
            reviewText,
            name
        };

        localStorage.setItem("bairespelReview", JSON.stringify(reviewData));

        alert("Thanks for your review!"); // Esto te ayuda a ver si funciona
        form.reset(); // Limpia el form
    });
});

// Productos
const products = [
  {
    productName: "White Industrial Paper Roll",
    measure: "25 cm x 400 m",
    imageUrl: "images/p1bob.webp"
  },
  {
    productName: "Beige Industrial Paper Roll",
    measure: "25 cm x 400 m",
    imageUrl: "images/p2bob.webp"
  },
  {
    productName: "Industrial Toilet Paper",
    measure: "8 rolls x 200 m",
    imageUrl: "images/higiénico.webp"
  },
  {
    productName: "Interfold Paper Towels",
    measure: "1200 Sheets per Box",
    imageUrl: "images/intercaladas.webp"
  },
  {
    productName: "Toilet paper",
    measure: "4 rolls x 80 m",
    imageUrl: "images/higienicochico.webp"
  },
  {
    productName: "Toilet paper",
    measure: "12 rolls x 80 m",
    imageUrl: "images/ph1216.webp"
  },
  {
    productName: "Toilet paper",
    measure: "12 rolls x 100 m",
    imageUrl: "images/ph1231.webp"
  },
  {
    productName: "Paper Towels",
    measure: "3 rolls x 120 sheets",
    imageUrl: "images/r9120.webp"
  },
  {
    productName: "Paper Towels",
    measure: "8 rolls x 200 sheets",
    imageUrl: "images/r8300.webp"
  },
]

const cardsContainer = document.querySelector("#product-cards");


// Function to create the HTML string for a temple card (using map returns an array of HTML strings)
function createProductCards(productArray) {
  // Use map to transform each temple object into an HTML string for the card
  return productArray
    .map(
      (product) => `
    <section class="product-card">
      <h3>${product.productName}</h3>
      <p>Details: ${product.measure}</p>
      <img src="${product.imageUrl}" alt="${product.productName}" loading="lazy" width="270" height="200" referrerpolicy="no-referrer"/>
    </section>
  `
    )
    .join(""); // join all HTML strings into one big string
}
// Function to display temples by inserting HTML into container
function displayTemples(productArray) {
  cardsContainer.innerHTML = createProductCards(productArray);
}

// Show all temples initially
displayTemples(products);
