import { Navigation } from "../components/Navigation";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import {
  Activity,
  TrendingUp,
  TrendingDown,
  Heart,
  Droplets,
  Moon,
  Apple,
  Footprints,
  Brain,
  Calendar,
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function ChronicCare() {
  const bloodSugarData = [
    { day: "Mon", morning: 95, evening: 110 },
    { day: "Tue", morning: 102, evening: 115 },
    { day: "Wed", morning: 98, evening: 108 },
    { day: "Thu", morning: 92, evening: 105 },
    { day: "Fri", morning: 100, evening: 112 },
    { day: "Sat", morning: 96, evening: 109 },
    { day: "Sun", morning: 94, evening: 107 },
  ];

  const conditions = [
    { name: "Diabetes", active: true, color: "bg-blue-500" },
    { name: "Hypertension", active: true, color: "bg-red-500" },
    { name: "Thyroid", active: false, color: "bg-purple-500" },
    { name: "PCOS", active: false, color: "bg-pink-500" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Chronic Disease Management</h1>
          <p className="text-gray-600">
            Daily support for managing your ongoing health conditions
          </p>
        </div>

        {/* Condition Selection */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {conditions.map((condition, index) => (
            <Button
              key={index}
              variant={condition.active ? "default" : "outline"}
              className={condition.active ? `${condition.color} hover:opacity-90` : ""}
            >
              {condition.name}
            </Button>
          ))}
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <Card className="p-4 border-l-4 border-l-blue-500">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Avg. Blood Sugar</p>
              <Droplets className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-1">104 mg/dL</p>
            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300 text-xs">
              <TrendingDown className="w-3 h-3 mr-1" />
              -3% vs last week
            </Badge>
          </Card>

          <Card className="p-4 border-l-4 border-l-red-500">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Avg. Blood Pressure</p>
              <Heart className="w-5 h-5 text-red-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-1">128/82</p>
            <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300 text-xs">
              Borderline
            </Badge>
          </Card>

          <Card className="p-4 border-l-4 border-l-purple-500">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Weight</p>
              <Activity className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-1">72.5 kg</p>
            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300 text-xs">
              <TrendingDown className="w-3 h-3 mr-1" />
              -0.8 kg this month
            </Badge>
          </Card>

          <Card className="p-4 border-l-4 border-l-green-500">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Weekly Adherence</p>
              <Calendar className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-1">92%</p>
            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300 text-xs">
              <TrendingUp className="w-3 h-3 mr-1" />
              Excellent
            </Badge>
          </Card>
        </div>

        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="log">Daily Log</TabsTrigger>
            <TabsTrigger value="insights">AI Insights</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Blood Sugar Trend */}
              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Blood Sugar Trend (7 Days)</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={bloodSugarData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="day" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" domain={[80, 130]} />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="morning"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      name="Morning"
                    />
                    <Line
                      type="monotone"
                      dataKey="evening"
                      stroke="#8b5cf6"
                      strokeWidth={2}
                      name="Evening"
                    />
                  </LineChart>
                </ResponsiveContainer>
                <div className="flex items-center gap-4 mt-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">Morning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-600">Evening</span>
                  </div>
                </div>
              </Card>

              {/* Today's Recommendations */}
              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Today's Recommendations</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-blue-50 rounded-xl flex items-start gap-3">
                    <Apple className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Nutrition</p>
                      <p className="text-sm text-gray-600">
                        Include more fiber-rich foods. Aim for 25-30g of fiber today.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-xl flex items-start gap-3">
                    <Footprints className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Activity</p>
                      <p className="text-sm text-gray-600">
                        Take a 30-minute walk after dinner to help regulate blood sugar.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-xl flex items-start gap-3">
                    <Moon className="w-5 h-5 text-purple-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Sleep</p>
                      <p className="text-sm text-gray-600">
                        Aim for 7-8 hours tonight. Good sleep helps insulin regulation.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-xl flex items-start gap-3">
                    <Brain className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Stress Management</p>
                      <p className="text-sm text-gray-600">
                        Practice 10 minutes of meditation to reduce stress levels.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Healthy Habits Tracker */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Healthy Habits Tracker</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl text-center">
                  <Droplets className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">6/8</p>
                  <p className="text-sm text-gray-600">Glasses of water</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl text-center">
                  <Footprints className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">7,245</p>
                  <p className="text-sm text-gray-600">Steps today</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl text-center">
                  <Moon className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">7.5h</p>
                  <p className="text-sm text-gray-600">Sleep last night</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl text-center">
                  <Apple className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">3/3</p>
                  <p className="text-sm text-gray-600">Healthy meals</p>
                </div>
              </div>
            </Card>

            {/* Weekly Progress */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Weekly Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Blood Sugar Control</span>
                    <span className="text-sm font-medium text-gray-900">85%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Medication Adherence</span>
                    <span className="text-sm font-medium text-gray-900">92%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Exercise Goals</span>
                    <span className="text-sm font-medium text-gray-900">78%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: "78%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Dietary Goals</span>
                    <span className="text-sm font-medium text-gray-900">88%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-pink-500 rounded-full" style={{ width: "88%" }}></div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Daily Log Tab */}
          <TabsContent value="log">
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-6">Log Today's Data</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Vitals</h4>
                  <div>
                    <Label>Blood Sugar (mg/dL)</Label>
                    <div className="flex gap-2">
                      <Input placeholder="Morning" type="number" />
                      <Input placeholder="Evening" type="number" />
                    </div>
                  </div>
                  <div>
                    <Label>Blood Pressure</Label>
                    <div className="flex gap-2">
                      <Input placeholder="Systolic" type="number" />
                      <Input placeholder="Diastolic" type="number" />
                    </div>
                  </div>
                  <div>
                    <Label>Weight (kg)</Label>
                    <Input type="number" step="0.1" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Lifestyle</h4>
                  <div>
                    <Label>Sleep (hours)</Label>
                    <Input type="number" step="0.5" />
                  </div>
                  <div>
                    <Label>Water Intake (glasses)</Label>
                    <Input type="number" />
                  </div>
                  <div>
                    <Label>Exercise (minutes)</Label>
                    <Input type="number" />
                  </div>
                  <div>
                    <Label>Stress Level (1-10)</Label>
                    <Input type="number" min="1" max="10" />
                  </div>
                </div>
              </div>
              <Button className="mt-6 bg-indigo-600 hover:bg-indigo-700">
                Save Today's Log
              </Button>
            </Card>
          </TabsContent>

          {/* AI Insights Tab */}
          <TabsContent value="insights">
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">AI-Powered Insights</h3>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                  <p className="font-medium text-green-900 mb-2">✓ Great Progress!</p>
                  <p className="text-sm text-green-800">
                    Your blood sugar levels have been consistently within target range for the past 5 days. 
                    Keep up the excellent work with your meal planning and exercise routine.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                  <p className="font-medium text-blue-900 mb-2">💡 Pattern Detected</p>
                  <p className="text-sm text-blue-800">
                    We've noticed your blood sugar tends to spike after lunch. Consider reducing carb portions 
                    during your midday meal and taking a 15-minute walk afterwards.
                  </p>
                </div>
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                  <p className="font-medium text-yellow-900 mb-2">⚠ Attention Needed</p>
                  <p className="text-sm text-yellow-800">
                    Your sleep duration has been below 7 hours for 3 consecutive nights. Poor sleep can affect 
                    blood sugar control. Try to maintain a consistent bedtime routine.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
