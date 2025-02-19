export default function ResultsDisplay() {
  return (
    <div className="mt-8 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Estimated Repair Cost</h2>
      <p className="text-3xl font-bold">$0.00</p>
      <p className="mt-2 text-sm text-gray-600">
        This is an estimate based on average repair costs in HRM. Actual costs may vary.
      </p>
    </div>
  )
}

