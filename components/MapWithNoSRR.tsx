"use client";

import dynamic from 'next/dynamic';
import { CollisionCostData } from '@/lib/services/costCalculationService';

interface MapProps {
  onYearChange? : (year: number) => void;
  onCollisionDataChange?: (costData: CollisionCostData) => void;
}

const MapWithNoSSR = dynamic(
  () => import('./MapContent'),
  { 
    ssr: false,
    loading: () => <div className="h-[400px] bg-gray-100 flex justify-center items-center w-full">Loading Map...</div>
  }
);

export default function Map({ onYearChange, onCollisionDataChange}: MapProps) {
  return (
    <div className="relative w-full mb-8 overflow-hidden z-10">
      <MapWithNoSSR 
      onYearChange={onYearChange}
      onCollisionDataChange={onCollisionDataChange}
      />
    </div>
  );
}