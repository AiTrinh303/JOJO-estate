import {Server} from "socket.io";
import 'dotenv/config';

const io = new Server({
    cors: {
      origin: "http://localhost:5555",
    },
  });
  
io.on("connection", (socket) => {
    console.log(socket);
});

io.listen(process.env.PORT || 4000);

io.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});)