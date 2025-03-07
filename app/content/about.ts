export const aboutContent = {
  hero: {
    title: "About the HRM Collision Cost Calculator",
    subtitle: "Understanding the methodology and data behind our collision cost estimates"
  },
  howItWorks: {
    title: "How the HRM Collision Cost Calculator Works",
    description: "The HRM Collision Cost Calculator is designed to estimate the economic cost of motor vehicle collisions in the Halifax Regional Municipality using a methodology based on the 2018 CRISP Collision Cost Study. Our approach divides collision-related costs into three main categories:",
    categories: [
      {
        title: "Direct Costs",
        description: "These are the tangible expenses directly linked to a collision – including vehicle repair costs, emergency services, medical treatment, legal fees, travel delay, and lost work time."
      },
      {
        title: "Human Capital Costs",
        description: "These represent the future lost productivity to society resulting from injuries or fatalities. They are calculated as the discounted present value of a collision victim's future net production (i.e., the difference between expected future earnings and consumption)."
      },
      {
        title: "Willingness-to-Pay Costs",
        description: "These values capture the monetary amount that society is willing to invest to reduce the risk of injuries or fatalities, based on trade-off studies and risk assessments."
      }
    ],
    adjustmentInfo: "Our per-collision cost estimates were originally derived from the Capital Region (Alberta) study and then adjusted for inflation (+20.84%) using Statistics Canada data. In addition, to address underreporting of injuries (such as concussions or minor injuries that may initially go unrecorded), the number of reported injury collisions in the HRM dataset is multiplied by a factor of 1.78. The additional injuries estimated by this multiplier are subtracted from the total property-damage–only (PDO) collisions to avoid double counting.",
    conclusion: "By combining these adjusted collision counts from the HRM dataset with the per-collision cost estimates below, the calculator provides an overall annual economic impact estimate for HRM."
  },
  costTable: {
    title: "Estimated Cost per Collision",
    description: "The following table shows the inflation-adjusted cost estimates used in our calculations:",
    note: "These estimates have been adjusted for inflation (+20.84% from the original 2018 values).",
    data: [
      {
        type: "Injury Collision",
        direct: "48,341",
        humanCapital: "89,408",
        wtp: "158,654"
      },
      {
        type: "Fatal Collision",
        direct: "225,558",
        humanCapital: "2,224,580",
        wtp: "6,707,228"
      },
      {
        type: "Property Damage Only",
        direct: "14,065",
        humanCapital: "0",
        wtp: "0"
      }
    ]
  },
  methodology: {
    title: "Methodology Overview",
    sections: [
      {
        title: "Data Integration",
        points: [
          "We use collision frequency data from the HRM open data API.",
          "Reported injury collisions are multiplied by 1.78 to correct for underreporting. The additional injuries calculated are then deducted from PDO collisions to ensure each incident is counted only once."
        ]
      },
      {
        title: "Cost Calculation",
        points: [
          "The number of collisions in each category (injury, fatal, and PDO) is multiplied by the corresponding per-collision cost estimates shown above.",
          "These three cost components (Direct, Human Capital, and WTP) are then summed to generate a total cost estimate."
        ]
      },
      {
        title: "Sensitivity Analysis",
        points: [
          "Users can adjust key parameters such as the injury underreporting multiplier and the inflation adjustment rate to see how these factors affect the overall cost estimates."
        ]
      }
    ]
  },
  finalNote: "By using this calculator, individuals can better understand the economic burden of collisions in HRM and support the development of road safety initiatives and policies."
};