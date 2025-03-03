"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import DrawMap from "./DrawMap";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import L from "leaflet";
import "leaflet-draw";
import {
  BoundingBox,
  fetchCollisionsInBoundingBox,
} from "@/lib/services/fetchCollisionsInBoundingBoxServices";

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function MapContent() {
  const bounds = L.latLngBounds([
    [44.45, -64.3],
    [45.05, -63.0],
  ]);

  const handleRectangleDrawn = async (boundingBox: BoundingBox) => {
    try {
      const result = await fetchCollisionsInBoundingBox(boundingBox);
      console.log("Collisions fetched:", result);
    } catch (error) {
      console.error("Error fetching collisions:", error);
    }
  };

  return (
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
  );
}
