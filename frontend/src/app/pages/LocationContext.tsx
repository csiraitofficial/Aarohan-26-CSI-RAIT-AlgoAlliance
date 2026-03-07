import { Navigation } from "../components/Navigation";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  MapPin,
  AlertTriangle,
  Cloud,
  Droplets,
  Wind,
  Sun,
  TrendingUp,
} from "lucide-react";

export default function LocationContext() {
  const outbreakAlerts = [
    {
      disease: "Seasonal Flu",
      level: "Moderate",
      color: "yellow",
      cases: "+15% this week",
    },
    {
      disease: "Dengue",
      level: "Low",
      color: "green",
      cases: "Stable",
    },
  ];

  const environmentalRisks = [
    { factor: "Air Quality Index", value: "Good (45)", status: "green" },
    { factor: "Pollen Count", value: "Moderate", status: "yellow" },
    { factor: "UV Index", value: "High (8)", status: "orange" },
    { factor: "Humidity", value: "72%", status: "green" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Location-Based Health Context</h1>
          <p className="text-gray-600">
            Stay informed about health risks and outbreaks in your area
          </p>
        </div>

        {/* Location Input */}
        <Card className="p-6 mb-6">
          <div className="flex gap-3">
            <div className="flex-1">
              <Input 
                placeholder="Enter your location (City, State)" 
                defaultValue="San Francisco, CA"
              />
            </div>
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              <MapPin className="w-4 h-4 mr-2" />
              Use Current Location
            </Button>
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Outbreak Alerts */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
                Local Disease Outbreaks
              </h3>
              <p className="text-sm text-gray-600 mb-4">Health alerts for San Francisco, CA</p>
              
              <div className="space-y-3">
                {outbreakAlerts.map((alert, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-xl border-l-4 ${
                      alert.color === "yellow" 
                        ? "bg-yellow-50 border-l-yellow-500"
                        : "bg-green-50 border-l-green-500"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold text-gray-900">{alert.disease}</p>
                      <Badge 
                        variant="outline" 
                        className={
                          alert.color === "yellow"
                            ? "bg-yellow-100 text-yellow-800 border-yellow-300"
                            : "bg-green-100 text-green-800 border-green-300"
                        }
                      >
                        {alert.level}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{alert.cases}</p>
                    <Button size="sm" variant="outline" className="text-xs">
                      View Prevention Tips
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Seasonal Health Risks */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Sun className="w-5 h-5 text-yellow-600" />
                Seasonal Health Risks
              </h3>
              <p className="text-sm text-gray-600 mb-4">Early Spring - March 2026</p>
              
              <div className="space-y-3">
                <div className="p-4 bg-blue-50 rounded-xl">
                  <p className="font-medium text-gray-900 mb-1">Allergy Season Peak</p>
                  <p className="text-sm text-gray-600">
                    Tree pollen levels are rising. If you have seasonal allergies, consider starting antihistamines.
                  </p>
                </div>
                <div className="p-4 bg-purple-50 rounded-xl">
                  <p className="font-medium text-gray-900 mb-1">Cold & Flu Season</p>
                  <p className="text-sm text-gray-600">
                    Respiratory infections are common this time of year. Practice good hand hygiene.
                  </p>
                </div>
              </div>
            </Card>

            {/* Environmental Factors */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Cloud className="w-5 h-5 text-blue-600" />
                Environmental Health Factors
              </h3>
              
              <div className="space-y-3">
                {environmentalRisks.map((risk, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      {risk.factor.includes("Air") && <Wind className="w-4 h-4 text-gray-600" />}
                      {risk.factor.includes("Pollen") && <Sun className="w-4 h-4 text-gray-600" />}
                      {risk.factor.includes("UV") && <Sun className="w-4 h-4 text-gray-600" />}
                      {risk.factor.includes("Humidity") && <Droplets className="w-4 h-4 text-gray-600" />}
                      <div>
                        <p className="text-sm font-medium text-gray-900">{risk.factor}</p>
                        <p className="text-xs text-gray-500">{risk.value}</p>
                      </div>
                    </div>
                    <Badge 
                      variant="outline"
                      className={
                        risk.status === "green"
                          ? "bg-green-100 text-green-800 border-green-300"
                          : risk.status === "yellow"
                          ? "bg-yellow-100 text-yellow-800 border-yellow-300"
                          : "bg-orange-100 text-orange-800 border-orange-300"
                      }
                    >
                      {risk.status === "green" ? "Good" : risk.status === "yellow" ? "Moderate" : "High"}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Your Symptoms + Location Context */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Your Symptoms + Location Context</h3>
              <p className="text-sm text-gray-600 mb-4">
                Based on your recent symptom check and local health data:
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-yellow-900 mb-2">Relevant Local Context</p>
                      <p className="text-sm text-yellow-800 mb-3">
                        Your reported symptoms (fever, cough) align with increased flu activity in your area. 
                        Consider getting tested if symptoms persist.
                      </p>
                      <Button size="sm" variant="outline" className="text-xs">
                        Find Testing Centers Nearby
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-xl">
                  <p className="font-medium text-gray-900 mb-2">Allergy Alert</p>
                  <p className="text-sm text-gray-600">
                    High pollen count today may worsen respiratory symptoms. Use air purifiers and keep windows closed.
                  </p>
                </div>
              </div>
            </Card>

            {/* District Health Map Placeholder */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-indigo-600" />
                Regional Health Map
              </h3>
              
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-4 flex items-center justify-center h-64">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-indigo-300 mx-auto mb-3" />
                  <p className="text-gray-600">Interactive health map</p>
                  <p className="text-sm text-gray-500">Showing disease activity in your region</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-1"></div>
                  <p className="text-xs text-gray-600">Low Risk</p>
                </div>
                <div className="text-center p-3 bg-yellow-50 rounded-lg">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full mx-auto mb-1"></div>
                  <p className="text-xs text-gray-600">Moderate</p>
                </div>
                <div className="text-center p-3 bg-red-50 rounded-lg">
                  <div className="w-4 h-4 bg-red-500 rounded-full mx-auto mb-1"></div>
                  <p className="text-xs text-gray-600">High Risk</p>
                </div>
              </div>
            </Card>

            {/* Local Preventive Tips */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Local Preventive Tips</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  <p className="text-gray-600">
                    Get your annual flu shot at participating pharmacies and clinics
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  <p className="text-gray-600">
                    Avoid outdoor activities during peak pollen hours (5-10 AM)
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  <p className="text-gray-600">
                    Use sunscreen - UV index is high this week
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  <p className="text-gray-600">
                    Practice mosquito prevention to reduce dengue risk
                  </p>
                </div>
              </div>
            </Card>

            {/* Trending Health Topics */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-indigo-600" />
                Trending in Your Area
              </h3>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Spring Allergies Management
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Flu Prevention Tips
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Air Quality and Respiratory Health
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
