export default function Features() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-semibold text-center mb-12">Features</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">AI Insights</h3>
          <p className="text-gray-400">
            Get smart insights instantly from your data.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Dashboards</h3>
          <p className="text-gray-400">
            Interactive and visual dashboards.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Real-time Data</h3>
          <p className="text-gray-400">
            Monitor performance in real time.
          </p>
        </div>
      </div>
    </section>
  );
}