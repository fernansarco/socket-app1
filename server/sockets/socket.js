const { io } = require('../server');

io.on('connection', (client) => {
    console.log("Usuario conectado");

    //Escucha informacion al cliente
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido Administrador'
    });

    client.on('disconnect', () => {
        console.log("Usuario Desconectado");
    });

    //Escucha del cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {

        //     callback({
        //         resp: 'TODO SALIO BIEN'
        //     });
        // } else {

        //     callback({
        //         resp: 'TODO SALIO MAL'
        //     });
        // }

    });
});