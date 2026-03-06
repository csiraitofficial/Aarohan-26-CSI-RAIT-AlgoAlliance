import { Navigation } from "../components/Navigation";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  MapPin,
  Search,
  Stethoscope,
  Hospital,
  Clock,
  Navigation as NavigationIcon,
  AlertCircle,
} from "lucide-react";

export default function NavigationAssistant() {
  const specialistRecommendations = [
    {
      type: "Cardiologist",
      reason: "For chest pain and heart-related symptoms",
      urgency: "Moderate",
    },
    {
      type: "General Physician",
      reason: "For initial consultation and general health concerns",
      urgency: "Low",
    },
  ];

  const nearbyFacilities = [
    {
      name: "City General Hospital",
      type: "Emergency Care",
      distance: "2.3 km",
      waitTime: "30 min",
      rating: 4.5,
    },
    {
      name: "HealthPlus Clinic",
      type: "Walk-in Clinic",
      distance: "0.8 km",
      waitTime: "15 min",
      rating: 4.2,
    },
    {
      name: "Metro Medical Center",
      type: "Specialist Hospital",
      distance: "5.1 km",
      waitTime: "45 min",
      rating: 4.7,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Healthcare Navigation Assistant</h1>
          <p className="text-gray-600">
            Find the right healthcare provider for your needs
          </p>
        </div>

        <Tabs defaultValue="guided" className="space-y-6">
          <TabsList>
            <TabsTrigger value="guided">Guided Assistant</TabsTrigger>
            <TabsTrigger value="nearby">Nearby Facilities</TabsTrigger>
            <TabsTrigger value="specialists">Find Specialist</TabsTrigger>
          </TabsList>

          {/* Guided Assistant */}
          <TabsContent value="guided" className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Answer a few questions to get personalized recommendations</h3>
              
              <div className="space-y-6">
                {/* Question 1 */}
                <div>
                  <p className="font-medium text-gray-900 mb-3">What is your main health concern?</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <Button variant="outline" className="justify-start h-auto py-4">
                      <div className="text-left">
                        <p className="font-medium">New Symptoms</p>
                        <p className="text-xs text-gray-500">First-time health issue</p>
                      </div>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto py-4">
                      <div className="text-left">
                        <p className="font-medium">Follow-up Care</p>
                        <p className="text-xs text-gray-500">Existing condition</p>
                      </div>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto py-4">
                      <div className="text-left">
                        <p className="font-medium">Preventive Check-up</p>
                        <p className="text-xs text-gray-500">Routine health screening</p>
                      </div>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto py-4">
                      <div className="text-left">
                        <p className="font-medium">Emergency</p>
                        <p className="text-xs text-gray-500">Urgent medical attention</p>
                      </div>
                    </Button>
                  </div>
                </div>

                {/* Question 2 */}
                <div>
                  <p className="font-medium text-gray-900 mb-3">How urgent is your concern?</p>
                  <div className="grid md:grid-cols-3 gap-3">
                    <Button variant="outline" className="justify-start h-auto py-4 border-green-300">
                      <div className="text-left">
                        <p className="font-medium text-green-700">Low</p>
                        <p className="text-xs text-gray-500">Can wait a few days</p>
                      </div>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto py-4 border-yellow-300">
                      <div className="text-left">
                        <p className="font-medium text-yellow-700">Moderate</p>
                        <p className="text-xs text-gray-500">Within 24-48 hours</p>
                      </div>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto py-4 border-red-300">
                      <div className="text-left">
                        <p className="font-medium text-red-700">High</p>
                        <p className="text-xs text-gray-500">Immediate attention</p>
                      </div>
                    </Button>
                  </div>
                </div>

                {/* Question 3 */}
                <div>
                  <p className="font-medium text-gray-900 mb-3">What type of care are you looking for?</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <Button variant="outline" className="justify-start">
                      General Consultation
                    </Button>
                    <Button variant="outline" className="justify-start">
                      Specialist Care
                    </Button>
                    <Button variant="outline" className="justify-start">
                      Diagnostic Tests
                    </Button>
                    <Button variant="outline" className="justify-start">
                      Second Opinion
                    </Button>
                  </div>
                </div>

                <Button className="w-full bg-indigo-600 hover:bg-indigo-700" size="lg">
                  Get Recommendations
                </Button>
              </div>
            </Card>

            {/* Recommendations */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Recommended Care Path</h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 border-l-4 border-l-blue-500 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Stethoscope className="w-5 h-5 text-blue-600 mt-1" />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 mb-1">Start with: General Physician</p>
                      <p className="text-sm text-gray-600 mb-3">
                        Based on your symptoms, we recommend starting with a general physician for initial assessment.
                      </p>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Find General Physicians Near You
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {specialistRecommendations.map((rec, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium text-gray-900">{rec.type}</p>
                        <Badge variant="outline" className={
                          rec.urgency === "Moderate" 
                            ? "bg-yellow-100 text-yellow-800 border-yellow-300"
                            : "bg-green-100 text-green-800 border-green-300"
                        }>
                          {rec.urgency}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{rec.reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Nearby Facilities */}
          <TabsContent value="nearby" className="space-y-6">
            <Card className="p-6">
              <div className="flex gap-3 mb-6">
                <Input 
                  placeholder="Enter your location or use current location" 
                  className="flex-1"
                />
                <Button className="bg-indigo-600 hover:bg-indigo-700">
                  <NavigationIcon className="w-4 h-4 mr-2" />
                  Locate Me
                </Button>
              </div>

              <div className="space-y-4">
                {nearbyFacilities.map((facility, index) => (
                  <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-3">
                        <div className="bg-indigo-100 p-2 rounded-xl">
                          <Hospital className="w-5 h-5 text-indigo-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{facility.name}</h4>
                          <p className="text-sm text-gray-600">{facility.type}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-1">
                          <span className="text-yellow-500">★</span>
                          <span className="text-sm font-medium text-gray-900">{facility.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{facility.distance} away</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{facility.waitTime} wait</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 bg-indigo-600 hover:bg-indigo-700">
                        Book Appointment
                      </Button>
                      <Button size="sm" variant="outline">View Details</Button>
                      <Button size="sm" variant="outline">Get Directions</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Find Specialist */}
          <TabsContent value="specialists">
            <Card className="p-6">
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input 
                    placeholder="Search for specialists (e.g., Cardiologist, Dermatologist)" 
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "Cardiologist",
                  "Dermatologist",
                  "Orthopedic",
                  "Neurologist",
                  "Gynecologist",
                  "Pediatrician",
                  "ENT Specialist",
                  "Ophthalmologist",
                  "Psychiatrist",
                ].map((specialist, index) => (
                  <Button key={index} variant="outline" className="justify-start h-auto py-4">
                    <Stethoscope className="w-4 h-4 mr-2" />
                    {specialist}
                  </Button>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Emergency Notice */}
        <Card className="p-4 bg-red-50 border-red-200 mt-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
            <div>
              <p className="font-medium text-red-900 mb-1">Emergency Services</p>
              <p className="text-sm text-red-800">
                If you're experiencing a life-threatening emergency (chest pain, difficulty breathing, severe bleeding, etc.), 
                call emergency services immediately or go to the nearest emergency room.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
