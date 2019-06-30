var socket = io();

socket.on('connect', function() {

    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {

    console.log('Perdimos conexion con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Felipe',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server:', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});