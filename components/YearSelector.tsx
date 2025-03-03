"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function YearSelector({ onYearChange }: { onYearChange: (year: number) => void }) {
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())
  const [years, setYears] = useState<number[]>([])

  useEffect(() => {
    // Generate years from 2020 to current year
    const currentYear = new Date().getFullYear()
    const yearArray = []
    for (let year = 2020; year <= currentYear; year++) {
      yearArray.push(year)
    }
    setYears(yearArray)

    // Set the current year as default
    setSelectedYear(currentYear)
    onYearChange(currentYear)
  }, [onYearChange])

  const handleYearClick = (year: number) => {
    setSelectedYear(year)
    onYearChange(year)
  }

  return (
    <div className="w-full bg-white border-b border-hrm-blue shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <h2 className="text-hrm-blue font-medium">Select Year:</h2>
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {years.map((year) => (
              <Button
                key={year}
                variant={selectedYear === year ? "default" : "outline"}
                className={
                  selectedYear === year
                    ? "bg-hrm-blue hover:bg-hrm-accent"
                    : "border-hrm-blue text-hrm-blue hover:bg-hrm-light"
                }
                onClick={() => handleYearClick(year)}
              >
                {year}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

