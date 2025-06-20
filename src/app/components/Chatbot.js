// components/Chatbot.js
import { useState } from "react";
import styles from "./Chatbot.module.css";

const Chatbot = () => {
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");

  const toggleChatbot = () => setIsChatVisible(!isChatVisible);

  const closeChatbot = () => setIsChatVisible(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userMessage.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "You", message: userMessage },
      ]);
      setUserMessage("");

      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "Bot", message: "This is a bot response." },
        ]);
      }, 1000);
    }
  };

  return (
    <>
      <div
        className={styles.chatbotIcon}
        onClick={toggleChatbot}
      >
        <i className="fas fa-comments"></i>
      </div>

      {isChatVisible && (
        <div className={styles.chatbot}>
          <div className={styles.chatHeader}>
            <h2>Chatbot</h2>
            <button onClick={closeChatbot}>
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className={styles.chatWindow}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${styles.message} ${msg.sender === "You" ? styles.userMessage : styles.botMessage}`}
              >
                <div>
                  <span className={styles.sender}>{msg.sender}</span>
                  <span>{msg.message}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.chatForm}>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="Type your message..."
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
