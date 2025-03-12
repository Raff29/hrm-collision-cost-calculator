import DrawMap from "@/components/DrawMap";
import { cleanup, render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { Control } from "leaflet";
import { useMapEvent } from "react-leaflet";

jest.mock("leaflet-draw", () => {});
jest.mock("leaflet-draw/dist/leaflet.draw.css", () => ({}));

const mockMap = {
  addControl: jest.fn(),
  removeControl: jest.fn(),
  addLayer: jest.fn(),
  removeLayer: jest.fn(),
  on: jest.fn(),
  off: jest.fn(),
};

const mockDrawCreatedEvent = {
  layer: {
    getBounds: () => ({
      getNorth: () => 45.5,
      getSouth: () => 44.5,
      getEast: () => -73.5,
      getWest: () => -74.5,
    }),
    addTo: jest.fn(),
    remove: jest.fn(),
  },
  layerType: "rectangle",
};

const mockDrawControl = {
  addTo: jest.fn(),
  remove: jest.fn(),
};

jest.mock("leaflet", () => {
  return {
    Control: {
      Draw: jest.fn().mockImplementation(() => mockDrawControl),
    },
    _esModule: false,
    default: {
      Control: {
        Draw: jest.fn().mockImplementation(() => mockDrawControl),
      },
    },
  };
});

jest.mock("react-leaflet", () => ({
  useMap: () => mockMap,
  useMapEvent: jest.fn(),
}));

const mockCurrentLayerRef = { current: null };
jest.spyOn(React, "useRef").mockReturnValue(mockCurrentLayerRef);

const MapWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="map-container">{children}</div>;
};

function renderDrawMap(props = {}) {
  return render(
    <MapWrapper>
      <DrawMap {...props} />
    </MapWrapper>
  );
}

describe("DrawMap Components", () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
    mockCurrentLayerRef.current = null;
  });
  it("initializes with leaftlet draw controls", () => {
    renderDrawMap();

    expect(jest.mocked(Control.Draw)).toHaveBeenCalledWith({
      draw: {
        polyline: false,
        polygon: false,
        circle: false,
        marker: false,
        circlemarker: false,
        rectangle: {},
      },
    });

    expect(mockMap.addControl).toHaveBeenCalledWith(mockDrawControl);
  });

  it("sets up event listener for draw function", () => {
    renderDrawMap();

    expect(mockMap.on).toHaveBeenCalledWith(
      "draw:created",
      expect.any(Function)
    );
  });

  it("calls onRectangleDrawn callback with correct bounding box", () => {
    const onRectangleDrawn = jest.fn();

    renderDrawMap({ onRectangleDrawn });

    const drawCreatedHandler = mockMap.on.mock.calls.find(
      (call) => call[0] === "draw:created"
    )[1];

    drawCreatedHandler(mockDrawCreatedEvent);

    expect(onRectangleDrawn).toHaveBeenCalledWith({
      north: 45.5,
      south: 44.5,
      east: -73.5,
      west: -74.5,
    });
  });

  it('removes precious rectangle from drawing new one', () => {
    
  })
});
