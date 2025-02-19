import MapPlaceholder from "@/components/MapPlaceholder";
import CostAnalysis from "@/components/CostAnalysis";
import AboutCalculation from "@/components/AboutCalculation";

export default function Home() {
  return (
    <main className="flex-grow">
      <MapPlaceholder />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-hrm-blue">
          HRM Vehicle Collision Cost Estimator
        </h1>
        <CostAnalysis />
        <AboutCalculation />
      </div>
    </main>
  );
}
