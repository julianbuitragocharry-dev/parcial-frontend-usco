document.getElementById('registrarBtn').addEventListener('click', function() {
    // Obtener valores del formulario
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const estrato = document.getElementById('estrato').value;
    const fechaNacimiento = document.getElementById('fecha-nacimiento').value;
    const grupoSanguineo = document.getElementById('grupo-sanguineo').value;
    const genero = document.querySelector('input[name="genero"]:checked').value;
    const actividadesFavoritas = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
                                      .map(checkbox => checkbox.value).join(', ');
    const fechaSolicitada = document.getElementById('fecha-solicitada').value;
    const horaSolicitada = document.getElementById('hora-solicitada').value;

    // Validaciones con expresiones regulares
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonoRegex = /^\d{10}$/;

    if (!emailRegex.test(email)) {
      alert('Por favor, ingrese un email válido.');
      return;
    }

    if (!telefonoRegex.test(telefono)) {
      alert('Por favor, ingrese un teléfono válido (10 dígitos).');
      return;
    }

    // Contador de intentos de registro
    let contador = localStorage.getItem(email) ? parseInt(localStorage.getItem(email)) : 0;
    contador++;
    localStorage.setItem(email, contador);

    // Mostrar en consola el número de veces que ha solicitado el test drive
    console.log(`El usuario con email ${email} ha solicitado el test drive ${contador} veces.`);

    // Construir el mensaje
    let mensaje = `Nombres: ${nombres}
Apellidos: ${apellidos}
Email: ${email}
Teléfono: ${telefono}
Estrato: ${estrato}
Fecha de Nacimiento: ${fechaNacimiento}
Grupo Sanguíneo: ${grupoSanguineo}
Género: ${genero}
Actividades Favoritas: ${actividadesFavoritas}
Fecha Solicitada: ${fechaSolicitada}
Hora Solicitada: ${horaSolicitada}`;

    if (contador > 1) {
      mensaje += `\nIntentos de Registro: ${contador}`;
    }

    alert(mensaje);
});

document.getElementById('cancelarBtn').addEventListener('click', function() {
    window.location.href = 'index.html';
});
