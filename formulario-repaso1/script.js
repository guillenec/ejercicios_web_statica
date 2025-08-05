console.log("Script cargado correctamente");

document.addEventListener("DOMContentLoaded", () => {
  const nombre = document.querySelector("#nombre");
  const apellido = document.querySelector("#apellido");
  const email = document.querySelector("#email");
  const mensaje = document.querySelector("#mensaje");

  const containNombre = document.querySelector(".section_input_nombre");
  const containApellido = document.querySelector(".section_input_apellido");
  const containEmail = document.querySelector(".section_input_email");
  const containMensaje = document.querySelector(".section_input_mensaje");

  // nombre.addEventListener("input", (event) => {
  //   console.log("Tipeando Nombre:", event.target.value);
  // });
  // apellido.addEventListener("input", (event) => {
  //   console.log("Tipeando Apellido:", event.target.value);
  // });
  // email.addEventListener("input", (event) => {
  //   console.log("Tipeando Email:", event.target.value);
  // });
  // mensaje.addEventListener("input", (event) => {
  //   console.log("Tipeando Mensaje:", event.target.value);
  // });

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

  const validateMessage = (message) => {
    const regex = /^[a-zA-Z0-9\s.,!?-]+$/;
    return regex.test(message);
  };

  const limpiarErrores = (container) => {
    const errores = container.querySelectorAll(".msj-error");
    errores.forEach((error) => error.remove());
  };

  // validamos el formuario

  const form = document.querySelector("#formulario");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let errores = 0;

    limpiarErrores(containNombre);
    limpiarErrores(containApellido);
    limpiarErrores(containEmail);
    limpiarErrores(containMensaje);

    if (!validateName(nombre.value)) {
      const p_error = document.createElement("p");
      p_error.classList.add("msj-error");
      p_error.textContent = "El nombre solo puede contener letras y espacios.";
      containNombre.appendChild(p_error);
      errores++;
    }
    if (!validateApellido(apellido.value)) {
      const p_error = document.createElement("p");
      p_error.classList.add("msj-error");
      p_error.textContent = "El apellido solo puede contener letras y espacios.";
      containApellido.appendChild(p_error);
      errores++;
    }
    if (!validateEmail(email.value)) {
      const p_error = document.createElement("p");
      p_error.classList.add("msj-error");
      p_error.textContent = "El email no es válido.";
      containEmail.appendChild(p_error);
      errores++;
    }
    if (!validateMessage(mensaje.value)) {
      const p_error = document.createElement("p");
      p_error.classList.add("msj-error");
      p_error.textContent = "El mensaje solo puede contener letras, números y algunos caracteres especiales.";
      containMensaje.appendChild(p_error);
      errores++;
    }

    if (errores === 0) {
      const msjFormTrue = document.querySelector(".msj_form_true");
      p_suscess = document.createElement("p");
      p_suscess.classList.add("msj-success");
      p_suscess.textContent = "Formulario enviado correctamente";
      msjFormTrue.appendChild(p_suscess);

      // eliminamos el mensaje de éxito después de 3 segundos
      setTimeout(() => {
        p_suscess.remove();
        msjFormTrue.textContent = "";
      }, timeout = 3000);

      form.reset(); // Resetea el formulario
    } else {
      console.log("Errores en el formulario:", errores);
    }
  })

});
// Este script se ejecuta una vez que el DOM está completamente cargado