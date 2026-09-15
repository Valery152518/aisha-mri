// Validación del formulario de visitas - Actividad 2

const formulario = document.getElementById("formulario-visita");

// Desactiva la validación automática del navegador
formulario.noValidate = true;

formulario.addEventListener("submit", function (evento) {

    // Evita que el formulario intente enviarse a un servidor
    // y evita el error 405 de GitHub Pages.
    evento.preventDefault();

    const errores = [];

    // Obtener los valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const codigoPostal = document.getElementById("codigo-postal").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const comentario = document.getElementById("comentario").value.trim();


    // -----------------------------------
    // VALIDAR CAMPOS DE TEXTO
    // -----------------------------------

    if (nombre === "") {
        errores.push("Nombre completo");
    }

    if (telefono === "") {
        errores.push("Teléfono");
    }

    if (codigoPostal === "") {
        errores.push("Código postal");
    }

    if (correo === "") {
        errores.push("Correo electrónico");
    }

    if (comentario === "") {
        errores.push("Comentario");
    }


    // -----------------------------------
    // VALIDAR TELÉFONO
    // -----------------------------------

    if (telefono !== "" && !/^\d+$/.test(telefono)) {
        errores.push("Teléfono: debe contener solo números");
    }


    // -----------------------------------
    // VALIDAR CÓDIGO POSTAL
    // -----------------------------------

    if (codigoPostal !== "" && !/^\d+$/.test(codigoPostal)) {
        errores.push("Código postal: debe contener solo números");
    }


    // -----------------------------------
    // VALIDAR CORREO ELECTRÓNICO
    // -----------------------------------

    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (correo !== "" && !formatoCorreo.test(correo)) {
        errores.push("Correo electrónico: formato no válido");
    }


    // -----------------------------------
    // VALIDAR RADIO BUTTON - SEXO
    // -----------------------------------

    const sexoSeleccionado =
        document.querySelector('input[name="sexo"]:checked');

    if (!sexoSeleccionado) {
        errores.push("Sexo: selecciona una opción");
    }


    // -----------------------------------
    // VALIDAR CHECKBOX - CONDICIONES
    // -----------------------------------

    const condiciones =
        document.querySelector('input[name="condiciones"]');

    if (!condiciones.checked) {
        errores.push("Aceptación de condiciones");
    }


    // -----------------------------------
    // MOSTRAR RESULTADO
    // -----------------------------------

    if (errores.length > 0) {

        alert(
            "Por favor, revisa los siguientes campos:\n\n- " +
            errores.join("\n- ")
        );

    } else {

        alert(
            "¡Formulario validado correctamente!\n\n" +
            "Todos los campos fueron llenados de forma adecuada."
        );

    }

});