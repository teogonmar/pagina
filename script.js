$(document).ready(function () {
    // Abrir el modal haciendo un clic en el botón
    $("#abrirModal").click(function () {
        $("#modal").fadeIn();
    });

    // Cerrar el modal haciendo un clic en el botón
    $(".fa-xmark").click(function () {
        $("#modal").fadeOut();
    });

    // Cerrar modal haciendo clic fuera del contenido del modal
    $(window).click(function (event) {
        if (event.target.id === "modal") {
            $("#modal").fadeOut();
        }
    });
});

// no permitir espacios en los campos
function noEspacios(event) {
    if (event.keyCode === 32) {
        event.preventDefault();
    }
}

//Hacer que las contraseñas coincidan, sino no se puede enviar el formulario
document.getElementById("formulario").addEventListener("submit", function (event) {
    // Obtener los valores de las contraseñas
    const claveA = document.getElementById("passwordA").value;
    const claveB = document.getElementById("passwordB").value;
    const error = document.getElementById("mensaje");

    // Verificar si las contraseñas coinciden
    if (claveA !== claveB) {
        // Mostrar el mensaje de error
        error.textContent = "Las contraseñas deben coincidir";
        // Evitar el envío del formulario
        event.preventDefault();
    } else {
        // Eliminar mensaje de error si coinciden
        error.textContent = "";
    }
});

//Código para que aparezca el icono del ojo en el primer campo
const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("passwordA");

    togglePassword.addEventListener("click", function () {
    // Alternar el tipo de input entre password y text
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // Cambiar el ícono entre ojo abierto y el cerrado
    this.querySelector("i").classList.toggle("fa-eye");
    this.querySelector("i").classList.toggle("fa-eye-slash");
});

//Código para que aparezca icono ojo en el segundo campo
const togglePassword2 = document.getElementById("togglePassword2");
const password2 = document.getElementById("passwordB");

    togglePassword2.addEventListener("click", function () {
    // Alternar el tipo de input entre password y text
    const type = password2.getAttribute("type") === "password" ? "text" : "password";
    password2.setAttribute("type", type);

    // Cambiar el ícono entre ojo abierto y el cerrado
    this.querySelector("i").classList.toggle("fa-eye");
    this.querySelector("i").classList.toggle("fa-eye-slash");
});

