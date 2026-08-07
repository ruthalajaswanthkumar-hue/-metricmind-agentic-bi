 "use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";

import api from "@/lib/api";

import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import AIResponse from "./AIResponse";
import TypingAnimation from "./TypingAnimation";

type Message = {
  sender: "user" | "ai";
  text?: string;
  dashboard?: any;
};

export default function ChatBox() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: `👋 Hello! I'm MetricMind AI.

I can help you analyze:

📊 Revenue & Sales
📈 Business Trends
👥 Customer Insights
🌎 Regional Performance

Ask me anything about your business data.`,
    },
  ]);

  const suggestions = [
    "📊 Show monthly revenue analysis",
    "📈 Analyze sales trends",
    "🌎 Compare regional performance",
    "👥 Find top customers",
  ];

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);


  async function sendMessage() {
    if (!message.trim() || loading) return;

    const currentMessage = message;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: currentMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await api.post("/chat", {
        question: currentMessage,
      });

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          dashboard: response.data,
        },
      ]);

    } catch (error) {
      console.error("Chat API Error:", error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "⚠️ Unable to connect with MetricMind AI server.",
        },
      ]);

    } finally {
      setLoading(false);
    }
  }


  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="mx-auto max-w-5xl"
    >

      {/* AI Header */}

      <div
        className="
        mb-6
        flex
        items-center
        gap-4
        rounded-3xl
        bg-gradient-to-r
        from-blue-600
        to-indigo-600
        p-6
        text-white
        shadow-xl
        "
      >
        <div
          className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-white/20
          text-3xl
          "
        >
          <FaRobot />
        </div>

        <div>
          <h1 className="text-2xl font-bold sm:text-3xl">
            MetricMind AI Assistant
          </h1>

          <p className="text-sm text-blue-100 sm:text-base">
            Ask business questions and receive AI-powered insights.
          </p>
        </div>

      </div>


      {/* Chat Window */}

      <div
        className="
        overflow-hidden
        rounded-3xl
        border
        border-gray-200
        bg-white
        shadow-2xl
        transition-all
        duration-300
        dark:border-gray-700
        dark:bg-slate-900
        "
      >

        {/* Messages */}

        <div
          className="
          h-[65vh]
          overflow-y-auto
          scroll-smooth
          p-5
          sm:p-8
          "
        >

          {messages.map((msg, index) =>

            msg.sender === "user" ? (

              <MessageBubble
                key={index}
                text={msg.text}
                sender="user"
              />

            ) : msg.dashboard ? (

              <AIResponse
                key={index}
                dashboard={msg.dashboard}
              />

            ) : (

              <MessageBubble
                key={index}
                text={msg.text}
                sender="ai"
              />

            )

          )}


          {loading && <TypingAnimation />}


          <div ref={bottomRef} />


          {/* Suggestions */}

          {messages.length === 1 && (

            <div className="mt-6">

              <p
                className="
                mb-3
                text-sm
                text-gray-500
                dark:text-gray-400
                "
              >
                Try asking:
              </p>


              <div className="flex flex-wrap gap-3">

                {suggestions.map((item, index) => (

                  <button
                    key={index}
                    onClick={() =>
                      setMessage(item.replace(/^[^\w]+/, ""))
                    }
                    className="
                    rounded-full
                    border
                    border-blue-200
                    bg-blue-50
                    px-4
                    py-2
                    text-sm
                    text-blue-700
                    transition
                    hover:bg-blue-100
                    hover:scale-105
                    dark:border-blue-800
                    dark:bg-slate-800
                    dark:text-blue-300
                    "
                  >
                    {item}
                  </button>

                ))}

              </div>

            </div>

          )}

        </div>



        {/* Input */}

        <div
          className="
          sticky
          bottom-0
          border-t
          border-gray-200
          bg-white
          p-4
          sm:p-6
          dark:border-gray-700
          dark:bg-slate-900
          "
        >

          <ChatInput
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
            loading={loading}
          />

        </div>


      </div>


    </motion.div>
  );
}
