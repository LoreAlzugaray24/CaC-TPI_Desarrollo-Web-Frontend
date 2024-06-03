// sidebar
function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

// Reservas
// Función de validación para la fecha
const validarFecha = () => {
  const date = document.getElementById("date").value;
  const dateError = document.getElementById("date-error");

  // Obtener la fecha actual
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Obtener la fecha seleccionada por el usuario
  const selectedDate = new Date(date);

  // Calcular la diferencia en días
  const differenceInDays = Math.floor(
    (selectedDate - today) / (1000 * 60 * 60 * 24)
  );

  // Validar si la fecha está dentro del rango permitido (90 días de anticipación)
  if (differenceInDays < 0) {
    dateError.innerText =
      "Los días anteriores a hoy no son hábiles para reservar.";
    return false;
  } else if (differenceInDays > 90) {
    dateError.innerText =
      "Debe hacer la reserva hasta 90 días de anticipación.";
    return false;
  } else {
    dateError.innerText = "";
    return true;
  }
};

// Función de validación para el horario
const validarHorario = () => {
  const appt = document.getElementById("appt").value;
  const apptError = document.getElementById("appt-error");

  // Obtener la hora seleccionada por el usuario
  const selectedTime = new Date("2000-01-01T" + appt + ":00");

  // Definir los límites de horario permitidos (de 9 am a 10 pm)
  const startTime = new Date("2000-01-01T09:00:00");
  const endTime = new Date("2000-01-01T22:00:00");

  // Validar si el horario está dentro del rango permitido
  if (selectedTime < startTime || selectedTime > endTime) {
    if (selectedTime < startTime) {
      apptError.innerText =
        "La hora no es correcta. Debe ser después de las 9 am.";
    } else {
      apptError.innerText =
        "La hora no es correcta. Debe ser antes de las 10 pm.";
    }
    return false;
  } else {
    apptError.innerText = "";
    return true;
  }
};

// Función de validación para la cantidad de personas
const validarCantidadPersonas = () => {
  const nPeople = document.getElementById("n-people").value;
  const nPeopleError = document.getElementById("n-people-error");

  // Validar si la cantidad de personas está dentro del rango permitido y tiene 3 dígitos
  if (isNaN(nPeople) || nPeople.length !== 3 || nPeople < 1 || nPeople > 150) {
    nPeopleError.innerText =
      "Las reservas son a partir de 1 a 150 personas y debe tener 3 dígitos.";
    return false;
  } else {
    nPeopleError.innerText = "";
    return true;
  }
};

// Función de validación para el nombre
const validarNombre = () => {
  const name = document.getElementById("name").value;
  const nameError = document.getElementById("name-error");

  // Utilizar una expresión regular para validar el formato del nombre
  const nameRegex = /^[a-zA-Z ]{1,50}$/;

  // Validar si el nombre cumple con el formato esperado
  if (!nameRegex.test(name)) {
    nameError.innerText =
      "El nombre debe contener solo letras y un límite de 50 caracteres.";
    return false;
  } else {
    nameError.innerText = "";
    return true;
  }
};

// Función de validación para el correo electrónico
const validarEmail = () => {
  const email = document.getElementById("email").value;
  const emailError = document.getElementById("email-error");

  // Utilizar una expresión regular para validar el formato del correo electrónico
  const emailRegex =
    /^[a-zA-Z][a-zA-Z0-9._%+-]{1,}@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

  // Validar si el correo electrónico cumple con el formato esperado
  if (email.length < 2) {
    emailError.innerText =
      "El correo electrónico debe tener al menos 2 caracteres.";
    return false;
  } else if (!/^[a-zA-Z]/.test(email)) {
    emailError.innerText = "El correo electrónico debe comenzar con una letra.";
    return false;
  } else if (!emailRegex.test(email)) {
    emailError.innerText = "El correo electrónico tiene un formato inválido.";
    return false;
  } else {
    emailError.innerText = "";
    return true;
  }
};

// Función de validación para el número de teléfono
const validarTelefono = () => {
  const phone = document.getElementById("phone").value;
  const phoneError = document.getElementById("phone-error");

  // Utilizar una expresión regular para validar el formato del número de teléfono (10 dígitos)
  const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

  // Validar si el número de teléfono cumple con el formato esperado
  if (!phoneRegex.test(phone)) {
    phoneError.innerText = "El número de teléfono es inválido.";
    return false;
  } else {
    phoneError.innerText = "";
    return true;
  }
};

document.getElementById("form").addEventListener("submit", (event) => {
  // Llamar a las funciones de validación
  const fechaValida = validarFecha();
  const horarioValido = validarHorario();
  const cantidadPersonasValida = validarCantidadPersonas();
  const nombreValido = validarNombre();
  const emailValido = validarEmail();
  const telefonoValido = validarTelefono();

  // Verificar si alguna validación falló
  if (
    !fechaValida ||
    !horarioValido ||
    !cantidadPersonasValida ||
    !nombreValido ||
    !emailValido ||
    !telefonoValido
  ) {
    // Si alguna validación falló, prevenir el envío del formulario
    event.preventDefault();
  }
});


//Contacto
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('.contact-form form');
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const emailInput = document.getElementById('form2-email');
  const phoneInput = document.getElementById('form2-phone');
  const textareaInput = document.getElementById('form2-textarea');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevenir envío automático del formulario

      // Validar campos
      if (!validateName(firstNameInput.value.trim())) {
          displayErrorMessage(firstNameInput, 'Por favor ingrese un nombre válido.');
          return;
      }
      if (!validateName(lastNameInput.value.trim())) {
          displayErrorMessage(lastNameInput, 'Por favor ingrese un apellido válido.');
          return;
      }
      if (!validateEmail(emailInput.value.trim())) {
          displayErrorMessage(emailInput, 'Por favor ingrese un correo electrónico válido.');
          return;
      }
      if (!validatePhone(phoneInput.value.trim())) {
          displayErrorMessage(phoneInput, 'Por favor ingrese un número de teléfono válido.');
          return;
      }

      // Si todos los campos son válidos, se puede enviar el formulario
      form.submit();
  });

  // Función para validar nombre y apellido (solo letras y espacios)
  function validateName(name) {
      return /^[a-zA-Z\s]+$/.test(name);
  }

  // Función para validar correo electrónico
  function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Función para validar número de teléfono
  function validatePhone(phone) {
      return /^\d{10}$/.test(phone); // Por ejemplo, asumiendo que son 10 dígitos
  }

  // Función para mostrar mensaje de error
  function displayErrorMessage(input, message) {
      const errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      errorDiv.innerText = message;

      const parent = input.parentElement;
      parent.appendChild(errorDiv);
      input.classList.add('error');

      // Eliminar mensaje de error después de un tiempo
      setTimeout(function() {
          errorDiv.remove();
          input.classList.remove('error');
      }, 3000); // Eliminar el mensaje después de 3 segundos
  }
});