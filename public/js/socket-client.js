//referencias html
const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");
const txtMensaje = document.querySelector("#txtMensaje");
const btnEnviar = document.querySelector("#btnEnviar");

//socket del cliente, el io() es lo que viene del path que importamos en index.html
const socket = io();

//escucho un evento, listener para saber si me conecto al servidor
socket.on("connect", () => {
  //console.log("Conectado");

  lblOffline.style.display = "none";
  lblOnline.style.display = "";
});

//escucho un evento, listener para saber si me conecto al servidor
socket.on("disconnect", () => {
  //console.log("desconectado del servidor");

  lblOffline.style.display = "";
  lblOnline.style.display = "none";
});

socket.on("enviar-mensaje", (payload) => {
  console.log(payload);
});

//Mensaje que se envia al socket-servidor
btnEnviar.addEventListener("click", () => {
  const mensaje = txtMensaje.value;
  const payload = {
    mensaje,
    id: "1234",
    fecha: new Date().getTime(),
  };

  //para emitir un evento
  socket.emit("enviar-mensaje", payload, (id) => {
    console.log("Desde el server", id);
  });
});
