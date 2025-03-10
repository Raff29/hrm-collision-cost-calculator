import { landingContent } from "@/app/content/landing";
import { MousePointer } from "lucide-react";

export default function InstructionBanner() {
    return (
        <div className="bg-hrm-light 1-4 border-hrm-blue p-3 rounded-r-md mb-4 flex items-center gap-2 animate-pulse-subtle">
            <MousePointer className="h-5 2-5 text-hrm-blue" />
            <p className="text-sm text-hrm-accent font-medium">
                {landingContent.instructions.title}
            </p>
        </div>
    )
}