import { useState, useEffect, useRef } from "react";
import "../robo.css";
import roboLogo from "../assets/robo.png";

export default function RoboWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [pos, setPos] = useState({ x: 0, y: 0 }); // cursor position
  const roboRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Auto-scroll chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Track cursor position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX + 20, y: e.clientY + 20 }); // offset from cursor
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { text: input, from: "user" }]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "I’m your friendly robo assistant 🤖", from: "bot" },
      ]);
    }, 500);
    setInput("");
  };

  return (
    <div
      ref={roboRef}
      className="robo-container"
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
        zIndex: 1000,
      }}
    >
      {!open && (
        <button
          className="robo-toggle"
          onClick={() => setOpen(true)}
          title="Open Mini Robo"
        >
          <img src={roboLogo} alt="Robo" />
        </button>
      )}

      {open && (
        <div className="robo-chat">
          <div className="robo-header">
            <span>Mini Robo</span>
            <button className="close-btn" onClick={() => setOpen(false)}>
              ×
            </button>
          </div>

          <div className="robo-messages">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.from}`}>
                {m.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="robo-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
