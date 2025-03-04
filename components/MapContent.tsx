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
} from "@/lib/services/collisionService";
import YearSelector from "./YearSelector";

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
}: {
  onYearChange?: (year: number) => void;
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

  const handleRectangleDrawn = async (boundingBox: BoundingBox, yearOverride?: number) => {
    try {
      setCurrentBoundingBox(boundingBox);

      const result = await fetchCollisionsData(boundingBox);

      const filterYear = yearOverride !== undefined ? yearOverride : selectedYear

      let yearFiltered = result.collisions;
      if (filterYear) {
        yearFiltered = result.collisions.filter((collision) => {
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

      console.log("Collisions fetched:", {
        year: filterYear || "All Years",
        totalCount: result.count,
        filteredCount: finalCollisions.length,
        futureRecordsRemoved: result.count - finalCollisions.length,
        coordinates: boundingBox,
        sampleCollisionDate: finalCollisions[0]
          ? new Date(
              finalCollisions[0].attributes.ACCIDENT_DATETIME
            ).toLocaleString()
          : "No collisions found",
        sampleCollision: finalCollisions[0]?.attributes,
      });
    } catch (error) {
      console.error("Error fetching collisions:", error);
    } finally {
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
      <MapContainer
        center={[44.65, -63.57]}
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: "400px", width: "100%" }}
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
