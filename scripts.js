document.addEventListener("DOMContentLoaded", function() {
    // Array de carreras disponibles
    const carreras = [
        "Tecnicatura Superior en Industria Textil e Indumentaria",
        "Tecnicatura Superior en Emergencias Medicas",
        "Tecnicatura Superior en Turismo",
        "Tecnicatura Superior en Gestion Ambiental y Salud",
        "Tecnicatura Superior en Logistica",
        "Tecnicatura Superior en Analisis de Sistemas"
    ];

    const selectCarrera = document.getElementById("carrera");

    carreras.forEach(carrera => {
        const option = document.createElement("option");
        option.value = carrera.toLowerCase().replace(/\s+/g, "-");
        option.textContent = carrera;
        selectCarrera.appendChild(option);
    });

    // Scroll suave para el enlace de "Contacto"
    const enlaceContacto = document.getElementById("enlace-contacto");

    enlaceContacto.addEventListener("click", function(event) {
        event.preventDefault();
        const contactoSection = document.getElementById("contacto");
        contactoSection.scrollIntoView({ behavior: "smooth" });
    });

    // Manejo del formulario
    document.getElementById("formulario").addEventListener("submit", function(event) {
        event.preventDefault();

        // Aquí realizas la validación y envío del formulario

        // Si el formulario se envió correctamente, muestra el mensaje de éxito
        const mensajeExito = document.getElementById("mensaje-exito");
        mensajeExito.classList.remove("oculto");
    });
});
