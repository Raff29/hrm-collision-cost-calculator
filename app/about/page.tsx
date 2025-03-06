import {
  Info,
  ArrowLeft,
  Calculator,
  AlertTriangle,
  DollarSign,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { aboutContent } from "../content/about";

export default function AboutPage() {
  return (
    <main className="flex-grow">
      <div className="bg-gradient-to-r from-hrm-blue to-hrm-accent text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Link href="/">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/20 p-0 mr-4"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Calculator
              </Button>
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold flex items-center">
            <Info className="h-8 w-8 mr-3" />
            {aboutContent.hero.title}
          </h1>
          <p className="mt-4 text-white/80 max-w-3xl">
            {aboutContent.hero.subtitle}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-hrm-blue mb-6 flex items-center">
              <Calculator className="h-6 w-6 mr-2" />
              {aboutContent.howItWorks.title}
            </h2>

            <p className="mb-6 text-gray-700 leading-relaxed">
              {aboutContent.howItWorks.description}
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              {aboutContent.howItWorks.categories.map((category, index) => (
                <Card
                  key={index}
                  className={`border-l-4 ${
                    index % 2 === 0 ? "border-hrm-blue" : "border-hrm-accent"
                  }`}
                >
                  <CardContent className="pt-6">
                    <h3
                      className={`font-semibold ${
                        index % 2 === 0 ? "text-hrm-blue" : "text-hrm-accent"
                      }  text-lg mb-2 flex items-cente`}
                    >
                      {index === 0 && <DollarSign className="h-5 w-5 mr-2" />}
                      {index === 1 && <Users className="h-5 w-5 mr-2" />}
                      {index === 2 && (
                        <AlertTriangle className="h-5 w-5 mr-2" />
                      )}
                      {category.title}
                    </h3>
                    <p className="text-gray-700">{category.description}.</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-hrm-light p-6 rounded-lg my-8">
              <p className="text-gray-700 leading-relaxed">
                {aboutContent.howItWorks.adjustmentInfo}
              </p>
            </div>

            <p className="mb-6 text-gray-700 leading-relaxed">
              {aboutContent.howItWorks.conclusion}
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-12" id="cost-table">
            <h2 className="text-2xl font-bold text-hrm-blue mb-6">
              {aboutContent.costTable.title}
            </h2>
            <p className="mb-4 text-gray-700">
              {aboutContent.costTable.description}
            </p>

            <div className="overflow-x-auto bg-white rounded-lg border shadow-sm my-6">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-semibold w-1/4">
                      Collision Type
                    </TableHead>
                    <TableHead className="text-right font-semibold">
                      Direct Costs ($)
                    </TableHead>
                    <TableHead className="text-right font-semibold">
                      Human Capital Costs ($)
                    </TableHead>
                    <TableHead className="text-right font-semibold">
                      Willingness-to-Pay Costs ($)
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {aboutContent.costTable.data.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{row.type}</TableCell>
                      <TableCell className="text-right">{row.direct}</TableCell>
                      <TableCell className="text-right">
                        {row.humanCapital}
                      </TableCell>
                      <TableCell className="text-right">{row.wtp}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div
              className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-md"
              role="alert"
            >
              <p className="text-sm text-gray-700">
                <span className="font-medium">Note:</span>{" "}
                {aboutContent.costTable.note}
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-hrm-blue mb-6">
              {aboutContent.methodology.title}
            </h2>

            <div className="space-y-8">
              {aboutContent.methodology.sections.map((section, index) => (
                <div key={index} className="bg-white rounded-lg border p-6">
                  <h3 className="text-lg font-semibold text-hrm-accent mb-4">
                    {section.title}
                  </h3>
                  <ul className="list-disc list-inside space-y-3 text-gray-700">
                    {section.points.map((point, i) => (
                      <li key={i} className="pl-2">
                        {point}{" "}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <div className="bg-hrm-light p-6 rounded-lg mt-8">
            <p className="text-gray-700 leading-relaxed">
              {aboutContent.finalNote}
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link href="/">
              <Button className="bg-hrm-blue hover:bg-hrm-accent">
                Return to Calculator
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
