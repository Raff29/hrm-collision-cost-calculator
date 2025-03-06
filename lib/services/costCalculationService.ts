import { CollisionFeature } from "../services/collisionService";

export interface CostBreakdown {
  directCosts: number;
  humanCapitalCosts: number;
  willignessToPay: number;
  totalCosts: number;
}

export enum CollisionSeverity {
  INJURY = "Injury",
  FATALITY = "Fatality",
  PROPERTY_DAMAGE_ONLY = "Property Damage Only",
}

function calculateTotalCost(costs: Omit<CostBreakdown, "totalCosts">): number {
  return costs.directCosts + costs.humanCapitalCosts + costs.willignessToPay;
}

export const COLLISION_COSTS: Record<CollisionSeverity, CostBreakdown> = {
  [CollisionSeverity.INJURY]: {
    directCosts: 48341,
    humanCapitalCosts: 89408,
    willignessToPay: 158654,
    get totalCosts() {
      return calculateTotalCost(this);
    },
  },
  [CollisionSeverity.FATALITY]: {
    directCosts: 225558,
    humanCapitalCosts: 2224580,
    willignessToPay: 6707228,
    get totalCosts() {
      return calculateTotalCost(this);
    },
  },
  [CollisionSeverity.PROPERTY_DAMAGE_ONLY]: {
    directCosts: 14065,
    humanCapitalCosts: 0,
    willignessToPay: 0,
    get totalCosts() {
      return calculateTotalCost(this);
    },
  },
};

export function determineSeverity(
  collision: CollisionFeature
): CollisionSeverity {
  if (collision.attributes.FATAL_INJURY === "YES") {
    return CollisionSeverity.FATALITY;
  } else if (
    collision.attributes.NON_FATAL_INJURY === "YES" ||
    collision.attributes.PEDESTRIAN_COLLISIONS === "Y" ||
    collision.attributes.BICYCLE_COLLISIONS === "Y"
  ) {
    return CollisionSeverity.INJURY;
  } else {
    return CollisionSeverity.PROPERTY_DAMAGE_ONLY;
  }
}

export type CostType = keyof CostBreakdown;

export function calculateCollisionCost(
  collision: CollisionFeature,
  costType: CostType = "totalCosts"
): number {
  const severity = determineSeverity(collision);
  return COLLISION_COSTS[severity][costType];
}

export function calculateTotalCollisionCost(
  collisions: CollisionFeature[],
  costType: CostType = "totalCosts"
): number {
  let totalCost = 0;
  for (const collision of collisions) {
    totalCost += calculateCollisionCost(collision, costType);
  }
  return totalCost;
}

export function calculateCostsBySeverity(
  collisions: CollisionFeature[],
  costType: CostType = "totalCosts"
): Record<CollisionSeverity, number> {
  const result: Record<CollisionSeverity, number> = {
    [CollisionSeverity.FATALITY]: 0,
    [CollisionSeverity.INJURY]: 0,
    [CollisionSeverity.PROPERTY_DAMAGE_ONLY]: 0,
  };

  for (const collision of collisions) {
    const severity = determineSeverity(collision);
    result[severity] += COLLISION_COSTS[severity][costType];
  }

  return result;
}

export interface CollisionCostData {
  collisionsPerYear: {
    total: number;
    directCosts: number;
    humanCapitalCosts: number;
    willignessToPay: number;
    pedestrian: number;
    bike: number;
  };
  costPerDay: {
    total: number;
    directCosts: number;
    humanCapitalCosts: number;
    willignessToPay: number;
  };
}

export function calculateCollisionCostData(
  collisions: CollisionFeature[],
  pedestrianCount: number,
  bikeCount: number
): CollisionCostData {
  const severityCounts = {
    [CollisionSeverity.FATALITY]: 0,
    [CollisionSeverity.INJURY]: 0,
    [CollisionSeverity.PROPERTY_DAMAGE_ONLY]: 0,
  };

  for (const collision of collisions) {
    const severity = determineSeverity(collision);
    severityCounts[severity]++;
  }
  console.log("Collision severity counts:", severityCounts);

  const totalDirectCosts = calculateTotalCollisionCost(
    collisions,
    "directCosts"
  );
  const totalHumanCapitalCosts = calculateTotalCollisionCost(
    collisions,
    "humanCapitalCosts"
  );

  console.log("Human capital costs:", totalHumanCapitalCosts);

  const totalWillingnessToPay = calculateTotalCollisionCost(
    collisions,
    "willignessToPay"
  );
  console.log("willignessToPay", totalWillingnessToPay);

  const totalCosts = calculateTotalCollisionCost(collisions, "totalCosts");

  const daysInYear = 365;

  return {
    collisionsPerYear: {
      total: collisions.length,
      directCosts: totalDirectCosts,
      humanCapitalCosts: totalHumanCapitalCosts,
      willignessToPay: totalWillingnessToPay,
      pedestrian: pedestrianCount,
      bike: bikeCount,
    },
    costPerDay: {
      total: Math.round(totalCosts / daysInYear),
      directCosts: Math.round(totalDirectCosts / daysInYear),
      humanCapitalCosts: Math.round(totalHumanCapitalCosts / daysInYear),
      willignessToPay: Math.round(totalWillingnessToPay / daysInYear),
    },
  };
}
