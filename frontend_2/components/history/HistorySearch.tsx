interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export default function HistorySearch({
  search,
  setSearch,
}: Props) {
  return (
    <input
      type="text"
      placeholder="Search Previous Questions..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}