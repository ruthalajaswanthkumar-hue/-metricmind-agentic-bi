"use client";

export default function TypingAnimation() {
  return (
    <div className="flex items-center gap-3 bg-gray-900 text-white p-4 rounded-xl w-fit">
      <span className="text-2xl">🤖</span>

      <div className="flex gap-1">
        <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
        <span
          className="w-2 h-2 bg-white rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></span>
        <span
          className="w-2 h-2 bg-white rounded-full animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></span>
      </div>

      <span className="text-sm text-gray-300">Thinking...</span>
    </div>
  );
}
