import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Info } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AboutCalculation() {
  return (
    <Card className="mt-8 bg-white border-t-4 border-hrm-blue">
      <CardHeader className="flex flex-row items-center space-x-2">
        <Info className="h-5 w-5 text-hrm-blue" />
        <CardTitle className="text-xl font-semibold text-hrm-blue">About the Calculation</CardTitle>
      </CardHeader>
      <CardContent className="prose prose-slate max-w-none">
        <h2 className="text-xl font-bold text-hrm-accent mt-2 mb-4">How the HRM Collision Cost Calculator Works</h2>

        <p className="mb-4">
          The HRM Collision Cost Calculator is designed to estimate the economic cost of motor vehicle collisions in the
          Halifax Regional Municipality using a methodology based on the 2018 CRISP Collision Cost Study. Our approach
          divides collision-related costs into three main categories:
        </p>

        <p className="mb-2 font-medium text-hrm-blue">Direct Costs:</p>
        <p className="mb-4 pl-4">
          These are the tangible expenses directly linked to a collision – including vehicle repair costs, emergency
          services, medical treatment, legal fees, travel delay, and lost work time.
        </p>

        <p className="mb-2 font-medium text-hrm-blue">Human Capital Costs:</p>
        <p className="mb-4 pl-4">
          These represent the future lost productivity to society resulting from injuries or fatalities. They are
          calculated as the discounted present value of a collision victim's future net production (i.e., the difference
          between expected future earnings and consumption).
        </p>

        <p className="mb-2 font-medium text-hrm-blue">Willingness-to-Pay (WTP) Costs:</p>
        <p className="mb-4 pl-4">
          These values capture the monetary amount that society is willing to invest to reduce the risk of injuries or
          fatalities, based on trade-off studies and risk assessments.
        </p>

        <p className="mb-6">
          Our per-collision cost estimates were originally derived from the Capital Region (Alberta) study and then
          adjusted for inflation (+20.84%) using Statistics Canada data. In addition, to address underreporting of
          injuries (such as concussions or minor injuries that may initially go unrecorded), the number of reported
          injury collisions in the HRM dataset is multiplied by a factor of 1.78. The additional injuries estimated by
          this multiplier are subtracted from the total property-damage–only (PDO) collisions to avoid double counting.
        </p>

        <p className="mb-4">
          By combining these adjusted collision counts from the HRM dataset with the per-collision cost estimates below,
          the calculator provides an overall annual economic impact estimate for HRM.
        </p>

        <h3 className="text-lg font-semibold text-hrm-blue mt-6 mb-3">
          Estimated Cost per Collision (Inflation-Adjusted)
        </h3>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Collision Type</TableHead>
                <TableHead className="text-right font-semibold">Direct Costs ($)</TableHead>
                <TableHead className="text-right font-semibold">Human Capital Costs ($)</TableHead>
                <TableHead className="text-right font-semibold">Willingness-to-Pay Costs ($)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Injury Collision</TableCell>
                <TableCell className="text-right">48,341</TableCell>
                <TableCell className="text-right">89,408</TableCell>
                <TableCell className="text-right">158,654</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Fatal Collision</TableCell>
                <TableCell className="text-right">225,558</TableCell>
                <TableCell className="text-right">2,224,580</TableCell>
                <TableCell className="text-right">6,707,228</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Property Damage Only</TableCell>
                <TableCell className="text-right">14,065</TableCell>
                <TableCell className="text-right">0</TableCell>
                <TableCell className="text-right">0</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-sm text-gray-600 italic mt-2 mb-6">
          Note: These estimates have been adjusted for inflation (+20.84% from the original 2018 values).
        </p>

        <h3 className="text-lg font-semibold text-hrm-blue mt-6 mb-3">Methodology Overview</h3>

        <p className="mb-2 font-medium">Data Integration:</p>
        <ul className="list-disc list-inside mb-4 pl-4 space-y-1">
          <li>We use collision frequency data from the HRM open data API.</li>
          <li>
            Reported injury collisions are multiplied by 1.78 to correct for underreporting. The additional injuries
            calculated are then deducted from PDO collisions to ensure each incident is counted only once.
          </li>
        </ul>

        <p className="mb-2 font-medium">Cost Calculation:</p>
        <ul className="list-disc list-inside mb-4 pl-4 space-y-1">
          <li>
            The number of collisions in each category (injury, fatal, and PDO) is multiplied by the corresponding
            per-collision cost estimates shown above.
          </li>
          <li>
            These three cost components (Direct, Human Capital, and WTP) are then summed to generate a total cost
            estimate.
          </li>
        </ul>

        <p className="mb-2 font-medium">Sensitivity Analysis:</p>
        <ul className="list-disc list-inside mb-4 pl-4 space-y-1">
          <li>
            Users can adjust key parameters such as the injury underreporting multiplier and the inflation adjustment
            rate to see how these factors affect the overall cost estimates.
          </li>
        </ul>

        <p className="mt-4">
          By using this calculator, stakeholders can better understand the economic burden of collisions in HRM and
          support the development of road safety initiatives and policies.
        </p>
      </CardContent>
    </Card>
  )
}

