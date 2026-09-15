// Validación del formulario de visitas - AISHA MRI
// Este sitio es estático (GitHub Pages), por lo que el formulario NO hace POST a un servidor.
// La validación se realiza completamente en el navegador para evitar el error 405 Not Allowed.

document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector("#formulario-visita");
    if (!formulario) return;

    // Desactiva la validación automática del navegador para usar nuestros mensajes.
    formulario.noValidate = true;

    formulario.addEventListener("submit", (evento) => {
        // Muy importante: GitHub Pages no procesa formularios POST.
        evento.preventDefault();

        const errores = [];

        const nombre = document.getElementById("nombre").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const codigoPostal = document.getElementById("codigo-postal").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const comentario = document.getElementById("comentario").value.trim();

        if (nombre === "") {
            errores.push("Nombre completo");
        }

        if (telefono === "") {
            errores.push("Teléfono");
        } else if (!/^\d{10}$/.test(telefono)) {
            errores.push("Teléfono: debe contener exactamente 10 números");
        }

        if (codigoPostal === "") {
            errores.push("Código postal");
        } else if (!/^\d{5}$/.test(codigoPostal)) {
            errores.push("Código postal: debe contener exactamente 5 números");
        }

        if (correo === "") {
            errores.push("Correo electrónico");
        } else {
            const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!formatoCorreo.test(correo)) {
                errores.push("Correo electrónico: formato no válido");
            }
        }

        if (comentario === "") {
            errores.push("Comentario");
        }

        const sexoSeleccionado = document.querySelector('input[name="sexo"]:checked');
        if (!sexoSeleccionado) {
            errores.push("Sexo: selecciona una opción");
        }

        const condiciones = document.querySelector('input[name="condiciones"]');
        if (!condiciones.checked) {
            errores.push("Aceptación de condiciones");
        }

        if (errores.length > 0) {
            alert(
                "Por favor, revisa los siguientes campos:\n\n- " +
                errores.join("\n- ")
            );
            return;
        }

        alert(
            "¡Formulario validado correctamente!\n\n" +
            "Tus datos fueron revisados en este navegador.\n" +
            "Este proyecto académico no envía información a un servidor."
        );

        formulario.reset();
    });

    // Solo permite números en teléfono y código postal.
    ["telefono", "codigo-postal"].forEach((id) => {
        const campo = document.getElementById(id);
        campo.addEventListener("input", () => {
            campo.value = campo.value.replace(/\D/g, "");
        });
    });
});
