# Ejercicio 5

* ✅ **Eventos en tiempo real** (`input`)
* ✅ **Manipulación del DOM** (llenar una “preview” o cuadro en vivo)
* ✅ **Validación dinámica**
* ✅ **Persistencia con `localStorage`** (guardado/recuperación de datos)
* ✅ Bonus: trabajar objetos en JS 📦

---

## 🔥 Nueva Consigna: **Formulario + Vista previa + LocalStorage**

### 🎯 Objetivo

Desarrollar una página de contacto que muestre en tiempo real los datos ingresados, permita validarlos, guardarlos como objeto en `localStorage` y recuperarlos para volver a mostrarlos.

---

### 📌 Requisitos

#### 🧱 1. **Estructura HTML**

* Formulario con:

  * `Nombre completo`
  * `Correo electrónico`
  * `Asunto`
  * `Mensaje`
  * Botón "Guardar en localStorage"
  * Botón "Cargar datos guardados"

* Un **cuadro de vista previa** donde se muestre automáticamente lo que se escribe en el formulario.

#### 🎨 2. **Estilo CSS**

* Tema: **Tokyo Night** (como los anteriores)
* Usá `grid` o `flex` para ubicar el formulario y el cuadro de vista previa lado a lado.
* La vista previa debe estar estilizada como una tarjeta o panel informativo.

#### 🧠 3. **Lógica con JavaScript**

* A medida que el usuario tipea, se actualiza la vista previa automáticamente.
* Validar los campos en tiempo real (nombre mínimo 3, email válido, etc).
* Si todos los campos son válidos, permitir "Guardar".
* Al presionar “Guardar”, almacená los datos como objeto en `localStorage`, por ejemplo:

```js
{
  nombre: "Guillermo",
  correo: "guille@gmail.com",
  asunto: "Consulta",
  mensaje: "Hola, quisiera más info."
}
```

* El botón "Cargar datos guardados" debe traer los datos del `localStorage` y:

  * llenar los campos del formulario
  * llenar el cuadro de vista previa

---

### 📂 Estructura sugerida

```
/ejercicio5/
├── index.html
├── style.css
└── script.js
```

---

### 💡 Bonus opcionales (si querés desafiarte más)

* Mostrar un icono verde ✅ al validar cada campo.
* Mostrar un aviso “Datos cargados con éxito” cuando se presione “Cargar”.
* Permitir editar los datos recuperados y volver a guardar.

---

¿Querés que te deje una guía visual (wireframe) o querés encararlo vos con libertad y después lo revisamos juntos cuando lo subas?
