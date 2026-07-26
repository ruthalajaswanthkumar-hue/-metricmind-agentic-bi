export default function ProfileCard() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-4">
        <img
          src="https://via.placeholder.com/80"
          alt="Profile"
          className="w-20 h-20 rounded-full"
        />

        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            John Doe
          </h2>

          <p className="text-orange-600">
            john@example.com
          </p>

          <p className="text-blue-600 font-medium">
            Admin
          </p>
        </div>
      </div>
    </div>
  );
}