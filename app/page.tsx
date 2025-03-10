import CollisionDataProvider from "@/components/CollisionDataProvider";

export default function Home() {
  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-8">
        <CollisionDataProvider />
      </div>
    </main>
  );
}
