import { Server } from "socket.io";
import 'dotenv/config';

const io = new Server({
  cors: {
    origin: process.env.CLIENT_URL,
   
  },
});

let onlineUser = [];

const addUser = (userId, socketId) => {
  const userExists = onlineUser.find((user) => user.userId === userId);
  if (!userExists) {
    onlineUser.push({ userId, socketId });
  }
};

const removeUser = (socketId) => {
  onlineUser = onlineUser.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return onlineUser.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Add user when they connect
  socket.on("newUser", (userId) => {
    addUser(userId, socket.id);
    console.log("Online users:", onlineUser);
  });

  // Handle message sending
  socket.on("sendMessage", ({ receiverId, data }) => {
    const receiver = getUser(receiverId);
    if (receiver) {
      io.to(receiver.socketId).emit("getMessage", data);
    } else {
      console.log(`User with ID ${receiverId} is not online`);
      // Optionally, handle storing unsent messages, or notify sender.
    }
  });

  // Remove user when they disconnect
  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
    removeUser(socket.id);
    console.log("Online users after disconnect:", onlineUser);
  });
});

// Start the server on the specified port
io.listen(process.env.PORT || 4000);

