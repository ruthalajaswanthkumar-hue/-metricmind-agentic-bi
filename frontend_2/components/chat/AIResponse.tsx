import MarkdownRenderer from "./MarkdownRenderer";

interface AIResponseProps {
  content: string;
}

export default function AIResponse({ content }: AIResponseProps) {
  return (
    <div className="w-full bg-gray-900 text-white rounded-xl p-4 shadow-md overflow-auto max-h-[500px]">
      <div className="flex items-start gap-3">
        <div className="text-2xl">🤖</div>

        <div className="flex-1">
          <MarkdownRenderer content={content} />
        </div>
      </div>
    </div>
  );
}
