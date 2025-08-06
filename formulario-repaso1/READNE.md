# ejercicio de repaso completo que abarca

* **HTML semántico**
* **CSS con layout moderno**
* **JavaScript para validación**

---

## 📝 Ejercicio 1: Formulario de contacto con validación

**Objetivo:** Crear una página HTML con un formulario de contacto que incluya validación con JavaScript y estilo con CSS.

### 🔧 Requisitos

1. Crear un archivo `index.html` que contenga:

   * Un `form` con los siguientes campos:

     * Nombre completo (input tipo texto, obligatorio)
     * Correo electrónico (input tipo email, obligatorio)
     * Mensaje (textarea, obligatorio, mínimo 10 caracteres)
     * Botón "Enviar"

2. Crear un archivo `style.css` con:

   * Estilos para los campos (`input`, `textarea`, `button`)
   * Un diseño con `flex` o `grid` para centrar el formulario
   * Colores de fondo y tipografía personalizada

3. Crear un archivo `script.js` con:

   * Validación al hacer clic en "Enviar"
   * Mostrar alertas si algún campo está vacío o incorrecto
   * Si todo está correcto, mostrar un `alert("Mensaje enviado correctamente")` y limpiar los campos

---

**Extra (opcional):**

* Agregar validación en tiempo real con `input.addEventListener('input', ...)`
* Cambiar el borde del campo a rojo si el valor no es válido

📁 Estructura sugerida:

```bash
/formulario-repaso/
├── index.html
├── style.css
└── script.js
```

---

¿Querés que te genere el código base de esos tres archivos para que puedas arrancar directamente?
