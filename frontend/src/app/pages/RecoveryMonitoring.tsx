import { Navigation } from "../components/Navigation";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import {
  Heart,
  Calendar,
  AlertCircle,
  CheckCircle2,
  Pill,
  FileText,
  Users,
  Phone,
} from "lucide-react";

export default function RecoveryMonitoring() {
  const recoveryMilestones = [
    { day: "Day 1-3", task: "Rest and wound care", status: "completed" },
    { day: "Day 4-7", task: "Light walking", status: "completed" },
    { day: "Day 8-14", task: "Gradual activity increase", status: "current" },
    { day: "Day 15-30", task: "Normal activities resume", status: "upcoming" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Recovery Monitoring</h1>
          <p className="text-gray-600">
            Track your post-treatment recovery and follow care instructions
          </p>
        </div>

        {/* Recovery Progress */}
        <Card className="p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Recovery Progress</h3>
            <Badge className="bg-blue-100 text-blue-800">Day 12 of 30</Badge>
          </div>
          <Progress value={40} className="mb-4" />
          <p className="text-sm text-gray-600">You're 40% through your recovery timeline</p>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Treatment Summary */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-600" />
                Treatment Summary
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Procedure:</span>
                  <span className="font-medium text-gray-900">Appendectomy</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Discharge Date:</span>
                  <span className="font-medium text-gray-900">Feb 24, 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Surgeon:</span>
                  <span className="font-medium text-gray-900">Dr. Sarah Johnson</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Follow-up:</span>
                  <span className="font-medium text-gray-900">March 10, 2026</span>
                </div>
              </div>
            </Card>

            {/* Daily Check-in */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">How are you feeling today?</h3>
              <div className="space-y-4">
                <div>
                  <Label>Pain Level (0-10)</Label>
                  <Input type="number" min="0" max="10" placeholder="Enter pain level" />
                </div>
                <div>
                  <Label>Temperature (°F)</Label>
                  <Input type="number" step="0.1" placeholder="98.6" />
                </div>
                <div>
                  <Label>Any new symptoms?</Label>
                  <Textarea rows={3} placeholder="Describe any concerns..." />
                </div>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Submit Daily Check-in
                </Button>
              </div>
            </Card>

            {/* Medications */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Pill className="w-5 h-5 text-indigo-600" />
                Post-Op Medications
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-xl">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-gray-900">Ibuprofen 400mg</span>
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-sm text-gray-600">Every 6 hours with food</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-gray-900">Antibiotic Course</span>
                    <Badge variant="outline" className="text-xs">5 days remaining</Badge>
                  </div>
                  <p className="text-sm text-gray-600">Twice daily until March 11</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Doctor's Instructions */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Doctor's Instructions</h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-xl">
                  <p className="font-medium text-gray-900 mb-2">Wound Care</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Keep incision clean and dry</li>
                    <li>• Change dressing daily</li>
                    <li>• Watch for signs of infection</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 rounded-xl">
                  <p className="font-medium text-gray-900 mb-2">Activity</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Walk 10-15 minutes, 3 times daily</li>
                    <li>• Avoid lifting over 10 lbs</li>
                    <li>• No strenuous exercise for 4 weeks</li>
                  </ul>
                </div>
                <div className="p-4 bg-yellow-50 rounded-xl">
                  <p className="font-medium text-gray-900 mb-2">Diet</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Start with light, easy-to-digest foods</li>
                    <li>• Avoid spicy or fatty foods</li>
                    <li>• Stay well hydrated</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Warning Signs */}
            <Card className="p-6 border-l-4 border-l-red-500">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                Warning Signs - Seek Help If:
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5">•</span>
                  <span>Fever above 101°F (38.3°C)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5">•</span>
                  <span>Increased redness or swelling around incision</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5">•</span>
                  <span>Unusual drainage or foul odor from wound</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5">•</span>
                  <span>Severe or worsening pain</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5">•</span>
                  <span>Difficulty breathing or chest pain</span>
                </li>
              </ul>
              <Button variant="destructive" className="w-full mt-4" size="sm">
                <Phone className="w-4 h-4 mr-2" />
                Call Emergency Contact
              </Button>
            </Card>

            {/* Recovery Timeline */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-indigo-600" />
                Recovery Timeline
              </h3>
              <div className="space-y-3">
                {recoveryMilestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border-l-4 ${
                      milestone.status === "completed"
                        ? "bg-green-50 border-l-green-500"
                        : milestone.status === "current"
                        ? "bg-blue-50 border-l-blue-500"
                        : "bg-gray-50 border-l-gray-300"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-gray-900">{milestone.day}</span>
                      {milestone.status === "completed" && (
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                      )}
                      {milestone.status === "current" && (
                        <Badge className="bg-blue-600">Current</Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{milestone.task}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Caregiver Panel */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-600" />
                Caregiver Support
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Your caregiver can monitor your recovery progress and receive notifications.
              </p>
              <Button variant="outline" className="w-full">
                Invite Caregiver
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
