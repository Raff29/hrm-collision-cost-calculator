"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function EstimatorForm() {
  const [formData, setFormData] = useState({
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    damageType: "",
    damageExtent: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement cost calculation logic
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="vehicleMake">Vehicle Make</Label>
        <Input id="vehicleMake" name="vehicleMake" value={formData.vehicleMake} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="vehicleModel">Vehicle Model</Label>
        <Input id="vehicleModel" name="vehicleModel" value={formData.vehicleModel} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="vehicleYear">Vehicle Year</Label>
        <Input
          id="vehicleYear"
          name="vehicleYear"
          type="number"
          value={formData.vehicleYear}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="damageType">Type of Damage</Label>
        <Select onValueChange={handleSelectChange("damageType")}>
          <SelectTrigger>
            <SelectValue placeholder="Select damage type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="frontBumper">Front Bumper</SelectItem>
            <SelectItem value="rearBumper">Rear Bumper</SelectItem>
            <SelectItem value="sideDoor">Side Door</SelectItem>
            <SelectItem value="windshield">Windshield</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="damageExtent">Extent of Damage</Label>
        <Select onValueChange={handleSelectChange("damageExtent")}>
          <SelectTrigger>
            <SelectValue placeholder="Select damage extent" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="minor">Minor</SelectItem>
            <SelectItem value="moderate">Moderate</SelectItem>
            <SelectItem value="severe">Severe</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit">Calculate Estimate</Button>
    </form>
  )
}

