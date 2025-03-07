"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DollarSign,
  Users,
  TrendingUp,
  AlertTriangle,
  Bike,
  PersonStanding,
} from "lucide-react";
import { CollisionCostData } from "@/lib/services/costCalculationService";

export default function CostAnalysis({
  year,
  costData: providedCostData,
}: {
  year?: number;
  costData?: CollisionCostData | null;
}) {
  const defaultCostData: CollisionCostData = {
    collisionsPerYear: {
      total: 0,
      directCosts: 0,
      humanCapitalCosts: 0,
      willignessToPay: 0,
      pedestrian: 0,
      bike: 0,
    },
    costPerDay: {
      total: 0,
      directCosts: 0,
      humanCapitalCosts: 0,
      willignessToPay: 0,
    },
  };

  const [costData, setCostData] = useState<CollisionCostData>(defaultCostData);
  const [loading, setLoading] = useState(false);
  const displayYear = year || new Date().getFullYear();

  useEffect(() => {
    if (providedCostData) {
      setLoading(true);
      setTimeout(() => {
        setCostData(providedCostData);
        setLoading(false);
      }, 300);
    }
  }, [providedCostData]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
    }).format(amount);
  };

  const getPercentageValue = (part: number, total: number): number => {
    if (!total) return 0;
    const percentage = (part / total) * 100;
    return percentage
  }

  const getPercentage = (part: number, total: number) : string => {
    if (!total) return "0%";
    const percentage = (part / total) * 100;
    if (percentage < 1) {
      return percentage.toFixed(1) + "%";
    }
    return Math.round(percentage) + "%";
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-hrm-blue to-hrm-accent text-white relative">
          {loading && (
            <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center rounded-lg z-10">
              <div className="w-6 h-6 border-2 border-hrm-blue border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Collisions in {displayYear}
            </CardTitle>
            <AlertTriangle className="h-4 w-4 opacity-70" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {costData.collisionsPerYear.total}
            </div>
            <p className="text-xs opacity-70">Total reported incidents</p>
          </CardContent>
        </Card>
        <Card className="bg-white border-l-4 border-hrm-blue relative">
          {loading && (
            <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center rounded-lg z-10">
              <div className="w-6 h-6 border-2 border-hrm-blue border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-hrm-blue">
              Total Annual Cost
            </CardTitle>
            <DollarSign className="h-4 w-4 text-hrm-blue" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-hrm-accent">
              {formatCurrency(
                costData.collisionsPerYear.directCosts +
                  costData.collisionsPerYear.humanCapitalCosts +
                  costData.collisionsPerYear.willignessToPay
              )}
            </div>
            <p className="text-xs text-gray-500">Combined economic impact</p>
          </CardContent>
        </Card>
        <Card className="bg-white border-l-4 border-hrm-accent relative">
          {loading && (
            <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center rounded-lg z-10">
              <div className="w-6 h-6 border-2 border-hrm-blue border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-hrm-accent">
              Human Capital Cost
            </CardTitle>
            <Users className="h-4 w-4 text-hrm-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-hrm-blue">
              {formatCurrency(costData.collisionsPerYear.humanCapitalCosts)}
            </div>
            <p className="text-xs text-gray-500">Annual productivity loss</p>
          </CardContent>
        </Card>
        <Card className="bg-white border-l-4 border-hrm-accent relative">
          {loading && (
            <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center rounded-lg z-10">
              <div className="w-6 h-6 border-2 border-hrm-blue border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-hrm-accent">
              Willingness to Pay
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-hrm-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-hrm-blue">
              {formatCurrency(costData.collisionsPerYear.willignessToPay)}
            </div>
            <p className="text-xs text-gray-500">
              Value of safety improvements
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white border-l-4 border-hrm-blue relative">
          {loading && (
            <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center rounded-lg z-10">
              <div className="w-6 h-6 border-2 border-hrm-blue border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-hrm-blue">
              Pedestrian Collisions
            </CardTitle>
            <PersonStanding className="h-4 w-4 text-hrm-blue" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-hrm-accent">
              {costData.collisionsPerYear.pedestrian}
            </div>
            <p className="text-xs text-gray-500">
              Incidents involving pedestrians
            </p>
            <div className="mt-2 h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-hrm-blue rounded-full"
                style={{
                  width: `${getPercentageValue(
                    costData.collisionsPerYear.pedestrian,
                    costData.collisionsPerYear.total
                  )}%`,
                }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {getPercentage(
                costData.collisionsPerYear.pedestrian,
                costData.collisionsPerYear.total
              )}
              {" of total collisions"}
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white border-l-4 border-hrm-accent relative">
          {loading && (
            <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center rounded-lg z-10">
              <div className="w-6 h-6 border-2 border-hrm-blue border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-hrm-accent">
              Bicycle Collisions
            </CardTitle>
            <Bike className="h-4 w-4 text-hrm-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-hrm-blue">
              {costData.collisionsPerYear.bike}
            </div>
            <p className="text-xs text-gray-500">
              Incidents involving cyclists
            </p>
            <div className="mt-2 h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-hrm-accent rounded-full"
                style={{
                  width: `${getPercentageValue(
                    costData.collisionsPerYear.bike,
                    costData.collisionsPerYear.total
                  )}%`,
                }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {getPercentage(
                costData.collisionsPerYear.bike,
                costData.collisionsPerYear.total
              )}
              {" of total collisions"}
            </p>
          </CardContent>
        </Card>
      </div>
      <Card className="bg-hrm-light relative">
        {loading && (
          <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center rounded-lg z-10">
            <div className="w-6 h-6 border-2 border-hrm-blue border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-hrm-blue">
            Daily Cost Breakdown ({displayYear})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-hrm-accent">
                Total Daily Cost:
              </span>
              <span className="text-lg font-bold text-hrm-blue">
                {formatCurrency(costData.costPerDay.total)}
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Direct Cost:</span>
                <span className="font-medium text-hrm-accent">
                  {formatCurrency(costData.costPerDay.directCosts)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Human Capital:</span>
                <span className="font-medium text-hrm-accent">
                  {formatCurrency(costData.costPerDay.humanCapitalCosts)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Willingness to Pay:</span>
                <span className="font-medium text-hrm-accent">
                  {formatCurrency(costData.costPerDay.willignessToPay)}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
