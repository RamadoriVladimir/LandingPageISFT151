document.addEventListener("DOMContentLoaded", function() {
    const mostrarPlanesButton = document.getElementById("mostrarPlanes");
    const planesCarrerasDiv = document.getElementById("planesCarreras");

    mostrarPlanesButton.addEventListener("click", function() {
        if (planesCarrerasDiv.classList.contains("oculto")) {
            planesCarrerasDiv.classList.remove("oculto");
            mostrarPlanesButton.textContent = "Ocultar Planes";
            
            // Agrega los enlaces de descarga de PDF aquí
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
            planesCarrerasDiv.innerHTML = ''; // Elimina los enlaces cuando se ocultan
        }
    });
});
