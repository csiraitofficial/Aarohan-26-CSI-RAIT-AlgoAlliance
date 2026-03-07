import { Navigation } from "../components/Navigation";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Badge } from "../components/ui/badge";
import {
  MessageCircle,
  Send,
  Clock,
  AlertCircle,
  ThermometerSun,
  Wind,
  Heart,
  Activity,
  Brain,
  Stethoscope,
} from "lucide-react";
import { useState } from "react";

export default function SymptomGuidance() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your AI health assistant. I can help you understand your symptoms and provide precautionary guidance. Please note that I don't provide medical diagnoses. How can I help you today?",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const quickSymptoms = [
    { label: "Fever", icon: ThermometerSun },
    { label: "Cough", icon: Wind },
    { label: "Headache", icon: Brain },
    { label: "Fatigue", icon: Activity },
    { label: "Chest Pain", icon: Heart },
    { label: "Stomach Pain", icon: Stethoscope },
  ];

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    
    // 1. Add user message to the UI immediately
    const userMsg = { role: "user", content: inputMessage };
    setMessages(prev => [...prev, userMsg]);
    const currentInput = inputMessage; 
    setInputMessage("");
    
    try {
      // 2. Call the FastAPI endpoint
      const response = await fetch('http://127.0.0.1:8000/get_response', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: currentInput }),
      });

      const data = await response.json();

      // 3. Update UI with the AI's actual prediction
      if (data.disease) {
        setMessages(prev => [...prev, {
          role: "assistant",
          content: `I've analyzed your symptoms. This sounds like ${data.disease} (${data.confidence}). \n\nGuidance: ${data.advice}`,
        }]);
      } else {
        setMessages(prev => [...prev, {
          role: "assistant",
          content: data.error || "I'm not sure. Could you describe that differently?",
        }]);
      }
    } catch (error) {
      console.error("Connection failed:", error);
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Error: Could not connect to the medical AI server. Please ensure the backend is running.",
      }]);
    }
  };

  const handleCorrection = async (originalPattern: string, correctDisease: string) => {
    await fetch('http://127.0.0.1:8000/submit_feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        pattern: originalPattern, 
        tag: correctDisease 
      }),
    });
    alert("Feedback saved! The model will learn this on the next restart.");
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Symptom Guidance</h1>
          <p className="text-gray-600">
            Chat-based symptom assessment with precautionary guidance and context-aware recommendations
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-4">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Recent Conversations
              </h3>
              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-200 cursor-pointer">
                  <p className="text-sm font-medium text-gray-900">Persistent headache</p>
                  <p className="text-xs text-gray-500 mt-1">Yesterday</p>
                </div>
                <div className="p-3 rounded-xl hover:bg-gray-50 cursor-pointer">
                  <p className="text-sm font-medium text-gray-900">Fever and cough</p>
                  <p className="text-xs text-gray-500 mt-1">3 days ago</p>
                </div>
                <div className="p-3 rounded-xl hover:bg-gray-50 cursor-pointer">
                  <p className="text-sm font-medium text-gray-900">Stomach discomfort</p>
                  <p className="text-xs text-gray-500 mt-1">1 week ago</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4" size="sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                New Conversation
              </Button>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Quick Symptom Selection */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Symptom Selection</h3>
              <div className="flex flex-wrap gap-2">
                {quickSymptoms.map((symptom, index) => (
                  <Button key={index} variant="outline" size="sm" className="rounded-full">
                    <symptom.icon className="w-4 h-4 mr-2" />
                    {symptom.label}
                  </Button>
                ))}
              </div>
            </Card>

            {/* Chat Interface */}
            <Card className="p-6">
              <div className="space-y-4 mb-4 max-h-96 overflow-y-auto">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-4 rounded-2xl ${
                        message.role === "user"
                          ? "bg-indigo-600 text-white"
                          : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <Input
                  placeholder="Describe your symptoms..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <Button onClick={handleSendMessage} className="bg-indigo-600 hover:bg-indigo-700">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </Card>

            {/* Symptom Intake Form */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Detailed Symptom Assessment</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Name</Label>
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <Label>Age</Label>
                  <Input type="number" placeholder="Your age" />
                </div>
                <div>
                  <Label>Gender</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Location</Label>
                  <Input placeholder="City, State" />
                </div>
                <div className="md:col-span-2">
                  <Label>Primary Symptoms</Label>
                  <Textarea placeholder="Describe your symptoms in detail" rows={3} />
                </div>
                <div>
                  <Label>Duration</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="How long?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hours">Few hours</SelectItem>
                      <SelectItem value="1-2days">1-2 days</SelectItem>
                      <SelectItem value="3-7days">3-7 days</SelectItem>
                      <SelectItem value="week+">More than a week</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Severity</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select severity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mild">Mild</SelectItem>
                      <SelectItem value="moderate">Moderate</SelectItem>
                      <SelectItem value="severe">Severe</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-2">
                  <Label>Existing Conditions</Label>
                  <Input placeholder="Any chronic conditions (diabetes, hypertension, etc.)" />
                </div>
                <div className="md:col-span-2">
                  <Label>Current Medications</Label>
                  <Input placeholder="List any medications you're currently taking" />
                </div>
                <div className="md:col-span-2">
                  <Label>Allergies</Label>
                  <Input placeholder="Any known allergies" />
                </div>
              </div>
              <Button className="mt-4 bg-indigo-600 hover:bg-indigo-700">
                Submit Assessment
              </Button>
            </Card>

            {/* AI Guidance Output */}
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-6 border-l-4 border-l-yellow-500">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Urgency Level</h4>
                    <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">
                      Moderate - Monitor Closely
                    </Badge>
                    <p className="text-sm text-gray-600 mt-2">
                      Your symptoms require attention. Continue monitoring and consider consulting a healthcare provider if they worsen.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-blue-500">
                <div className="flex items-start gap-3">
                  <Stethoscope className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">When to See a Doctor</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• If symptoms persist beyond 5-7 days</li>
                      <li>• If fever exceeds 102°F (39°C)</li>
                      <li>• If you experience difficulty breathing</li>
                      <li>• If pain becomes severe</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-green-500">
                <h4 className="font-semibold text-gray-900 mb-3">Precautionary Guidance</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Stay hydrated - drink plenty of water</li>
                  <li>• Get adequate rest</li>
                  <li>• Monitor your temperature regularly</li>
                  <li>• Avoid strenuous activities</li>
                  <li>• Maintain good hygiene practices</li>
                </ul>
              </Card>

              <Card className="p-6 border-l-4 border-l-purple-500">
                <h4 className="font-semibold text-gray-900 mb-3">Location-Aware Context</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Based on your location, please be aware:
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Seasonal flu activity is moderate in your area</li>
                  <li>• Air quality index is good today</li>
                  <li>• No major disease outbreaks reported nearby</li>
                </ul>
              </Card>
            </div>

            {/* Disclaimer */}
            <Card className="p-4 bg-amber-50 border-amber-200">
              <p className="text-sm text-amber-900">
                <strong>Important:</strong> This is precautionary guidance only and not a medical diagnosis. 
                Please consult a qualified healthcare provider for proper medical advice, diagnosis, or treatment.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
