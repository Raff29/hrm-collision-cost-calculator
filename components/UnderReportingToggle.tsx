"use client"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { InfoIcon as InfoCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { landingContent } from "@/app/content/landing"

interface UnderReportingToggleProps {
  checked: boolean
  onToggle: (checked: boolean) => void
}

export default function UnderReportingToggle({ checked, onToggle }: UnderReportingToggleProps) {
  return (
    <div className="flex items-center justify-between bg-white p-3 rounded-md shadow-sm border mb-4">
      <div className="flex items-center gap-2">
        <Label htmlFor="under-reporting-toggle" className="text-sm font-medium text-gray-700 cursor-pointer">
          {landingContent.tooltip.title}
        </Label>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <InfoCircle className="h-4 w-4 text-hrm-blue cursor-help" />
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">
                {landingContent.tooltip.description}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <Switch id="under-reporting-toggle" checked={checked} onCheckedChange={onToggle} />
    </div>
  )
}

