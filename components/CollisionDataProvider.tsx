"use client"

import { useState } from 'react';
import MapWithNoSRR from "./MapWithNoSRR";
import CostAnalysis from './CostAnalysis';
import { CollisionCostData } from '@/lib/services/costCalculationService';

export default function CollisionDataProvider() {
    const [collisionData, setCollisionData] = useState<CollisionCostData| null>(null);
    const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());

    const handleCollisionDataChange = (data: CollisionCostData) => {
        setCollisionData(data);
    };

    const handleYearChange = (year: number) => {
        setSelectedYear(year);
    };

    return (
        <>
        <MapWithNoSRR
        onCollisionDataChange={handleCollisionDataChange}
        onYearChange={handleYearChange}
        />
        <CostAnalysis year={selectedYear} costData={collisionData} />
        </>
    )

}