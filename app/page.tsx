import AboutCalculation from "@/components/AboutCalculation";
import CollisionDataProvider from "@/components/CollisionDataProvider";

export default function Home() {
  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-hrm-blue">
          HRM Vehicle Collision Cost Estimator
        </h1>
        <CollisionDataProvider />
        <AboutCalculation />
      </div>
    </main>
  );
}
