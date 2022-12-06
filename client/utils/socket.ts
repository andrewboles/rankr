import { SetStateAction } from "react";
import openSocket, { Socket } from "socket.io-client";
import { useStore } from "./zustand";

let socket: Socket
// export const subscribeToTimer = ( interval: Number, cb: (arg0: SetStateAction<string>) => void) => {
//     socket.on('timer', timestamp => cb(timestamp))
//     socket.emit('subscribeToTimer', interval);
// }

export const connectToSocket = (): void => {
  socket =  openSocket("http://localhost:8080");
  socket.on("connect", () => console.log("connected to socket"));
  socket.on("status", (status) => {
    console.log(status);
    useStore.setState({status})

  });
  socket.on("update", (status) => {
    console.log(status);
  });
};

export const disconnectFromSocket = (): void => {
    socket.disconnect()
}
