import { Feature } from "geojson";

const HRM_API_ENDPOINT =
  "https://services2.arcgis.com/11XBiaBYA9Ep0yNJ/arcgis/rest/services/Traffic_Collisions/FeatureServer/0/query";

interface CollisionAttributes {
  COLLISION_SK: number;
  CASE_FILE_NUMBER: number;
  WGS84_LAT_COORD: string;
  WGS84_LON_COORD: string;
  ROAD_LOCATION_1: string;
  ROAD_LOCATION_2: string;
  // COLLISION_CONFIGURATION: string;
  NON_FATAL_INJURY: string;
  FATAL_INJURY: string;
  PEDESTRIAN_COLLISIONS: string;
  BICYCLE_COLLISIONS: string;
  ACCIDENT_DATETIME: number;
}

export interface CollisionFeature extends Feature {
  attributes: CollisionAttributes;
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
}

interface CollisionResponse {
  features: CollisionFeature[];
  geometryType: string;
  spatialReference: {
    wkid: number;
    latestWkid: number;
  };
}

export interface BoundingBox {
  north: number;
  south: number;
  east: number;
  west: number;
}

export interface CollisionResult {
  count: number;
  collisions: CollisionFeature[];
}

export interface NonAutoCollisions {
  pedestrian: number;
  bike: number;
}

export function nonVehicleCollisionsData(
  collisionData: CollisionFeature[]
): NonAutoCollisions {
  const collisionCount: NonAutoCollisions = { pedestrian: 0, bike: 0 };
  for (const collision of collisionData) {
    if (collision.attributes.PEDESTRIAN_COLLISIONS === "Y") {
      collisionCount.pedestrian += 1;
    } else if (collision.attributes.BICYCLE_COLLISIONS === "Y") {
      collisionCount.bike += 1;
    } else {
      continue;
    }
  }
  return collisionCount;
}

export async function fetchCollisionsData(
  boundingBox: BoundingBox
): Promise<CollisionResult> {
  const { north, south, east, west } = boundingBox;

  const geometry = {
    xmin: west,
    ymin: south,
    xmax: east,
    ymax: north,
    spatialReference: { wkid: 4326 },
  };

  const paramsData: Record<string, string> = {
    where: "1=1",
    outFields:
      "COLLISION_SK,CASE_FILE_NUMBER,WGS84_LAT_COORD,WGS84_LON_COORD,ROAD_LOCATION_1,ROAD_LOCATION_2,ROAD_CONFIGURATION,COLLISION_CONFIGURATION,NON_FATAL_INJURY,FATAL_INJURY,PEDESTRIAN_COLLISIONS,BICYCLE_COLLISIONS,ACCIDENT_DATETIME",
    outSR: "4326",
    f: "json",
    geometry: JSON.stringify(geometry),
    geometryType: "esriGeometryEnvelope",
    spatialRel: "esriSpatialRelIntersects",
    returnCountOnly: "false",
    resultRecordCount: "20000",
  };

  const params = new URLSearchParams(paramsData);

  try {
    const response = await fetch(`${HRM_API_ENDPOINT}?${params}`);
    if (!response.ok) throw new Error("Network response was not ok");
    const data: CollisionResponse = await response.json();
    return {
      count: data.features.length,
      collisions: data.features,
    };
  } catch (error) {
    console.error("Error fetching collision data in bounding box:", error);
    throw error;
  }
}
