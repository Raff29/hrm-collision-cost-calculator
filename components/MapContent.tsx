"use client";

import { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import DrawMap from "./DrawMap";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import L from "leaflet";
import "leaflet-draw";
import {
  BoundingBox,
  fetchCollisionsData,
  nonVehicleCollisionsData,
} from "@/lib/services/collisionService";
import YearSelector from "./YearSelector";
import {
  CollisionCostData,
  calculateCollisionCostData,
} from "@/lib/services/costCalculationService";
import { useSnackbar } from "../hooks/use-toast";
import UnderReportingToggle from "./UnderReportingToggle";
import InstructionBanner from "./InstructionBAnner";

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function MapContent({
  onYearChange,
  onCollisionDataChange,
}: {
  onYearChange?: (year: number) => void;
  onCollisionDataChange?: (costData: CollisionCostData) => void;
}) {
  const bounds = L.latLngBounds([
    [44.45, -64.3],
    [45.05, -63.0],
  ]);
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  );
  const [currentBoundingBox, setCurrentBoundingBox] =
    useState<BoundingBox | null>(null);

  const { showError, showWarning } = useSnackbar();
  const [applyUnderReportingFactor, setApplyUnderReportingFactor] =
    useState<boolean>(true);

  const handleRectangleDrawn = async (
    boundingBox: BoundingBox,
    yearOverride?: number,
    underReportingOverride?: boolean
  ) => {
    try {
      setCurrentBoundingBox(boundingBox);

      const result = await fetchCollisionsData(boundingBox);

      const filterYear =
        yearOverride !== undefined ? yearOverride : selectedYear;

      let yearFiltered = result.collisions || [];
      if (filterYear && yearFiltered.length > 0) {
        yearFiltered = yearFiltered.filter((collision) => {
          const collisionDate = new Date(
            collision.attributes.ACCIDENT_DATETIME
          );
          return collisionDate.getFullYear() === filterYear;
        });
      }

      const today = new Date();
      const finalCollisions = yearFiltered.filter((collision) => {
        const collisionDate = new Date(collision.attributes.ACCIDENT_DATETIME);
        return collisionDate <= today;
      });

      const nonAutoData = nonVehicleCollisionsData(finalCollisions);

      const useUnderReporting =
        underReportingOverride !== undefined
          ? underReportingOverride
          : applyUnderReportingFactor;

      const costData = calculateCollisionCostData(
        finalCollisions,
        nonAutoData.pedestrian,
        nonAutoData.bike,
        useUnderReporting
      );

      if (onCollisionDataChange) {
        onCollisionDataChange(costData);
      }
      if (finalCollisions.length === 0) {
        showWarning("No collisions found");
      }
    } catch (error) {
      if (error instanceof Error) {
        showError(error.message);
      } else {
        showError(String(error) || "An unknown error occurred");
      }
    }
  };

  const handleYearClick = (year: number) => {
    setSelectedYear(year);
    if (onYearChange) {
      onYearChange(year);
    }

    if (currentBoundingBox) {
      handleRectangleDrawn(currentBoundingBox, year);
    }
  };

  return (
    <div>
      <YearSelector onYearChange={handleYearClick} initialYear={selectedYear} />

      <UnderReportingToggle
        checked={applyUnderReportingFactor}
        onToggle={(checked) => {
          setApplyUnderReportingFactor(checked);
          if (currentBoundingBox) {
            handleRectangleDrawn(currentBoundingBox, selectedYear, checked);
          }
        }}
      />
      <InstructionBanner />
      <MapContainer
        center={[44.6488, -63.5752]}
        zoom={13}
        scrollWheelZoom={true}
        className="h-[400px] w-full z-10 relative"
        minZoom={10}
        maxBounds={bounds}
        maxBoundsViscosity={1.0}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <DrawMap onRectangleDrawn={handleRectangleDrawn} />
      </MapContainer>
    </div>
  );
}
