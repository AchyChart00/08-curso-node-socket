const socketController = (socket) => {
  console.log("cliente conectado", socket.id);

  socket.on("disconnect", () => {
    console.log("cliente desconectado", socket.id);
  });

  //Mensaje que se recibe en el servidor
  socket.on("enviar-mensaje", (payload, callback) => {
    const id = 12345689;

    callback({ id, fecha: new Date().getTime() });

    /* console.log(payload); */

    //enviar mensaje a todos los clientes
    //se usa la palabra broadcast para enviar a todos 
    socket.broadcast.emit("enviar-mensaje", payload);
  });
};

module.exports = {
  socketController,
};
