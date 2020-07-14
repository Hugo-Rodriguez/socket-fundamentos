
var socket = io();

socket.on('connect', function(){
    console.log('Conectado al servidor');
});

// escuchar desde el servidor
socket.on('disconnect', function(){
    console.log('Perdimos conexion con el servidor');
});


// Enviar informacion al servidor
socket.emit('enviarMensaje', {
    usuario: 'Hugo',
    mensaje: 'Hola Mundo'
}, function( resp ){
    console.log('Respuesta server:', resp);
});

// Escucjando informacion del servidor
socket.on('enviarMensaje', function( mensaje  ){
    console.log('Servidor:', mensaje);
});

