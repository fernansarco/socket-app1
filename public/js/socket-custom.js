var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {

    console.log('Se perdio conexion con el servidor');
});

//Enviar informacion del servidor
socket.emit('enviarMensaje', {
    usuario: 'Lucho',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('respuesta server:',
        resp);
});

//Escuchar informacion del servidor
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});