"use client";

import { useMap } from "react-leaflet";
import "leaflet-draw/dist/leaflet.draw.css";
import L from "leaflet";
import "leaflet-draw";
import { useEffect, useRef } from "react";

type DrawCreatedEvent = L.LeafletEvent & {
  layer: L.Layer & {
    getBounds?: () => L.LatLngBounds;
  };
  layerType: string;
};

type BoundingBox = {
  north: number;
  south: number;
  east: number;
  west: number;
};

interface DrawMapProps {
  onRectangleDrawn?: (boundingBox: BoundingBox) => void;
}

export default function DrawMap({ onRectangleDrawn }: DrawMapProps = {}): null {
  const map = useMap();
  const currentLayerRef = useRef<L.Layer | null>(null);

  useEffect(() => {
    if (!map) return;

    const drawControl = new L.Control.Draw({
      draw: {
        polyline: false,
        polygon: false,
        circle: false,
        marker: false,
        circlemarker: false,
        rectangle: {},
      },
    });

    map.addControl(drawControl);

    const handleDrawCreated = (e: L.LeafletEvent) => {
      const drawEvent = e as DrawCreatedEvent;
      const layer = drawEvent.layer;

      if (currentLayerRef.current) {
        map.removeLayer(currentLayerRef.current);
      }

      map.addLayer(layer);
      currentLayerRef.current = layer;

      if (
        drawEvent.layerType === "rectangle" &&
        layer.getBounds &&
        onRectangleDrawn
      ) {
        const bounds = layer.getBounds();

        const boundingBox: BoundingBox = {
          north: bounds.getNorth(),
          south: bounds.getSouth(),
          east: bounds.getEast(),
          west: bounds.getWest(),
        };
        onRectangleDrawn(boundingBox);
      }
    };
    map.on("draw:created", handleDrawCreated);

    return () => {
      map.removeControl(drawControl);
      map.off("draw:created", handleDrawCreated);
    };
  }, [map, onRectangleDrawn]);

  return null;
}
