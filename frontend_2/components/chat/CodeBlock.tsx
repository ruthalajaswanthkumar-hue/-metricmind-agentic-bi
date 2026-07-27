"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  language: string;
  value: string;
}

export default function CodeBlock({
  language,
  value,
}: CodeBlockProps) {
  return (
    <div className="my-4 overflow-x-auto rounded-lg">
      <SyntaxHighlighter
        language={language}
        style={oneDark as { [key: string]: React.CSSProperties }}
        customStyle={{
          margin: 0,
          borderRadius: "0.5rem",
          fontSize: "14px",
        }}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  );
}
