document.addEventListener("CargarContenido", function() {
    const mostrarPlanesButton = document.getElementById("mostrarPlanes");
    const planesCarrerasDiv = document.getElementById("planesCarreras");

    mostrarPlanesButton.addEventListener("click", function() {
        if (planesCarrerasDiv.classList.contains("oculto")) {
            planesCarrerasDiv.classList.remove("oculto");
            mostrarPlanesButton.textContent = "Ocultar Planes";

            const enlacesPDF = `
                <p><a href="https://drive.google.com/file/d/1gMN864FzwCqNwO3ZisISdvUWrWdZDlAM/view?usp=drive_web&authuser=1" target="_blank">Descargar Plan De Tecnicatura Superior en Análisis de Sistemas(PDF)</a></p>
                <p><a href="https://drive.google.com/file/d/1ErfX7Z3-aINa5oRR5yoAUFM16PsH_EdK/view?usp=drive_web&authuser=1" target="_blank">Descargar Tecnicatura Superior en Gestión Ambiental y Salud (PDF)</a></p>
                <p><a href="https://drive.google.com/file/d/1sUFpwMt3vJA-e7fGzUI0pxkLllOmGnsd/view?usp=drive_web&authuser=1" target="_blank">Tecnicatura Superior en Acompañamiento Terapéutico (PDF)</a></p>
                <p><a href="https://drive.google.com/file/d/1PQUz8B7lmD_qdYiqNxLI0H4YtZau-z5g/view?usp=drive_web&authuser=1" target="_blank">Tecnicatura Superior en Emergencias de Salud (PDF)</a></p>
                <p><a href="https://drive.google.com/file/d/1fMQA6eIF9fjIcuxNu79k_0g9-r59JTCS/view?usp=drive_web&authuser=1" target="_blank">Tecnicatura Superior en Logística (PDF)</a></p>
                <p><a href="https://drive.google.com/file/d/11XaSLaQgEXT6zMZ8dNXnQNXgGdbn0F96/view?usp=drive_web&authuser=1" target="_blank">Tecnicatura Superior en Industria Textil e Indumentaria (PDF)</a></p>
                <p><a href="https://drive.google.com/file/d/1AQsb_om2cnGm4SP3c2lcB00fK5D6Eycy/view?usp=drive_web&authuser=1" target="_blank">Tecnicatura Superior en Turismo (PDF)</a></p>
            `;
            
            planesCarrerasDiv.innerHTML = enlacesPDF;
        } else {
            planesCarrerasDiv.classList.add("oculto");
            mostrarPlanesButton.textContent = "Mostrar Planes";
            planesCarrerasDiv.innerHTML = ''; 
        }
    });
});

document.addEventListener("CargarContenido", function() {
    const mostrarPlanButtons = document.querySelectorAll(".mostrar-plan-button");

    mostrarPlanButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const planUrl = button.getAttribute("data-plan-url");
            window.open(planUrl, "_blank");
        });
    });
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.onscroll = function() {
    var button = document.getElementById("scrollToTopButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

var scrollToTopButton = document.getElementById("scrollToTopButton");
scrollToTopButton.addEventListener("click", scrollToTop);

function enviarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    alert("Mensaje enviado:\n\nNombre: " + nombre + "\nEmail: " + email + "\nMensaje: " + mensaje);
}

function actualizarContador() {
    var mensaje = document.getElementById("mensaje");
    var contador = document.getElementById("contador-caracteres");
    var caracteresRestantes = 250 - mensaje.value.length;

    contador.textContent = "Caracteres restantes: " + caracteresRestantes;
  }