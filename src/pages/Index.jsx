// Update this page (the content is just a fallback if you fail to update the page)

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { LightbulbIcon, TargetIcon, WrenchIcon, SearchIcon, TrendingUpIcon } from 'lucide-react';

const Index = () => {
  const [gaugeValue, setGaugeValue] = useState(50);
  const [historicalData, setHistoricalData] = useState([]);

  useEffect(() => {
    const newDataPoint = {
      time: new Date().toLocaleTimeString(),
      value: gaugeValue
    };
    setHistoricalData(prevData => [...prevData.slice(-9), newDataPoint]);
  }, [gaugeValue]);

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
    <div className="min-h-screen bg-[#f8f0ff] p-8 relative">
      <h1 className="text-4xl font-bold text-center mb-4 text-[#5a189a]">It's all about the</h1>
      <h2 className="text-5xl font-bold text-center mb-4 text-[#5a189a]">Informational Data Infographic</h2>
      <p className="text-center mb-8 text-[#7b2cbf] max-w-2xl mx-auto">
        Infographic makes it easier for readers to absorb chunks of information. Shortly explain here what will this infographic cover.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-24">
        <Card className="col-span-1 lg:col-span-2 xl:col-span-3">
          <CardHeader>
            <CardTitle>Data 5: Historical Trend</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={historicalData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-[#f3d9fa] border-none shadow-none">
          <CardHeader>
            <CardTitle className="text-[#5a189a]">Data 1</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-[#7b2cbf] mb-4">Include data like percentages and average. It helps the reader get insight about the topic.</p>
            <div className="flex items-center justify-between">
              {['Step 1', 'Step 2', 'Step 3', 'Step 4'].map((step, index) => (
                <div key={step} className="flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 ${
                    ['bg-[#ffa62b]', 'bg-[#ff5e5b]', 'bg-[#9d4edd]', 'bg-[#3c096c]'][index]
                  }`}>
                    {[<LightbulbIcon />, <TargetIcon />, <WrenchIcon />, <SearchIcon />][index]}
                  </div>
                  <span className="text-sm font-medium text-[#5a189a]">{step}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#f3d9fa] border-none shadow-none">
          <CardHeader>
            <CardTitle className="text-[#5a189a]">Data 2</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-[#7b2cbf] mb-4">Include data like percentages and average. It helps the reader get insight about the topic.</p>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data2} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" hide />
                  <Tooltip />
                  <Bar dataKey="value1" stackId="a" fill="#ffa62b" />
                  <Bar dataKey="value2" stackId="a" fill="#ff5e5b" />
                  <Bar dataKey="value3" stackId="a" fill="#9d4edd" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#f3d9fa] border-none shadow-none">
          <CardHeader>
            <CardTitle className="text-[#5a189a]">Data 3</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-[#7b2cbf] mb-4">Include data like percentages and average. It helps the reader get insight about the topic.</p>
            <div className="grid grid-cols-6 gap-2">
              {Array.from({ length: 24 }, (_, i) => (
                <svg key={i} className={`w-8 h-8 ${i < 8 ? 'text-[#ffa62b]' : i < 16 ? 'text-[#ff5e5b]' : 'text-[#9d4edd]'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#f3d9fa] border-none shadow-none">
          <CardHeader>
            <CardTitle className="text-[#5a189a]">Data 4</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-[#7b2cbf] mb-4">Include data like percentages and average. It helps the reader get insight about the topic.</p>
            <div className="flex justify-between">
              {data4.map((item, index) => (
                <div key={item.name} className="flex flex-col items-center">
                  <div className="relative w-24 h-12 mb-2">
                    <svg className="w-24 h-24 -rotate-90 transform" viewBox="0 0 100 100">
                      <circle className="text-gray-200" strokeWidth="10" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50"/>
                      <circle className={`${['text-[#ffa62b]', 'text-[#ff5e5b]', 'text-[#9d4edd]'][index]}`} strokeWidth="10" strokeDasharray={`${item.value * 2.51327} 251.327`} strokeLinecap="round" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50"/>
                    </svg>
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-[#5a189a]">{item.value}%</span>
                  </div>
                  <span className="text-sm font-medium text-[#5a189a]">{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-[#f3d9fa] border-none shadow-none mt-8">
        <CardHeader>
          <CardTitle className="text-[#5a189a]">Data 5</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-[#7b2cbf] mb-4">Include data like percentages and average. It helps the reader get insight about the topic.</p>
          <div className="flex justify-center items-center">
            <div className="relative w-48 h-24">
              <svg className="w-48 h-48 -rotate-90 transform" viewBox="0 0 100 100">
                <circle className="text-gray-200" strokeWidth="10" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50"/>
                <circle className="text-[#ff5e5b]" strokeWidth="10" strokeDasharray={`${gaugeValue * 2.51327} 251.327`} strokeLinecap="round" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50"/>
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="text-3xl font-bold text-[#5a189a]">{gaugeValue}%</span>
                <Slider
                  value={[gaugeValue]}
                  onValueChange={(value) => setGaugeValue(value[0])}
                  max={100}
                  step={1}
                  className="w-32 mt-2"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
