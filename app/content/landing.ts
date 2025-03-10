export const landingContent = {
  instructions: {
    title: "Click the rectangle button in the top-right corner and drag on the map to select an area for collision analysis",
    icon: "MapPin" // You can use different icon names that match your Lucide icons
  },
  analysis: {
    title: "Collision Cost Analysis",
    description: "View the economic impact of traffic collisions in the selected area",
    cards: {
      collisions: {
        title: "Collisions",
        description: "Total reported incidents"
      },
      totalCost: {
        title: "Total Annual Cost",
        description: "Combined economic impact"
      },
      humanCapital: {
        title: "Human Capital Cost",
        description: "Annual productivity loss"
      },
      willingnessToPay: {
        title: "Willingness to Pay",
        description: "Value of safety improvements"
      },
      pedestrian: {
        title: "Pedestrian Collisions",
        description: "Incidents involving pedestrians"
      },
      bicycle: {
        title: "Bicycle Collisions",
        description: "Incidents involving cyclists"
      },
      dailyCost: {
        title: "Daily Cost Breakdown",
        fields: {
          totalDaily: "Total Daily Cost:",
          direct: "Direct Cost:",
          humanCapital: "Human Capital:",
          willingnessToPay: "Willingness to Pay:"
        }
      }
    }
  }
}