"use client";

import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(
  () => import('./MapContent'),
  { 
    ssr: false,
    loading: () => <div className="h-[400px] bg-gray-100 flex justify-center items-center w-full">Loading Map...</div>
  }
);

export default function Map() {
  return (
    <div className="relative h-[400px] w-full mb-8 overflow-hidden z-10">
      <MapWithNoSSR />
    </div>
  );
}