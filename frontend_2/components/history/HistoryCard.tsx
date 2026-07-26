import DeleteButton from "./DeleteButton";

interface HistoryItem {
  id: number;
  question: string;
  date: string;
}

interface Props {
  item: HistoryItem;
  onDelete: (id: number) => void;
}

export default function HistoryCard({
  item,
  onDelete,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 flex justify-between items-center">

      <div>
        <h2 className="font-semibold text-lg">
          {item.question}
        </h2>

        <p className="text-gray-500 text-sm">
          {item.date}
        </p>
      </div>

      <DeleteButton
        onClick={() => onDelete(item.id)}
      />

    </div>
  );
}