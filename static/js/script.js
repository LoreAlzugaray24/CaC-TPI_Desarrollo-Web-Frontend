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
    dateError.innerHTML =
      "Los días anteriores a hoy no son hábiles para reservar.";
    return false;
  } else if (differenceInDays > 90) {
    dateError.innerHTML =
      "Debe hacer la reserva hasta 90 días de anticipación.";
    return false;
  } else {
    dateError.innerHTML = "";
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
      apptError.innerHTML =
        "La hora no es correcta. Debe ser después de las 9 am.";
    } else {
      apptError.innerHTML =
        "La hora no es correcta. Debe ser antes de las 10 pm.";
    }
    return false;
  } else {
    apptError.innerHTML = "";
    return true;
  }
};

// Función de validación para la cantidad de personas
const validarCantidadPersonas = () => {
  const nPeople = document.getElementById("n-people").value;
  const nPeopleError = document.getElementById("n-people-error");

  // Validar si la cantidad de personas está dentro del rango permitido y tiene 3 dígitos
  if (isNaN(nPeople) || nPeople.length !== 3 || nPeople < 1 || nPeople > 150) {
    nPeopleError.innerHTML =
      "Las reservas son a partir de 1 a 150 personas y debe tener 3 dígitos.";
    return false;
  } else {
    nPeopleError.innerHTML = "";
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
    nameError.innerHTML =
      "El nombre debe contener solo letras y un límite de 50 caracteres.";
    return false;
  } else {
    nameError.innerHTML = "";
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
    emailError.innerHTML =
      "El correo electrónico debe tener al menos 2 caracteres.";
    return false;
  } else if (!/^[a-zA-Z]/.test(email)) {
    emailError.innerHTML = "El correo electrónico debe comenzar con una letra.";
    return false;
  } else if (!emailRegex.test(email)) {
    emailError.innerHTML = "El correo electrónico tiene un formato inválido.";
    return false;
  } else {
    emailError.innerHTML = "";
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
    phoneError.innerHTML = "El número de teléfono es inválido.";
    return false;
  } else {
    phoneError.innerHTML = "";
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
      // Si alguna validación falla, prevenir el envío del formulario
      event.preventDefault();
  }
});

