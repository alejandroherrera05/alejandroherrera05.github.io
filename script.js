script:
// Validar el formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    // Verifica si la página actual es la de contacto
    if (document.getElementById('formulario-contacto')) {
        const formulario = document.getElementById('formulario-contacto');

        formulario.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita el envío del formulario para validación

            const nombre = formulario.querySelector('input[type="text"]').value;
            const email = formulario.querySelector('input[type="email"]').value;
            const mensaje = formulario.querySelector('textarea').value;

            if (nombre === '' || email === '' || mensaje === '') {
                alert('Por favor, completa todos los campos.');
            } else {
                alert('¡Gracias por tu mensaje, ' + nombre + '! Nos pondremos en contacto pronto.');
                formulario.reset(); // Resetea el formulario
            }
        });
    }
});
// Mostrar alerta al intentar acceder a un foro
document.addEventListener('DOMContentLoaded', function() {
    const enlacesForo = document.querySelectorAll('.enlace-foro');

    enlacesForo.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Este foro estará disponible pronto.');
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
            const formulario = document.getElementById('formulario');

            if (formulario) {
                formulario.addEventListener('submit', function(e) {
                    e.preventDefault(); // Evita el envío del formulario

                    // Obtén los valores de los campos
                    const nombre = document.getElementById('nombre').value;
                    const mensaje = document.getElementById('mensaje').value;

                    // Crea un objeto con el mensaje
                    const nuevoMensaje = {
                        nombre: nombre,
                        mensaje: mensaje
                    };

                    // Obtiene los mensajes actuales del LocalStorage
                    let mensajesGuardados = JSON.parse(localStorage.getItem('mensajesForo')) || [];

                    // Agrega el nuevo mensaje a la lista
                    mensajesGuardados.push(nuevoMensaje);

                    // Guarda la nueva lista en LocalStorage
                    localStorage.setItem('mensajesForo', JSON.stringify(mensajesGuardados));

                    alert('¡Tu mensaje ha sido enviado al foro!');

                    // Limpiar el formulario
                    formulario.reset();
                });
            }



            // Función para abrir el modal y mostrar la imagen ampliada
            function abrirModal(imagenSrc) {
                const modal = document.getElementById('modal');
                const modalImagen = document.getElementById('imagen-modal');
                modal.style.display = 'flex';
                modalImagen.src = imagenSrc;
            }

            // Función para cerrar el modal
            function cerrarModal() {
                const modal = document.getElementById('modal');
                modal.style.display = 'none';
            }