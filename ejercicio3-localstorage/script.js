document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("#formulario");
  const nombre = document.querySelector("#nombre");
  const apellido = document.querySelector("#apellido");
  const email = document.querySelector("#email");
  const telefono = document.querySelector("#telefono");
  const edad = document.querySelector("#edad");
  const direccion = document.querySelector("#direccion");
  const provincia = document.querySelector("#provincia");
  const metodo_contacto = document.querySelectorAll('input[name="metodo_contacto"]');
  const mensaje = document.querySelector("#mensaje");


  const containNombre = document.querySelector(".section_input_nombre");
  const containApellido = document.querySelector(".section_input_apellido");
  const containEmail = document.querySelector(".section_input_email");
  const containTelefono = document.querySelector(".section_input_telefono");
  const containEdad = document.querySelector(".section_input_edad");
  const containDireccion = document.querySelector(".section_input_direccion");
  const containProvincia = document.querySelector(".section_input_provincia");
  const containMensaje = document.querySelector(".section_input_mensaje");
  const containMetodoContacto = document.querySelector(".section_input_metodo_contacto");
  const formulario = document.querySelector("#formulario");


  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const validateName = (name) => {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(name);
  };
  const validateApellido = (apellido) => {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(apellido);
  };
  const validateTelefono = (telefono) => {
    const regex = /^\d{10}$/; // Assuming a 10-dsection_input_metodo_contactoigit phone number
    return regex.test(telefono);
  };
  const validateEdad = (edad) => {
    const regex = /^(1[89]|[2-9]\d)$/; // Validates ages 18 to 99
    return regex.test(edad);
  }
  const validateDireccion = (direccion) => {
    const regex = /^[a-zA-Z0-9\s,.-]+$/; // Allows alphanumeric characters, spaces, commas, periods, and hyphens
    return regex.test(direccion);
  }
  const validateProvincia = (provincia) => {
    const regex = /^[a-zA-Z\s]+$/; // Allows only letters and spaces
    return regex.test(provincia);
  }
  const validateMessage = (message) => {
    const regex = /^[a-zA-Z0-9\s.,!?-]+$/; // Allows alphanumeric characters, spaces, and some punctuation
    return regex.test(message);
  }

  const limpiarErrores = (container) => {
    const errores = container.querySelectorAll(".msj-error");
    errores.forEach((error) => error.remove());
  };

  // console.log("metodo de contacto: ", metodo_contacto);

  // metodo_contacto.forEach((val) => {
  //   console.log("metodo de contacto: ", val.value);
  // })

  formulario.addEventListener("input", () => {
    // valida en tiempo real
    let errores = 0;

    limpiarErrores(containNombre);
    limpiarErrores(containApellido);
    limpiarErrores(containEmail);
    limpiarErrores(containTelefono);
    limpiarErrores(containEdad);
    limpiarErrores(containDireccion);
    limpiarErrores(containProvincia);
    limpiarErrores(containMensaje);
    limpiarErrores(containMetodoContacto);
    console.log("nombre: ", nombre.value);



    if (!validateName(nombre.value)) {
      const p_error = document.createElement("p");
      p_error.classList.add("msj-error");
      p_error.textContent = "El nombre solo puede contener letras y espacios.";
      containNombre.appendChild(p_error);
      errores++;
    } else {
      nombre.classList.remove("input-error");
    }

    if (!validateApellido(apellido.value)) {
      const p_error = document.createElement("p");
      p_error.classList.add("msj-error");
      p_error.textContent = "El apellido solo puede contener letras y espacios.";
      containApellido.appendChild(p_error);
      errores++;
    } else {
      apellido.classList.remove("input-error");
    }

    if (!validateEmail(email.value)) {
      const p_error = document.createElement("p");
      p_error.classList.add("msj-error");
      p_error.textContent = "El email no es válido.";
      containEmail.appendChild(p_error);
      errores++;
    } else {
      email.classList.remove("input-error");
    }

    if (!validateTelefono(telefono.value)) {
      const p_error = document.createElement("p");
      p_error.classList.add("msj-error");
      p_error.textContent = "El teléfono debe ser un número de 10 dígitos.";
      containTelefono.appendChild(p_error);
      errores++;
    } else {
      telefono.classList.remove("input-error");
    }

    if (!validateEdad(edad.value)) {
      const p_error = document.createElement("p");
      p_error.classList.add("msj-error");
      p_error.textContent = "La edad debe ser un número entre 18 y 99.";
      containEdad.appendChild(p_error);
      errores++;
    } else {
      edad.classList.remove("input-error");
    }

    if (!validateDireccion(direccion.value)) {
      const p_error = document.createElement("p");
      p_error.classList.add("msj-error");
      p_error.textContent = "La dirección solo puede contener letras, números, espacios, comas, puntos y guiones.";
      containDireccion.appendChild(p_error);
      errores++;
    } else {
      direccion.classList.remove("input-error");
    }

    if (!validateProvincia(provincia.value)) {
      const p_error = document.createElement("p");
      p_error.classList.add("msj-error");
      p_error.textContent = "La provincia solo puede contener letras y espacios.";
      containProvincia.appendChild(p_error);
      errores++;
    } else {
      provincia.classList.remove("input-error");
    }
    if (!validateMessage(mensaje.value)) {
      const p_error = document.createElement("p");
      p_error.classList.add("msj-error");
      p_error.textContent = "El mensaje solo puede contener letras, números y algunos caracteres especiales.";
      containMensaje.appendChild(p_error);
      errores++;
    } else {
      mensaje.classList.remove("input-error");
    }

    if (errores === 0) {
      console.log("Formulario válido");
      form.classList.remove("form-error");

      const nuevo_metodo_contacto = Array.from(metodo_contacto)
        .filter((val) => val.checked)
        .map((val) => val.value);

      const datos = {
        nombre: nombre.value,
        apellido: apellido.value,
        email: email.value,
        telefono: telefono.value,
        edad: edad.value,
        direccion: direccion.value,
        provincia: provincia.value,
        metodo_contacto: nuevo_metodo_contacto,
        mensaje: mensaje.value
      };
      // localStorage.setItem("datosContacto", JSON.stringify(datos));

      document.querySelector("#preview_nombre").textContent = datos.nombre;
      document.querySelector("#preview_apellido").textContent = datos.apellido;
      document.querySelector("#preview_email").textContent = datos.email;
      document.querySelector("#preview_telefono").textContent = datos.telefono;
      document.querySelector("#preview_edad").textContent = datos.edad;
      document.querySelector("#preview_direccion").textContent = datos.direccion;
      document.querySelector("#preview_provincia").textContent = datos.provincia;
      document.querySelector("#preview_metodo_contacto").textContent = datos.metodo_contacto.join(", ");
      document.querySelector("#preview_mensaje").textContent = datos.mensaje;

    } else {
      console.log("Formulario con errores");
      form.classList.add("form-error");
    }

  });

  const btnGuardar = document.querySelector("#btn_preview");
  const btnReset = document.querySelector("#btn_reset");

  // Función para guardar en localStorage
  btnGuardar.addEventListener("click", (e) => {
    e.preventDefault();

    const nuevo_metodo_contacto = Array.from(metodo_contacto)
      .filter((val) => val.checked)
      .map((val) => val.value);

    const datos = {
      nombre: nombre.value,
      apellido: apellido.value,
      email: email.value,
      telefono: telefono.value,
      edad: edad.value,
      direccion: direccion.value,
      provincia: provincia.value,
      metodo_contacto: nuevo_metodo_contacto,
      mensaje: mensaje.value
    };

    // guardamos en el localstorage
    localStorage.setItem("form_datos", JSON.stringify(datos));


    // Volcar en tabla
    document.querySelector("#preview_nombre").textContent = datos.nombre;
    document.querySelector("#preview_apellido").textContent = datos.apellido;
    document.querySelector("#preview_email").textContent = datos.email;
    document.querySelector("#preview_telefono").textContent = datos.telefono;
    document.querySelector("#preview_edad").textContent = datos.edad;
    document.querySelector("#preview_direccion").textContent = datos.direccion;
    document.querySelector("#preview_provincia").textContent = datos.provincia;
    document.querySelector("#preview_metodo_contacto").textContent = datos.metodo_contacto.join(", ");
    document.querySelector("#preview_mensaje").textContent = datos.mensaje;

    console.log("Datos guardados en localStorage:", datos);
    alert("Datos guardados correctamente");
  });

  btnReset.addEventListener("click", (e) => {
    e.preventDefault();

    // Resetea el formulario
    formulario.reset();

    // limpiamos tabla
    const celdas = document.querySelectorAll("#preview_nombre, #preview_apellido, #preview_email, #preview_telefono, #preview_edad, #preview_direccion, #preview_provincia, #preview_metodo_contacto, #preview_mensaje");

    celdas.forEach((celda) => {
      celda.textContent = "";
    });

    // Limpiamos localStorage
    // localStorage.clear();
    localStorage.removeItem("form_datos");
    console.log("Formulario reseteado y datos eliminados de localStorage");
    alert("Datos eliminados correctamente");
  })


  const datosGuardados = JSON.parse(localStorage.getItem("form_datos"));
  if (datosGuardados) {
    // Llenar formulario
    nombre.value = datosGuardados.nombre;
    apellido.value = datosGuardados.apellido;
    email.value = datosGuardados.email;
    telefono.value = datosGuardados.telefono;
    edad.value = datosGuardados.edad;
    direccion.value = datosGuardados.direccion;
    provincia.value = datosGuardados.provincia;
    mensaje.value = datosGuardados.mensaje;

    // Marcar checkboxes
    metodo_contacto.forEach((input) => {
      input.checked = datosGuardados.metodo_contacto.includes(input.value);
    });

    // Llenar tabla
    document.querySelector("#preview_nombre").textContent = datosGuardados.nombre;
    document.querySelector("#preview_apellido").textContent = datosGuardados.apellido;
    document.querySelector("#preview_email").textContent = datosGuardados.email;
    document.querySelector("#preview_telefono").textContent = datosGuardados.telefono;
    document.querySelector("#preview_edad").textContent = datosGuardados.edad;
    document.querySelector("#preview_direccion").textContent = datosGuardados.direccion;
    document.querySelector("#preview_provincia").textContent = datosGuardados.provincia;
    document.querySelector("#preview_metodo_contacto").textContent = datosGuardados.metodo_contacto.join(", ");
    document.querySelector("#preview_mensaje").textContent = datosGuardados.mensaje;
  }


});

