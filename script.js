document.getElementById("leadForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nombre = this.nombre.value;
    const email = this.email.value;
    const telefono = this.telefono.value;
    const mensaje = this.mensaje.value;
  
    // Simulación de envío (después lo conectamos a un backend o Google Sheets)
    console.log("Datos del lead:", { nombre, email, telefono, mensaje });
  
    alert("¡Gracias por contactarnos! Nos comunicaremos pronto.");
    this.reset();
  });
  