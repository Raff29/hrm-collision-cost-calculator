# How the HRM Collision Cost Calculator Works

The HRM Collision Cost Calculator is designed to estimate the economic cost of motor vehicle collisions in the Halifax Regional Municipality using a methodology based on the 2018 CRISP Collision Cost Study. Our approach divides collision-related costs into three main categories:

Direct Costs: These are the tangible expenses directly linked to a collision – including vehicle repair costs, emergency services, medical treatment, legal fees, travel delay, and lost work time.

Human Capital Costs: These represent the future lost productivity to society resulting from injuries or fatalities. They are calculated as the discounted present value of a collision victim’s future net production (i.e., the difference between expected future earnings and consumption).

Willingness-to-Pay (WTP) Costs: These values capture the monetary amount that society is willing to invest to reduce the risk of injuries or fatalities, based on trade-off studies and risk assessments.

Our per-collision cost estimates were originally derived from the Capital Region (Alberta) study and then adjusted for inflation (+20.84%) using Statistics Canada data. In addition, to address underreporting of injuries (such as concussions or minor injuries that may initially go unrecorded), the number of reported injury collisions in the HRM dataset is multiplied by a factor of 1.78. The additional injuries estimated by this multiplier are subtracted from the total property-damage–only (PDO) collisions to avoid double counting.

By combining these adjusted collision counts from the HRM dataset with the per-collision cost estimates below, the calculator provides an overall annual economic impact estimate for HRM.

Estimated Cost per Collision (Inflation-Adjusted)
Collision Type    Direct Costs ($)    Human Capital Costs ($)    Willingness-to-Pay Costs ($)
Injury Collision    48,341    89,408    158,654
Fatal Collision    225,558    2,224,580    6,707,228
Property Damage Only    14,065    0    0
Note: These estimates have been adjusted for inflation (+20.84% from the original 2018 values).

Methodology Overview
Data Integration:
 • We use collision frequency data from the HRM open data API.
 • Reported injury collisions are multiplied by 1.78 to correct for underreporting. The additional injuries calculated are then deducted from PDO collisions to ensure each incident is counted only once.

Cost Calculation:
 • The number of collisions in each category (injury, fatal, and PDO) is multiplied by the corresponding per-collision cost estimates shown above.
 • These three cost components (Direct, Human Capital, and WTP) are then summed to generate a total cost estimate.

Sensitivity Analysis:
 • Users can adjust key parameters such as the injury underreporting multiplier and the inflation adjustment rate to see how these factors affect the overall cost estimates.

By using this calculator, stakeholders can better understand the economic burden of collisions in HRM and support the development of road safety initiatives and policies.