"use client";

import { useMap } from "react-leaflet";
import "leaflet-draw/dist/leaflet.draw.css";
import L from "leaflet";
import "leaflet-draw";
import { useEffect, useRef } from "react";

type DrawCreatedEvent = L.LeafletEvent & {
  layer: L.Layer;
  layerType: string;
};

export default function DrawMap(): null {
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
      map.addLayer(layer);

      if (currentLayerRef.current) {
        map.removeLayer(currentLayerRef.current);
      }

      map.addLayer(layer);
      currentLayerRef.current = layer;
    };
    map.on("draw:created", handleDrawCreated);

    return () => {
      map.removeControl(drawControl);
      map.off("draw:created", handleDrawCreated);
    };
  }, [map]);

  return null;
}
