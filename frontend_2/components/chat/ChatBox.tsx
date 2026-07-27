"use client";

import { useState } from "react";

import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import AIResponse from "./AIResponse";
import TypingAnimation from "./TypingAnimation";

type Message = {
  text: string;
  sender: "user" | "ai";
};

export default function ChatBox() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! Ask me your business question.",
      sender: "ai",
    },
  ]);

  function sendMessage() {
    if (!message.trim()) return;

    const userMessage: Message = {
      text: message,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);

    setMessage("");
    setLoading(true);

    setTimeout(() => {
      const aiMessage: Message = {
        text: `# Sales Report

Revenue increased **12%**.

## Top Products

- Laptop
- Mobile

\`\`\`sql
SELECT * FROM sales;
\`\`\`

| Product | Revenue |
|---------|---------|
| Laptop | ₹50,000 |
| Mobile | ₹30,000 |`,
        sender: "ai",
      };

      setMessages((prev) => [...prev, aiMessage]);

      setLoading(false);
    }, 1500);
  }

  return (
    <div className="max-w-3xl mx-auto bg-gray-200 p-5 rounded-xl">
      <h1 className="text-3xl font-bold text-black mb-5">
        AI Business Assistant
      </h1>

      <div className="bg-gray-100 h-[450px] overflow-y-auto p-4 rounded-lg">
        {messages.map((msg, index) =>
          msg.sender === "user" ? (
            <MessageBubble
              key={index}
              text={msg.text}
              sender={msg.sender}
            />
          ) : (
            <AIResponse
              key={index}
              content={msg.text}
            />
          )
        )}

        {loading && <TypingAnimation />}
      </div>

      <ChatInput
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </div>
  );
}
