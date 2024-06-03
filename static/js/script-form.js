
// Nombrar la función
function valida_envia() {
    // Define los caracteres permitidos en una dirección de correo electrónico
    var regexp = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;

    // Valida el campo nombre
    var firstName = document.getElementById("first-name");
    var firstNameError = document.getElementById("first-name-error").querySelector("span");
    if (firstName.value.length == 0) {
        firstNameError.innerHTML = "Tiene que escribir su nombre";
        firstName.focus();
        return false;
    } else {
        firstNameError.innerHTML = "";
    }

    // Valida el campo apellido
    var lastName = document.getElementById("last-name");
    var lastNameError = document.getElementById("last-name-error").querySelector("span");
    if (lastName.value.length == 0) {
        lastNameError.innerHTML = "Tiene que escribir su apellido";
        lastName.focus();
        return false;
    } else {
        lastNameError.innerHTML = "";
    }

    // Valida el campo teléfono de 9 dígitos
    var phone = document.getElementById("phone");
    var phoneError = document.getElementById("phone-error").querySelector("span");
    valor = phone.value;
    if (!(/^\d{9}$/.test(valor))) {
        phoneError.innerHTML = "Tiene que escribir un teléfono de 9 dígitos";
        phone.focus();
        return false;
    } else {
        phoneError.innerHTML = "";
    }

    // Valida el campo de texto como email
    var email = document.getElementById("email");
    var emailError = document.getElementById("email-error").querySelector("span");
    if (!regexp.test(email.value)) {
        emailError.innerHTML = "Introduzca una dirección de email válida";
        email.focus();
        return false;
    } else {
        emailError.innerHTML = "";
    }

    // Si todos los campos han validado correctamente, se envía el formulario
    document.getElementById("form").submit();
}
