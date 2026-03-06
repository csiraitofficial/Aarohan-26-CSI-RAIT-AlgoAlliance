import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Activity,
  Pill,
  Bell,
  Calendar,
  FileText,
  TrendingUp,
  AlertCircle,
  Heart,
  MessageCircle,
  CheckCircle2,
  Clock,
  MapPin,
} from "lucide-react";

export default function Dashboard() {
  const upcomingReminders = [
    { time: "8:00 AM", task: "Take Metformin 500mg", type: "medication" },
    { time: "3:00 PM", task: "Log blood sugar reading", type: "log" },
    { time: "6:00 PM", task: "Evening walk (30 min)", type: "activity" },
  ];

  const recentReports = [
    { name: "Blood Test Results", date: "Feb 28, 2026", status: "reviewed" },
    { name: "BP Log - Weekly", date: "Feb 25, 2026", status: "complete" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Greeting */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Good Morning, Sarah! 👋
          </h1>
          <p className="text-gray-600">
            Here's your health overview for today
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Link to="/symptom-guidance">
            <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer h-full">
              <div className="bg-blue-100 p-3 rounded-2xl w-fit mb-3">
                <MessageCircle className="w-6 h-6 text-blue-600" />
              </div>
              <p className="font-semibold text-gray-900">Start Health Check</p>
            </Card>
          </Link>
          <Link to="/report-upload">
            <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer h-full">
              <div className="bg-purple-100 p-3 rounded-2xl w-fit mb-3">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <p className="font-semibold text-gray-900">Upload Report</p>
            </Card>
          </Link>
          <Link to="/chronic-care">
            <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer h-full">
              <div className="bg-green-100 p-3 rounded-2xl w-fit mb-3">
                <Activity className="w-6 h-6 text-green-600" />
              </div>
              <p className="font-semibold text-gray-900">Log Daily Data</p>
            </Card>
          </Link>
          <Link to="/medication-tracker">
            <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer h-full">
              <div className="bg-pink-100 p-3 rounded-2xl w-fit mb-3">
                <Pill className="w-6 h-6 text-pink-600" />
              </div>
              <p className="font-semibold text-gray-900">Medications</p>
            </Card>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Health Status */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Current Health Status</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-green-50 rounded-xl text-center">
                  <Activity className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">104</p>
                  <p className="text-sm text-gray-600">Blood Sugar</p>
                  <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300 mt-2 text-xs">
                    Normal
                  </Badge>
                </div>
                <div className="p-4 bg-blue-50 rounded-xl text-center">
                  <Heart className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">122/78</p>
                  <p className="text-sm text-gray-600">Blood Pressure</p>
                  <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300 mt-2 text-xs">
                    Good
                  </Badge>
                </div>
                <div className="p-4 bg-purple-50 rounded-xl text-center">
                  <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">92%</p>
                  <p className="text-sm text-gray-600">Adherence</p>
                  <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300 mt-2 text-xs">
                    Great
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Today's Schedule */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-indigo-600" />
                Today's Schedule
              </h3>
              <div className="space-y-3">
                {upcomingReminders.map((reminder, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-white p-2 rounded-lg border border-gray-200">
                        <p className="text-sm font-semibold text-gray-900">{reminder.time}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{reminder.task}</p>
                        <p className="text-xs text-gray-500 capitalize">{reminder.type}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <CheckCircle2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* AI Recommendations */}
            <Card className="p-6 border-l-4 border-l-indigo-500">
              <h3 className="font-semibold text-gray-900 mb-4">AI Health Recommendations</h3>
              <div className="space-y-3">
                <div className="p-4 bg-blue-50 rounded-xl">
                  <p className="font-medium text-gray-900 mb-1">Great Progress! 🎉</p>
                  <p className="text-sm text-gray-600">
                    Your blood sugar levels have been consistently within target for 7 days. Keep up the excellent work!
                  </p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-xl">
                  <p className="font-medium text-gray-900 mb-1">Sleep Reminder 💤</p>
                  <p className="text-sm text-gray-600">
                    You've been sleeping less than 7 hours for 3 nights. Try to get to bed by 10 PM tonight.
                  </p>
                </div>
              </div>
            </Card>

            {/* Recent Reports */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-indigo-600" />
                  Recent Reports & Logs
                </h3>
                <Button size="sm" variant="outline">View All</Button>
              </div>
              <div className="space-y-3">
                {recentReports.map((report, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 cursor-pointer"
                  >
                    <div>
                      <p className="font-medium text-gray-900">{report.name}</p>
                      <p className="text-sm text-gray-500">{report.date}</p>
                    </div>
                    <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                      {report.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Medication Reminders */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Pill className="w-5 h-5 text-indigo-600" />
                Medications Due
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-gray-900 text-sm">Metformin</p>
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-xs text-gray-600">500mg • Taken at 8:00 AM</p>
                </div>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-gray-900 text-sm">Metformin</p>
                    <Badge className="bg-orange-100 text-orange-800 text-xs">Due in 4h</Badge>
                  </div>
                  <p className="text-xs text-gray-600">500mg • Evening dose</p>
                </div>
              </div>
              <Link to="/medication-tracker">
                <Button className="w-full mt-4" size="sm" variant="outline">
                  View All Medications
                </Button>
              </Link>
            </Card>

            {/* Local Health Alerts */}
            <Card className="p-6 border-l-4 border-l-yellow-500">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Bell className="w-5 h-5 text-yellow-600" />
                Local Health Alerts
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-yellow-50 rounded-xl">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm mb-1">Flu Activity Rising</p>
                      <p className="text-xs text-gray-600">Moderate activity in your area. Consider flu vaccination.</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 rounded-xl">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm mb-1">High Pollen Count</p>
                      <p className="text-xs text-gray-600">Tree pollen is high today. Take allergy precautions.</p>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/location-context">
                <Button className="w-full mt-4" size="sm" variant="outline">
                  View All Alerts
                </Button>
              </Link>
            </Card>

            {/* Upcoming Follow-ups */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-indigo-600" />
                Upcoming Appointments
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-indigo-50 rounded-xl">
                  <p className="font-medium text-gray-900 text-sm mb-1">Dr. Sarah Johnson</p>
                  <p className="text-xs text-gray-600">March 10, 2026 • 10:00 AM</p>
                  <p className="text-xs text-gray-500 mt-1">Follow-up consultation</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl">
                  <p className="font-medium text-gray-900 text-sm mb-1">Lab Work - Fasting</p>
                  <p className="text-xs text-gray-600">March 15, 2026 • 8:00 AM</p>
                  <p className="text-xs text-gray-500 mt-1">Quarterly blood tests</p>
                </div>
              </div>
              <Button className="w-full mt-4" size="sm" variant="outline">
                Manage Appointments
              </Button>
            </Card>

            {/* Active Recovery Plans */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Active Care Plans</h3>
              <div className="space-y-2">
                <Link to="/chronic-care">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    Diabetes Management
                  </Button>
                </Link>
                <Link to="/chronic-care">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    Hypertension Care
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
