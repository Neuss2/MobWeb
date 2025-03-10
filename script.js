document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const responseMessage = document.getElementById("responseMessage");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            responseMessage.textContent = "Por favor, completa todos los campos.";
            responseMessage.style.color = "red";
        } else {
            responseMessage.textContent = "¡Mensaje enviado con éxito!";
            responseMessage.style.color = "green";

            // Aquí podrías agregar una función para enviar datos a un servidor
            form.reset();
        }
    });
});
