"use client";

import { FaPaperPlane } from "react-icons/fa";

interface InputProps {
  message: string;
  setMessage: (value: string) => void;
  sendMessage: () => void;
  loading: boolean;
}

export default function ChatInput({
  message,
  setMessage,
  sendMessage,
  loading,
}: InputProps) {


  function handleKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>
  ) {

    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }

  }


  return (

    <div className="flex items-center gap-3">


      <input

        value={message}

        onChange={(e) =>
          setMessage(e.target.value)
        }

        onKeyDown={handleKeyDown}

        disabled={loading}

        placeholder={
          loading
            ? "MetricMind AI is thinking..."
            : "Ask your business question..."
        }

        className="
        flex-1
        rounded-xl
        border
        border-gray-300
        bg-gray-50
        p-3
        text-gray-900
        outline-none
        transition

        focus:border-blue-500
        focus:ring-2
        focus:ring-blue-200

        disabled:cursor-not-allowed
        disabled:opacity-50

        dark:border-gray-600
        dark:bg-slate-800
        dark:text-white
        "

      />



      <button

        onClick={sendMessage}

        disabled={
          !message.trim() || loading
        }

        className="
        flex
        h-12
        w-12
        items-center
        justify-center

        rounded-xl

        bg-blue-600
        text-white

        transition

        hover:bg-blue-700
        hover:scale-105

        disabled:cursor-not-allowed
        disabled:opacity-50
        "

      >

        <FaPaperPlane />

      </button>


    </div>

  );
}
