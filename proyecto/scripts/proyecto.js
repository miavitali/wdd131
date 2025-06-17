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
