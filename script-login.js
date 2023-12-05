function enviarCorreo() {
    //Obtén los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
  
    //Construye el mensaje de correo electrónico
    const mensaje = `
      Se ha iniciado sesión nombre: ${nombre} con el correo electrónico: ${correo}.
    `;
  
    //Envía el correo electrónico
    const correoEnvia = "juanortizguary@gmail.com";
    const correoRecibe = "juanortizguary@gmail.com";
    const asunto = "Inicio de sesión";
    const cuerpo = mensaje;
  
    //Envía el correo electrónico
    window.mail(correoEnvia, correoRecibe, asunto, cuerpo);
  }
  