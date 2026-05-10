window.addEventListener('load', () => {
    const { z } = window.Zod;

    // Esquema para validar los datos del formulario
    const registerSchema = z.object({
      // PISTA: Define que el nombre debe ser una cadena no vacía.
      name: z.string().min(2).max(100),

      // PISTA: Valida que el correo tenga el formato correcto.
      email: z.string().email(),

      // PISTA: La contraseña debe tener al menos 6 caracteres.
      password: z.string().min(6)
    });

document.getElementById("registerForm").addEventListener("submit", (event) => {
    event.preventDefault();
const formData= {
    name: (document.getElementById("nombre").value).trim(),
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
};
    try {
        const result = registerSchema.parse(formData);
        // PISTA: Usa el método correcto de Zod para validar el esquema.
        //registerSchema.___?___(formData);
        alert("¡Registro exitoso!");
    } catch (error) {
        
        // PISTA: Muestra los mensajes de error en la página.
        document.getElementById("errors").textContent = error.errors.map(e => e.message).join(", ");
        alert("Error en el registro. Revisa los datos ingresados.");
    }
});

});