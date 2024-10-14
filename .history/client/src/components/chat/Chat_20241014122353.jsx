import { useContext, useRef, useState } from "react";
import { format } from "timeago.js";
import "./chat.scss";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";
import { SocketContext } from "../../context/SocketContext";

function Chat({chats}) {
  const [chat, setChat] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);

  const messageEndRef = useRef();

  const handleOpenChat = async (id, receiver) => {
    try {
      const res = await apiRequest("/chats/" + id);
      // if (!res.data.seenBy.includes(currentUser.id)) {
      //   decrease();
      // }
      setChat({ ...res.data, receiver });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const text = formData.get("text");

    if (!text) return;
    try {
      const res = await apiRequest.post("/messages/" + chat.id, { text });
      setChat((prev) => ({ ...prev, messages: [...prev.messages, res.data] }));
      e.target.reset();
      // socket.emit("sendMessage", {
      //   receiverId: chat.receiver.id,
      //   data: res.data,
      // });
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   const read = async () => {
  //     try {
  //       await apiRequest.put("/chats/read/" + chat.id);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   if (chat && socket) {
  //     socket.on("getMessage", (data) => {
  //       if (chat.id === data.chatId) {
  //         setChat((prev) => ({ ...prev, messages: [...prev.messages, data] }));
  //         read();
  //       }
  //     });
  //   }
  //   return () => {
  //     socket.off("getMessage");
  //   };
  // }, [socket, chat]);

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        {chats?.map((chat) => (
          <div
            className="message"
            key={chat.id}
            style={{
              backgroundColor:
                chat.seenBy.includes(currentUser.id) || chat?.id === chat.id
                  ? "white"
                  : "#fecd514e",
            }}
            onClick={() => handleOpenChat(chat.id, chat.receiver)}
          >
            <img src={chat.receiver.avatar || "/noavatar.jpg"} alt="avatar" />
            <span>{chat.receiver.username}</span>
            <p>{chat.lastMessage}</p>
          </div>
        ))}
      </div>  
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src={chat.receiver.avatar || "noavatar.jpg"} alt="" />
              {chat.receiver.username}
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            {chat.messages.map((message) => (
              <div
                className="chatMessage"
                style={{
                  alignSelf:
                    message.userId === currentUser.id
                      ? "flex-end"
                      : "flex-start",
                  textAlign:
                    message.userId === currentUser.id 
                      ? "right" 
                      : "left",
                }}
                key={message.id}
              >
                <p>{message.text}</p>
                <span>{format(message.createdAt)}</span>
              </div>
            ))}
            <div ref={messageEndRef}></div>
          </div>
          <form onSubmit={handleSubmit} className="bottom">
            <textarea name="text"></textarea>
            <button>Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Chat;
