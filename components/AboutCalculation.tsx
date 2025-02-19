import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Info } from "lucide-react"

export default function AboutCalculation() {
  return (
    <Card className="mt-8 bg-white border-t-4 border-hrm-blue">
      <CardHeader className="flex flex-row items-center space-x-2">
        <Info className="h-5 w-5 text-hrm-blue" />
        <CardTitle className="text-xl font-semibold text-hrm-blue">About the Calculation</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">
          Our collision cost estimates are based on comprehensive data analysis and consider various factors to provide
          a holistic view of the economic impact in Halifax Regional Municipality.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Historical collision data from HRM traffic reports</li>
          <li>Direct costs including property damage and medical expenses</li>
          <li>Human capital costs accounting for lost productivity and long-term care</li>
          <li>Willingness-to-pay estimates for improved road safety measures</li>
        </ul>
        <p className="mt-4 text-sm text-gray-600 italic">
          Note: These calculations are estimates and may not reflect the exact cost of individual collisions.
        </p>
      </CardContent>
    </Card>
  )
}

