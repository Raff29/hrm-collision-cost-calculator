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
  ROAD_CONFIGURATION: string;
  COLLISION_CONFIGURATION: string;
  NON_FATAL_INJURY: string;
  FATAL_INJURY: string;
  PEDESTRIAN_COLLISIONS: string;
  BICYCLE_COLLISIONS: string;
  ACCIDENT_DATETIME: number;
}

interface CollisionFeature extends Feature {
  attributes: CollisionAttributes;
  geometry: {
    x: number;
    y: number;
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

export async function fetchCollisions(
  sortByYear: boolean = false,
  filterYear?: number,
  resultOffset: number = 0,
  resultRecordCount: number = 20000
) {
  let whereClause = "1=1";

  const paramsData: Record<string, string> = {
    where: whereClause,
    outFields:
      "COLLISION_SK,CASE_FILE_NUMBER,WGS84_LAT_COORD,WGS84_LON_COORD,ROAD_LOCATION_1,ROAD_LOCATION_2,ROAD_CONFIGURATION,COLLISION_CONFIGURATION,NON_FATAL_INJURY,FATAL_INJURY,PEDESTRIAN_COLLISIONS,BICYCLE_COLLISIONS,ACCIDENT_DATETIME",
    outSR: "4326",
    f: "json",
    resultOffset: resultOffset.toString(),
    resultRecordCount: resultRecordCount.toString(),
  };

  if (typeof filterYear === "number") {
    const startEpoch = new Date(filterYear, 0, 1).getTime();
    const endEpoch = new Date(filterYear, 11, 31, 23, 59, 59, 999).getTime();
    paramsData.time = `${startEpoch},${endEpoch}`;
  }

  if (sortByYear) {
    paramsData.orderByFields = "ACCIDENT_DATETIME DESC";
  }

  const params = new URLSearchParams(paramsData);

  try {
    const response = await fetch(`${HRM_API_ENDPOINT}?${params}`);
    if (!response.ok) throw new Error("Network response was not ok");
    const data: CollisionResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching collision data:", error);
    throw error;
  }
}
