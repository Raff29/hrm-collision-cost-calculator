export const landingContent = {
  header: {
    title: "HRM Vehicle Collision Cost Estimator",
    fields: {
        home: "Home",
        about: "About"
    },
  },
  tooltip: {
      title: "Apply injury under-reporting factor (1.78x)",
      description: "Applies a factor of 1.78x to injury collisions to account for under-reporting in official statistics."
  },
  instructions: {
    title: "Click the rectangle button in the top-left corner, then click and drag on the map to select an area for collision analysis",
    icon: "MapPin"
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
  },
  footer: {
    title: "Developed by Raphael Pinto"
  },
  loading: {
    title: "Loading collision data..."
  }
}