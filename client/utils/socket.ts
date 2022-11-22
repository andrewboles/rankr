import { SetStateAction } from "react";
import openSocket from "socket.io-client";
let socket

// export const subscribeToTimer = ( interval: Number, cb: (arg0: SetStateAction<string>) => void) => {
//     socket.on('timer', timestamp => cb(timestamp))
//     socket.emit('subscribeToTimer', interval);
// }

export const connectToSocket = () => {
  socket =  openSocket("http://localhost:8080");
  socket.on("connect", () => console.log("connected to socket"));
  socket.on("status", (status) => {
    console.log(status);
  });
  socket.on("update", (status) => {
    console.log(status);
  });
};

export const disconnectFromSocket = ()=> {
    socket.disconnect()
}
