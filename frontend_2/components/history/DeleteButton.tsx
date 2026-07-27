interface Props {
  onClick: () => void;
}

export default function DeleteButton({
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
    >
      Delete
    </button>
  );
}