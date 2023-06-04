function validarDatosPaciente(
  nombre,
  apellido,
  cedula,
  edad,
  tel,
  especialidad
) {
  let validarNombre = /^[A-Za-z]+\s*?[A-Za-z]*?\s*?[A-Za-z]*?\s*?$/g;
  let validarApellido = /^[A-Za-z]+\s*?[A-Za-z]*?\s*?[A-Za-z]*?\s*?$/g;
  let validarCedula = /[0-9]/g;
  let validarNumero = /^([0-9]{10})$/g;

  let validacion = 0;
  // Validar Nombre
  if (!validarNombre.test(nombre)) {
    let elemento = document.getElementById("nombre");
    elemento.className = "warning";
    alert("Ingrese un nombre valido");
    validacion++;
  } else {
    let elemento = document.getElementById("nombre");
    elemento.classList.remove("warning");
  }
  // Validar Apellido
  if (!validarApellido.test(apellido)) {
    let elemento = document.getElementById("apellido");
    elemento.className = "warning";
    alert("Ingrese un apellido valido");
    validacion++;
  } else {
    let elemento = document.getElementById("apellido");
    elemento.classList.remove("warning");
  }

  // Validar Cedula
  if (!validarCedula.test(cedula)) {
    let elemento = document.getElementById("cedula");
    elemento.className = "warning";
    alert("Ingrese un numero de cedula valido");
    validacion++;
  } else {
    let elemento = document.getElementById("cedula");
    elemento.classList.remove("warning");
  }
  // Validar fecha
  if (isNaN(edad)) {
    alert("Ingrese una fecha de nacimiento valida");
    validacion++;
  } else if (edad < 1) {
    alert("Ingrese una fecha de nacimiento valida");
    validacion++;
  }
  // Valdiar numero de Cel
  if (!validarNumero.test(tel)) {
    let elemento = document.getElementById("tel");
    elemento.className = "warning";
    alert("Ingrese un numero de celular valido");
    validacion++;
  } else {
    let elemento = document.getElementById("tel");
    elemento.classList.remove("warning");
  }
  // Validar Especialidad

  if (especialidad == "especialidad") {
    alert("Ingrese una especialidad valida");
    validacion++;
  }
  return validacion;
}
function validarDatosDoctor(
  nombre,
  apellido,
  cedula,
  especialidad,
  consultorio,
  email
) {
  let validarNombre = /^[A-Za-z]+\s*?[A-Za-z]*?\s*?[A-Za-z]*?\s*?$/g;
  let validarApellido = /^[A-Za-z]+\s*?[A-Za-z]*?\s*?[A-Za-z]*?\s*?$/g;
  let validarCedula = /[0-9]/g;
  let validarConsultorio = /^([0-9]{3})$/g;
  let validarCorreo =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/g;

  let validacion = 0;
  // Validar Nombre
  if (!validarNombre.test(nombre)) {
    let elemento = document.getElementById("nombre-doctor");
    elemento.className = "warning";
    alert("Ingrese un nombre valido");
    validacion++;
  } else {
    let elemento = document.getElementById("nombre-doctor");
    elemento.classList.remove("warning");
  }
  // Validar Apellido
  if (!validarApellido.test(apellido)) {
    let elemento = document.getElementById("apellido-doctor");
    elemento.className = "warning";
    alert("Ingrese un apellido valido");
    validacion++;
  } else {
    let elemento = document.getElementById("apellido-doctor");
    elemento.classList.remove("warning");
  }

  // Validar Cedula
  if (!validarCedula.test(cedula)) {
    let elemento = document.getElementById("cedula-doctor");
    elemento.className = "warning";
    alert("Ingrese un numero de cedula valido");
    validacion++;
  } else {
    let elemento = document.getElementById("cedula-doctor");
    elemento.classList.remove("warning");
  }
  // Validar Consultorio
  if (!validarConsultorio.test(consultorio)) {
    let elemento = document.getElementById("consultorio");
    elemento.className = "warning";
    alert("Ingrese un consultorio valido");
    validacion++;
  } else {
    let elemento = document.getElementById("consultorio");
    elemento.classList.remove("warning");
  }

  // Valdiar numero de Email
  if (!validarCorreo.test(email)) {
    let elemento = document.getElementById("email");
    elemento.className = "warning";
    alert("Ingrese un correo valido");
    validacion++;
  } else {
    let elemento = document.getElementById("email");
    elemento.classList.remove("warning");
  }
  // Validar Especialidad

  if (especialidad == "especialidad") {
    alert("Ingrese una especialidad valida");
    validacion++;
  }
  return validacion;
}
function datosPaciente() {
  let botonEnviar = document.getElementById("boton-envio");
  var pacientes = [];
  var i = 0;
  botonEnviar.onclick = function () {
    i++;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let cedula = document.getElementById("cedula").value;
    let edad =
      new Date().getFullYear() -
      new Date(document.getElementById("edad").value).getFullYear();
    let tel = document.getElementById("tel").value;
    let especialidad = document.getElementById("especialidad").value;
    let validacion = validarDatosPaciente(
      nombre,
      apellido,
      cedula,
      edad,
      tel,
      especialidad
    );
    if (validacion == 0) {
      alert("Datos subidos correctamente");
      const Paciente = {
        nombre: nombre,
        apellido: apellido,
        cedula: cedula,
        edad: edad,
        tel: tel,
        especialidad: especialidad,
      };

      pacientes.push(Paciente);

      let botonPacientesDatos = Object.assign(document.createElement("input"), {
        id: "boton-paciente",
        className: "boton-paciente",
        type: "button",
        value: "Ver Datos de Pacientes",
      });

      botonPacientesDatos.style.display = "inline-block";
      botonPacientesDatos.style.width = "30%";
      botonPacientesDatos.style.height = "80px";
      botonPacientesDatos.style.margin = "20px 0px 0px 35%";
      document
        .getElementById("main")
        .appendChild(botonPacientesDatos)
        .scrollIntoView({ behavior: "smooth", block: "start" });
      if (i >= 2) {
        botonPacientesDatos.remove();
      }
      let botonVerDatos = document.getElementById("boton-paciente");

      botonVerDatos.onclick = function () {
        let datosPacientes = JSON.stringify(pacientes);

        alert("JSON Pacientes: \n " + datosPacientes);

        let contenedorDatosPacientes =
          document.getElementById("datos-pacientes");

        contenedorDatosPacientes.innerText =
          "Pacientes \n \n \n" + datosPacientes;
      };
    } else {
      document.getElementById("boton-paciente").remove();
    }
  };
}
function datosDoctor() {
  let botonEnviar = document.getElementById("boton-envio-doctor");
  var doctores = [];
  var i = 0;
  botonEnviar.onclick = function () {
    i++;
    let nombre = document.getElementById("nombre-doctor").value;
    let apellido = document.getElementById("apellido-doctor").value;
    let cedula = document.getElementById("cedula-doctor").value;
    let consultorio = document.getElementById("consultorio").value;
    let email = document.getElementById("email").value;
    let especialidad = document.getElementById("especialidad-doctor").value;
    let validacion = validarDatosDoctor(
      nombre,
      apellido,
      cedula,
      especialidad,
      consultorio,
      email
    );

    if (validacion == 0) {
      alert("Datos subidos correctamente");
      const Doctor = {
        nombre: nombre,
        apellido: apellido,
        cedula: cedula,
        consultorio: consultorio,
        email: email,
        especialidad: especialidad,
      };
      doctores.push(Doctor);
      let botonPacientesDatos = Object.assign(document.createElement("input"), {
        id: "boton-doctor",
        className: "boton-paciente",
        type: "button",
        value: "Ver Datos de Doctores",
      });

      botonPacientesDatos.style.display = "inline-block";
      botonPacientesDatos.style.width = "30%";
      botonPacientesDatos.style.height = "80px";
      botonPacientesDatos.style.margin = "20px 0px 0px 35%";
      document
        .getElementById("main")
        .appendChild(botonPacientesDatos)
        .scrollIntoView({ behavior: "smooth", block: "start" });
      if (i >= 2) {
        botonPacientesDatos.remove();
      }
      let botonVerDatos = document.getElementById("boton-doctor");
      botonVerDatos.onclick = function () {
        let datosDoctores = JSON.stringify(doctores);

        alert("JSON Doctores: \n " + datosDoctores);

        let contenedorDatosDoctores = document.getElementById("datos-doctores");

        contenedorDatosDoctores.innerText = "Doctores \n \n \n" + datosDoctores;
      };
    } else {
      document.getElementById("boton-doctor").remove();
    }
  };
}

datosDoctor();
datosPaciente();
