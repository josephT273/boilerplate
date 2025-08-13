import {
  Card, CardContent, CardHeader,
  CardTitle
} from "@/components/ui/card";
import { modulesStatus } from "@/lib/data";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-2 gap-4">
        <Card className="m-0 p-0 min-h-40 overflow-hidden rounded gap-0">
          <iframe
            className="w-full h-full"
            title="Kaspersky Cyber Threat Map"
            src="https://cybermap.kaspersky.com/en/widget/dynamic/dark?lang=en&theme=light&width=100%25&height=100%25&showLegend=true&showControls=true&showTimeSlider=true&showSearch=true&showFilter=true"
          >
            {" "}
          </iframe>
        </Card>
        <div className="grid grid-rows-2 gap-4">
          <Card className="m-0 p-0 min-h-40 overflow-hidden rounded gap-0">
            <CardHeader className="bg-green-300/20 p-3 m-0 gap-0">
              <CardTitle>Agent Rank XP</CardTitle>
            </CardHeader>
            <CardContent className="bg-green-950/40 m-0 p-0 h-full grid grid-cols-3">
              <div className="h-full grid justify-center items-center grid-rows-3 ">
                <Image
                  src="/favicon.ico"
                  width={80}
                  height={80}
                  alt="avatar"
                  className="row-span-2"
                />
                <div className="text-center w-full  text-white rows-span-1">
                  1200/1500 XP
                </div>
              </div>
              <div className="h-full border-l-2 col-span-2"></div>
            </CardContent>
          </Card>

          <Card className="m-0 p-0 min-h-40 overflow-hidden rounded gap-0">
            <CardContent className="bg-green-300/10 h-full p-0 m-0">
              <div className="h-full col-span-2">

                <Table>
                  <TableHeader className="bg-green-300/20">
                    <TableRow>
                      <TableHead>#</TableHead>
                      <TableHead>Module</TableHead>
                      <TableHead>Load</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {modulesStatus.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-4 text-muted-foreground">
                          No deposits found.
                        </TableCell>
                      </TableRow>
                    )}
                    {modulesStatus.map((module, index) => (
                      <TableRow key={index}>
                        <TableCell>#{index + 1}</TableCell>
                        <TableCell>{module.module}</TableCell>
                        <TableCell>{module.load}</TableCell>
                        <TableCell>{module.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
