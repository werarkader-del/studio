'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { progressReports } from '@/lib/placeholder-data';

const chartConfig = {
  score: {
    label: 'Score',
    color: 'hsl(var(--primary))',
  },
};

export default function ProgressPage() {
  return (
    <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
      {progressReports.map((report) => (
        <Card key={report.subject} className="animate-in fade-in">
          <CardHeader>
            <CardTitle>{report.subject}</CardTitle>
            <CardDescription>
              Your progress and current grade in {report.subject}.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[200px] w-full">
              <BarChart data={report.progress} accessibilityLayer>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis domain={[0, 100]} />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Bar dataKey="score" fill="var(--color-score)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter>
            <p className="text-lg font-bold">Current Grade: {report.grade}%</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
