import { Navigation } from "../components/Navigation";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";
import {
  Activity,
  ThermometerSun,
  Heart,
  Wind,
  Moon,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function HealthMonitoring() {
  const vitalData = [
    { day: "Mon", temp: 98.4, pulse: 72, oxygen: 98 },
    { day: "Tue", temp: 98.6, pulse: 75, oxygen: 97 },
    { day: "Wed", temp: 98.3, pulse: 70, oxygen: 98 },
    { day: "Thu", temp: 98.5, pulse: 73, oxygen: 98 },
    { day: "Fri", temp: 99.1, pulse: 78, oxygen: 97 },
    { day: "Sat", temp: 98.7, pulse: 74, oxygen: 98 },
    { day: "Sun", temp: 98.4, pulse: 71, oxygen: 98 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Early Health Deterioration Monitoring</h1>
          <p className="text-gray-600">
            Track subtle health changes and detect early warning signs at home
          </p>
        </div>

        {/* Current Status */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <Card className="p-4 border-l-4 border-l-green-500">
            <div className="flex items-center justify-between mb-2">
              <ThermometerSun className="w-5 h-5 text-green-600" />
              <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300 text-xs">
                Normal
              </Badge>
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-1">98.4°F</p>
            <p className="text-xs text-gray-600">Temperature</p>
          </Card>

          <Card className="p-4 border-l-4 border-l-blue-500">
            <div className="flex items-center justify-between mb-2">
              <Heart className="w-5 h-5 text-blue-600" />
              <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300 text-xs">
                Normal
              </Badge>
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-1">72 bpm</p>
            <p className="text-xs text-gray-600">Pulse Rate</p>
          </Card>

          <Card className="p-4 border-l-4 border-l-purple-500">
            <div className="flex items-center justify-between mb-2">
              <Wind className="w-5 h-5 text-purple-600" />
              <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300 text-xs">
                Normal
              </Badge>
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-1">98%</p>
            <p className="text-xs text-gray-600">Blood Oxygen</p>
          </Card>

          <Card className="p-4 border-l-4 border-l-indigo-500">
            <div className="flex items-center justify-between mb-2">
              <Activity className="w-5 h-5 text-indigo-600" />
              <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300 text-xs">
                Good
              </Badge>
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-1">122/78</p>
            <p className="text-xs text-gray-600">Blood Pressure</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Daily Log */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Log Today's Vitals</h3>
              <div className="space-y-4">
                <div>
                  <Label>Temperature (°F)</Label>
                  <Input type="number" step="0.1" placeholder="98.6" />
                </div>
                <div>
                  <Label>Pulse (bpm)</Label>
                  <Input type="number" placeholder="72" />
                </div>
                <div>
                  <Label>Blood Oxygen (%)</Label>
                  <Input type="number" placeholder="98" />
                </div>
                <div>
                  <Label>Blood Pressure</Label>
                  <div className="flex gap-2">
                    <Input type="number" placeholder="Systolic" />
                    <Input type="number" placeholder="Diastolic" />
                  </div>
                </div>
                <div>
                  <Label>Sleep (hours)</Label>
                  <Input type="number" step="0.5" placeholder="7.5" />
                </div>
                <div>
                  <Label>Fatigue Level (1-10)</Label>
                  <Input type="number" min="1" max="10" placeholder="3" />
                </div>
                <div>
                  <Label>Pain Level (1-10)</Label>
                  <Input type="number" min="0" max="10" placeholder="0" />
                </div>
                <div>
                  <Label>Breathing Difficulty (1-10)</Label>
                  <Input type="number" min="0" max="10" placeholder="0" />
                </div>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Save Vitals
                </Button>
              </div>
            </Card>
          </div>

          {/* Right Column - Trends & Alerts */}
          <div className="lg:col-span-2 space-y-6">
            {/* Temperature Trend */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Temperature Trend (7 Days)</h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={vitalData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="day" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" domain={[97, 100]} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="temp"
                    stroke="#f59e0b"
                    strokeWidth={2}
                    name="Temperature (°F)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            {/* Pulse & Oxygen */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Pulse Rate Trend</h3>
                <ResponsiveContainer width="100%" height={150}>
                  <LineChart data={vitalData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="day" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" domain={[60, 85]} />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="pulse"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      name="Pulse (bpm)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Blood Oxygen Trend</h3>
                <ResponsiveContainer width="100%" height={150}>
                  <LineChart data={vitalData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="day" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" domain={[95, 100]} />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="oxygen"
                      stroke="#8b5cf6"
                      strokeWidth={2}
                      name="SpO2 (%)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Card>
            </div>

            {/* Changes from Baseline */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Changes from Your Baseline</h3>
              <div className="space-y-3">
                <div className="p-4 bg-green-50 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ThermometerSun className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Temperature</p>
                      <p className="text-sm text-gray-600">Within normal range</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                    <TrendingDown className="w-3 h-3 mr-1" />
                    Stable
                  </Badge>
                </div>

                <div className="p-4 bg-yellow-50 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-yellow-600" />
                    <div>
                      <p className="font-medium text-gray-900">Pulse Rate</p>
                      <p className="text-sm text-gray-600">Slightly elevated today</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +8 bpm
                  </Badge>
                </div>

                <div className="p-4 bg-green-50 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Moon className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Sleep Quality</p>
                      <p className="text-sm text-gray-600">Consistent pattern</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                    Good
                  </Badge>
                </div>
              </div>
            </Card>

            {/* AI Insights */}
            <Card className="p-6 border-l-4 border-l-blue-500">
              <h3 className="font-semibold text-gray-900 mb-4">AI Health Insights</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-medium text-gray-900 mb-1">Observation</p>
                  <p className="text-gray-600">
                    Your pulse rate shows a slight increase today. This could be due to stress, 
                    caffeine intake, or reduced sleep. Monitor this over the next 2-3 days.
                  </p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-medium text-gray-900 mb-1">Good News</p>
                  <p className="text-gray-600">
                    All other vitals remain stable and within your normal ranges. Your temperature 
                    and oxygen levels are excellent.
                  </p>
                </div>
              </div>
            </Card>

            {/* Warning Threshold Alert */}
            <Card className="p-6 border-l-4 border-l-red-500">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">When to Escalate</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Contact your healthcare provider immediately if you experience:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Temperature above 100.4°F (38°C)</li>
                    <li>• Pulse consistently above 100 or below 60 bpm</li>
                    <li>• Oxygen level below 95%</li>
                    <li>• Blood pressure above 140/90 or below 90/60</li>
                    <li>• Sudden severe symptoms or difficulty breathing</li>
                  </ul>
                  <Button variant="destructive" className="w-full mt-4" size="sm">
                    Emergency Contact
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
