import {Server} from "socket.io";

const io = new Server({
    cors: {
      origin: "http://localhost:5555",
    },
  });
  
io.on("connection", (socket) => {
    console.log()  