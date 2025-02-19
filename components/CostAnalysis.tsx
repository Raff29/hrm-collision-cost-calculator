"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Users, TrendingUp, AlertTriangle } from "lucide-react"

export default function CostAnalysis() {
  const costData = {
    collisionsPerYear: {
      total: 1000,
      directCost: 500000,
      humanCapital: 750000,
      willingnessToPay: 1000000,
    },
    costPerDay: {
      total: 2740,
      directCost: 1370,
      humanCapital: 2055,
      willingnessToPay: 2740,
    },
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(amount)
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-hrm-blue to-hrm-accent text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Collisions per Year</CardTitle>
            <AlertTriangle className="h-4 w-4 opacity-70" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{costData.collisionsPerYear.total}</div>
            <p className="text-xs opacity-70">Total reported incidents</p>
          </CardContent>
        </Card>
        <Card className="bg-white border-l-4 border-hrm-blue">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-hrm-blue">Total Annual Cost</CardTitle>
            <DollarSign className="h-4 w-4 text-hrm-blue" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-hrm-accent">
              {formatCurrency(
                costData.collisionsPerYear.directCost +
                  costData.collisionsPerYear.humanCapital +
                  costData.collisionsPerYear.willingnessToPay,
              )}
            </div>
            <p className="text-xs text-gray-500">Combined economic impact</p>
          </CardContent>
        </Card>
        <Card className="bg-white border-l-4 border-hrm-accent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-hrm-accent">Human Capital Cost</CardTitle>
            <Users className="h-4 w-4 text-hrm-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-hrm-blue">
              {formatCurrency(costData.collisionsPerYear.humanCapital)}
            </div>
            <p className="text-xs text-gray-500">Annual productivity loss</p>
          </CardContent>
        </Card>
        <Card className="bg-white border-l-4 border-hrm-accent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-hrm-accent">Willingness to Pay</CardTitle>
            <TrendingUp className="h-4 w-4 text-hrm-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-hrm-blue">
              {formatCurrency(costData.collisionsPerYear.willingnessToPay)}
            </div>
            <p className="text-xs text-gray-500">Value of safety improvements</p>
          </CardContent>
        </Card>
      </div>
      <Card className="bg-hrm-light">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-hrm-blue">Daily Cost Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-hrm-accent">Total Daily Cost:</span>
              <span className="text-lg font-bold text-hrm-blue">{formatCurrency(costData.costPerDay.total)}</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Direct Cost:</span>
                <span className="font-medium text-hrm-accent">{formatCurrency(costData.costPerDay.directCost)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Human Capital:</span>
                <span className="font-medium text-hrm-accent">{formatCurrency(costData.costPerDay.humanCapital)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Willingness to Pay:</span>
                <span className="font-medium text-hrm-accent">
                  {formatCurrency(costData.costPerDay.willingnessToPay)}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

