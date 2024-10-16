import './chatBot.scss'



const Title = () => {
    return (
        <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.image}>
            <img src={chatbot} alt="AI" />
          </div>
          <p>AI Assistant</p>
        </div>
      </div>
    </div>
    )
    }


const ChatBot = () => {
  return (
    <div className='chatbot-container'>
        <Title />
    </div>
  )
}

export default ChatBot
