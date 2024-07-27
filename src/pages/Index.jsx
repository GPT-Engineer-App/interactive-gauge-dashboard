// Update this page (the content is just a fallback if you fail to update the page)

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { BarChart, LineChart, PieChart } from 'recharts';
import { LightbulbIcon, TargetIcon, WrenchIcon, SearchIcon } from 'lucide-react';

const Index = () => {
  const [gaugeValue, setGaugeValue] = useState(50);

  const data1 = [
    { name: 'Step 1', value: 25 * gaugeValue / 100 },
    { name: 'Step 2', value: 50 * gaugeValue / 100 },
    { name: 'Step 3', value: 75 * gaugeValue / 100 },
    { name: 'Step 4', value: 100 * gaugeValue / 100 },
  ];

  const data2 = [
    { name: 'Item 1', value: 30 * gaugeValue / 100 },
    { name: 'Item 2', value: 45 * gaugeValue / 100 },
    { name: 'Item 3', value: 60 * gaugeValue / 100 },
    { name: 'Item 4', value: 75 * gaugeValue / 100 },
  ];

  const data3 = [
    { name: 'Group A', value: 18 * gaugeValue / 100 },
    { name: 'Group B', value: 12 * gaugeValue / 100 },
    { name: 'Group C', value: 6 * gaugeValue / 100 },
  ];

  const data4 = [
    { name: 'Title 1', value: 40 * gaugeValue / 100 },
    { name: 'Title 2', value: 64 * gaugeValue / 100 },
    { name: 'Title 3', value: 72 * gaugeValue / 100 },
  ];

  return (
    <div className="min-h-screen bg-background p-8 relative">
      <h1 className="text-4xl font-bold text-center mb-8">Informational Data Dashboard</h1>
      <p className="text-center mb-8 text-muted-foreground">
        This interactive dashboard showcases various data visualizations that respond to the gauge controller.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        <Card>
          <CardHeader>
            <CardTitle>Data 1: Process Steps</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <div className="flex items-center space-x-4">
              {data1.map((item, index) => (
                <div key={item.name} className="flex flex-col items-center">
                  {index === 0 && <LightbulbIcon className="w-8 h-8 text-yellow-500 mb-2" />}
                  {index === 1 && <TargetIcon className="w-8 h-8 text-red-500 mb-2" />}
                  {index === 2 && <WrenchIcon className="w-8 h-8 text-purple-500 mb-2" />}
                  {index === 3 && <SearchIcon className="w-8 h-8 text-blue-500 mb-2" />}
                  <div className="w-16 bg-secondary rounded-full">
                    <div
                      className="bg-primary rounded-full"
                      style={{ width: `${item.value}%`, height: '8px' }}
                    ></div>
                  </div>
                  <span className="mt-2 text-sm font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data 2: Item Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart width={400} height={200} data={data2}>
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data 3: Group Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <PieChart width={400} height={200}>
              <Pie
                data={data3}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              />
            </PieChart>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data 4: Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data4.map((item) => (
                <div key={item.name} className="flex items-center">
                  <span className="w-20 text-sm font-medium">{item.name}</span>
                  <div className="flex-1 h-4 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                  <span className="w-12 text-right text-sm font-medium">{item.value.toFixed(0)}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4">
        <Card>
          <CardHeader>
            <CardTitle>Data 5: Gauge Controller</CardTitle>
          </CardHeader>
          <CardContent>
            <Slider
              value={[gaugeValue]}
              onValueChange={(value) => setGaugeValue(value[0])}
              max={100}
              step={1}
            />
            <div className="mt-2 text-center text-sm font-medium">
              Current Value: {gaugeValue}%
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
