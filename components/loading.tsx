import { landingContent } from "@/app/content/landing";

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white to-hrm-light">
      <div className="flex-grow flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div
            className="w-16 h-16 border-4 border-hrm-blue border-t-hrm-accent rounded-full animate-spin"
            role="progressbar"
            aria-label={landingContent.loading.title}
            aria-valuetext={landingContent.loading.title}
          ></div>
          <p className="mt-4 text-hrm-blue font-medium">
            {landingContent.loading.title}
          </p>
        </div>
      </div>
    </div>
  );
}
