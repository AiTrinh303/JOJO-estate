import { useGlobalContext } from '../../context/AiContext';
import './chatBot.scss'
import { MdOutlineScheduleSend } from "react-icons/md";


const Title = () => {
    return (
      <div className='title-header'>
        <div className='title-left'>
          <div className='title-image'>
            <img src="./robot.png" alt="AI" />
          </div>
          <p>AI Assistant</p>
        </div>
      </div>
    )
} 

const Body = () => {
    const { messages, processing, lastMsg } = useGlobalContext();
    return (
        <div className="body-container">
            {messages.map((msg, index) => (
        <div
          className={`body-message ${
            msg.from === "ai" ? 'mLeft ': 'mRight'
          }`}
          key={index}
        >
          {msg.from === "ai" ? (
            <div>
              <div className='image'>
                <img src='./robot.png' alt="AI" />
              </div>
            </div>
          ) : (
            ""
          )}
          
          <p>{msg.text}</p>
          {msg.from !== "ai" ? (
            <div>
              <div className='image'>
                <img src='./noavatar.jpg' alt="user" />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ))}

      {processing ? (
        <div className='typing'>
          <div className='dot' />
          <div className='dot' />
          <div className='dot' />
        </div>
      ) : (
        ""
      )}
      <div ref={lastMsg} />
        </div>
    )
}

const InputBar = () => {
      const { messageText, setMessageText, handleSubmission } = useGlobalContext();
    return (
        <div className='input-container'>
         <input
            placeholder="Type here..."
            value={messageText}
            onChange={(event) => setMessageText(event.target.value)}
            onKeyUp={(event) => (event.key === "Enter" ? handleSubmission() : "")}
        />
         <div className="input-btn" onClick={handleSubmission}>
            <div className='input-icon'>
                <MdOutlineScheduleSend />
            </div>
         </div>        
        </div>
    )    
}

const ChatBot = () => {
  return (
    <div className='chatbot-container'>
        <Title />
        <Body />
        <InputBar />
    </div>
  )
}

export default ChatBot