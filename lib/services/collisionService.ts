import { Feature, FeatureCollection } from 'geojson';

const HRM_API_ENDPOINT = 'https://services2.arcgis.com/11XBiaBYA9Ep0yNJ/arcgis/rest/services/Traffic_Collisions/FeatureServer/0/query';

interface CollisionAttributes {
  COLLISION_SK: string;
  CASE_FILE_NUMBER: string;
  WGS84_LAT_COORD: number;
  WGS84_LON_COORD: number;
  ROAD_LOCATION_1: string;
  ROAD_LOCATION_2: string;
  ROAD_CONFIGURATION: string;
  COLLISION_CONFIGURATION: string;
  NON_FATAL_INJURY: number;
  FATAL_INJURY: number;
  PEDESTRIAN_COLLISIONS: number;
  BICYCLE_COLLISIONS: number;
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

export async function fetchCollisions() {
  const params = new URLSearchParams({
    where: '1=1',
    outFields: 'COLLISION_SK,CASE_FILE_NUMBER,WGS84_LAT_COORD,WGS84_LON_COORD,ROAD_LOCATION_1,ROAD_LOCATION_2,ROAD_CONFIGURATION,COLLISION_CONFIGURATION,NON_FATAL_INJURY,FATAL_INJURY,PEDESTRIAN_COLLISIONS,BICYCLE_COLLISIONS',
    outSR: '4326',
    f: 'json'
  });

  try {
    const response = await fetch(`${HRM_API_ENDPOINT}?${params}`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data: CollisionResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching collision data:', error);
    throw error;
  }
}