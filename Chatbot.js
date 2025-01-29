import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Navigation from "../components/Navigation"
import './Chatbot.css'

export default function Chatbot() {
  const navigate = useNavigate()
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (!isLoggedIn) {
      navigate("/")
    }
    // Initial bot message
    setMessages([{ text: "Hello! How can I assist you today?", sender: "bot" }])
  }, [navigate])

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }])
      setInput("")

      // Simulate bot response
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: "I'm processing your request. Please wait.", sender: "bot" }])
      }, 1000)
    }
  }

  return (
    <div className="body">
      <Navigation />
      <div className="container">
        <div className="chat-container">
          <h2>Chatbot</h2>
          <div className="message-container">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender === "user" ? "message-user" : "message-bot"}`}>
                <div
                  className={`message-box ${message.sender === "user" ? "user-message" : "bot-message"}`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <div className="input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              className="input-field"
            />
            <button onClick={handleSend} className="button">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
