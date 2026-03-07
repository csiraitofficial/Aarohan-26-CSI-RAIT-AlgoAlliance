import { Navigation } from "../components/Navigation";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Switch } from "../components/ui/switch";
import {
  Pill,
  Plus,
  Clock,
  Bell,
  Calendar,
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  Users,
} from "lucide-react";

export default function MedicationTracker() {
  const medications = [
    {
      name: "Metformin",
      dosage: "500mg",
      frequency: "Twice daily",
      timing: ["8:00 AM", "8:00 PM"],
      status: "active",
      adherence: 95,
    },
    {
      name: "Lisinopril",
      dosage: "10mg",
      frequency: "Once daily",
      timing: ["9:00 AM"],
      status: "active",
      adherence: 100,
    },
    {
      name: "Atorvastatin",
      dosage: "20mg",
      frequency: "Once daily",
      timing: ["10:00 PM"],
      status: "active",
      adherence: 88,
    },
  ];

  const todaySchedule = [
    { time: "8:00 AM", medicine: "Metformin 500mg", status: "taken" },
    { time: "9:00 AM", medicine: "Lisinopril 10mg", status: "taken" },
    { time: "8:00 PM", medicine: "Metformin 500mg", status: "upcoming" },
    { time: "10:00 PM", medicine: "Atorvastatin 20mg", status: "upcoming" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Medication Tracker</h1>
            <p className="text-gray-600">
              Smart medicine management with reminders and adherence tracking
            </p>
          </div>
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Medication
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <Card className="p-4 border-l-4 border-l-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Overall Adherence</p>
                <p className="text-2xl font-bold text-gray-900">94%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
          </Card>
          <Card className="p-4 border-l-4 border-l-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Active Medications</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
              <Pill className="w-8 h-8 text-blue-600" />
            </div>
          </Card>
          <Card className="p-4 border-l-4 border-l-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Missed This Week</p>
                <p className="text-2xl font-bold text-gray-900">2</p>
              </div>
              <AlertCircle className="w-8 h-8 text-yellow-600" />
            </div>
          </Card>
          <Card className="p-4 border-l-4 border-l-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Refills Due</p>
                <p className="text-2xl font-bold text-gray-900">1</p>
              </div>
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
          </Card>
        </div>

        <Tabs defaultValue="schedule" className="space-y-6">
          <TabsList>
            <TabsTrigger value="schedule">Today's Schedule</TabsTrigger>
            <TabsTrigger value="medications">My Medications</TabsTrigger>
            <TabsTrigger value="add">Add New</TabsTrigger>
          </TabsList>

          {/* Today's Schedule Tab */}
          <TabsContent value="schedule" className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-indigo-600" />
                Today's Medication Schedule
              </h3>
              <div className="space-y-3">
                {todaySchedule.map((item, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl flex items-center justify-between ${
                      item.status === "taken"
                        ? "bg-green-50 border border-green-200"
                        : "bg-gray-50 border border-gray-200"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <p className="text-sm font-semibold text-gray-900">{item.time}</p>
                      </div>
                      <div className="h-12 w-px bg-gray-300"></div>
                      <div>
                        <p className="font-medium text-gray-900">{item.medicine}</p>
                        <p className="text-sm text-gray-500">Before food</p>
                      </div>
                    </div>
                    {item.status === "taken" ? (
                      <Badge className="bg-green-100 text-green-800 border-green-300">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Taken
                      </Badge>
                    ) : (
                      <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                        Mark as Taken
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            {/* Reminders */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Bell className="w-5 h-5 text-indigo-600" />
                Reminder Settings
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="font-medium text-gray-900">Push Notifications</p>
                    <p className="text-sm text-gray-500">Get reminded before each dose</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="font-medium text-gray-900">SMS Reminders</p>
                    <p className="text-sm text-gray-500">Receive text message reminders</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="font-medium text-gray-900">Caregiver Notifications</p>
                    <p className="text-sm text-gray-500">Alert caregiver if dose is missed</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* My Medications Tab */}
          <TabsContent value="medications" className="space-y-4">
            {medications.map((med, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-100 p-3 rounded-2xl">
                      <Pill className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{med.name}</h3>
                      <p className="text-gray-600">{med.dosage} • {med.frequency}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                    Active
                  </Badge>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <p className="text-sm text-gray-600 mb-1">Timings</p>
                    <div className="space-y-1">
                      {med.timing.map((time, i) => (
                        <p key={i} className="font-medium text-gray-900">{time}</p>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <p className="text-sm text-gray-600 mb-1">Adherence Rate</p>
                    <div className="flex items-baseline gap-2">
                      <p className="text-2xl font-bold text-gray-900">{med.adherence}%</p>
                      <p className="text-sm text-gray-500">this month</p>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <p className="text-sm text-gray-600 mb-1">Next Refill</p>
                    <p className="font-medium text-gray-900">In 12 days</p>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="sm">Edit</Button>
                  <Button variant="outline" size="sm">View History</Button>
                  <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                    Discontinue
                  </Button>
                </div>
              </Card>
            ))}

            {/* Conflict Warning */}
            <Card className="p-4 bg-yellow-50 border-yellow-200">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                <div>
                  <p className="font-medium text-yellow-900 mb-1">Potential Drug Interaction</p>
                  <p className="text-sm text-yellow-800">
                    No known interactions detected between your current medications. 
                    Always consult your doctor before starting new medications.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Add New Medication Tab */}
          <TabsContent value="add">
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-6">Add New Medication</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <Label>Medicine Name</Label>
                  <Input placeholder="Enter medicine name" />
                </div>
                <div>
                  <Label>Dosage</Label>
                  <Input placeholder="e.g., 500mg" />
                </div>
                <div>
                  <Label>Frequency</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="once">Once daily</SelectItem>
                      <SelectItem value="twice">Twice daily</SelectItem>
                      <SelectItem value="thrice">Three times daily</SelectItem>
                      <SelectItem value="custom">Custom schedule</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Time 1</Label>
                  <Input type="time" />
                </div>
                <div>
                  <Label>Time 2 (optional)</Label>
                  <Input type="time" />
                </div>
                <div>
                  <Label>Before/After Food</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="before">Before food</SelectItem>
                      <SelectItem value="after">After food</SelectItem>
                      <SelectItem value="with">With food</SelectItem>
                      <SelectItem value="anytime">Anytime</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Duration</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7">7 days</SelectItem>
                      <SelectItem value="14">14 days</SelectItem>
                      <SelectItem value="30">30 days</SelectItem>
                      <SelectItem value="ongoing">Ongoing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-2">
                  <Label>Prescribed For</Label>
                  <Input placeholder="e.g., Diabetes, High BP, etc." />
                </div>
                <div className="md:col-span-2">
                  <Label>Prescribing Doctor</Label>
                  <Input placeholder="Doctor's name" />
                </div>
                <div className="md:col-span-2">
                  <Label>Notes</Label>
                  <Input placeholder="Any special instructions or notes" />
                </div>
                <div className="md:col-span-2">
                  <div className="flex items-center gap-2 p-4 bg-blue-50 rounded-xl">
                    <Users className="w-5 h-5 text-blue-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Caregiver Access</p>
                      <p className="text-xs text-gray-600">Allow caregiver to track this medication</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700">
                  Add Medication
                </Button>
                <Button variant="outline">Cancel</Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
