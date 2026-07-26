import {
  FaRobot,
  FaChartLine,
  FaFileAlt,
  FaTachometerAlt,
} from "react-icons/fa";

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10">
        <div className="p-6 border rounded-lg shadow text-center">
          <FaRobot className="text-4xl text-blue-600 mx-auto mb-4" />
          <h3 className="font-semibold">AI Analytics</h3>
        </div>

        <div className="p-6 border rounded-lg shadow text-center">
          <FaChartLine className="text-4xl text-blue-600 mx-auto mb-4" />
          <h3 className="font-semibold">Charts</h3>
        </div>

        <div className="p-6 border rounded-lg shadow text-center">
          <FaFileAlt className="text-4xl text-blue-600 mx-auto mb-4" />
          <h3 className="font-semibold">Reports</h3>
        </div>

        <div className="p-6 border rounded-lg shadow text-center">
          <FaTachometerAlt className="text-4xl text-blue-600 mx-auto mb-4" />
          <h3 className="font-semibold">Dashboard</h3>
        </div>
      </div>
    </section>
  );
}