import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import {
  MessageCircle,
  FileText,
  Bell,
  Pill,
  Activity,
  Heart,
  AlertTriangle,
  MapPin,
  BookOpen,
  Phone,
  Shield,
  Globe,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function LandingPage() {
  const features = [
    {
      icon: MessageCircle,
      title: "AI Symptom Guidance",
      description: "Chat-based symptom assessment with precautionary guidance",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
      link: "/symptom-guidance",
    },
    {
      icon: FileText,
      title: "Medical Report Simplifier",
      description: "Understand your lab reports and medical documents easily",
      color: "bg-purple-100",
      iconColor: "text-purple-600",
      link: "/report-upload",
    },
    {
      icon: Bell,
      title: "Outbreak Alerts",
      description: "Location-aware health alerts and disease outbreak updates",
      color: "bg-yellow-100",
      iconColor: "text-yellow-600",
      link: "/location-context",
    },
    {
      icon: Pill,
      title: "Medication Tracker",
      description: "Smart medicine management with reminders and adherence tracking",
      color: "bg-pink-100",
      iconColor: "text-pink-600",
      link: "/medication-tracker",
    },
    {
      icon: Activity,
      title: "Chronic Care Coach",
      description: "Daily support for diabetes, hypertension, and other chronic conditions",
      color: "bg-green-100",
      iconColor: "text-green-600",
      link: "/chronic-care",
    },
    {
      icon: Heart,
      title: "Recovery Monitoring",
      description: "Post-treatment care and discharge instruction tracking",
      color: "bg-red-100",
      iconColor: "text-red-600",
      link: "/recovery-monitoring",
    },
    {
      icon: AlertTriangle,
      title: "Early Warning Monitor",
      description: "Track subtle health changes and detect early deterioration",
      color: "bg-orange-100",
      iconColor: "text-orange-600",
      link: "/health-monitoring",
    },
    {
      icon: MapPin,
      title: "Healthcare Navigator",
      description: "Find the right doctor, clinic, or hospital for your needs",
      color: "bg-indigo-100",
      iconColor: "text-indigo-600",
      link: "/navigation-assistant",
    },
    {
      icon: BookOpen,
      title: "Health Education Hub",
      description: "Disease awareness, prevention guides, and wellness tips",
      color: "bg-teal-100",
      iconColor: "text-teal-600",
      link: "/education-hub",
    },
    {
      icon: Phone,
      title: "Emergency Guidance",
      description: "Quick access to emergency protocols and urgent care information",
      color: "bg-red-100",
      iconColor: "text-red-600",
      link: "/navigation-assistant",
    },
  ];

  const trustIndicators = [
    { icon: Shield, text: "Privacy-First" },
    { icon: CheckCircle, text: "Non-Diagnostic Guidance" },
    { icon: Globe, text: "Multilingual-Ready" },
    { icon: MapPin, text: "Location-Aware" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Smarter Preventive Healthcare for{" "}
              <span className="text-indigo-600">Everyday Life</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              AI-based health assistance, symptom guidance, medicine tracking, and local health
              alerts—all in one platform designed for you and your family.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link to="/symptom-guidance">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                  Start Health Check
                </Button>
              </Link>
              <Link to="/report-upload">
                <Button size="lg" variant="outline">
                  Upload Report
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="ghost">
                  Explore Features
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex flex-col items-center gap-2 text-center">
                  <div className="bg-indigo-100 p-3 rounded-2xl">
                    <indicator.icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <span className="text-xs text-gray-600 font-medium">{indicator.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-50 rounded-[3rem] p-8 md:p-12">
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 space-y-2 border-0 shadow-sm">
                  <div className="bg-blue-100 p-2 rounded-xl w-fit">
                    <Activity className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="h-2 bg-blue-200 rounded w-3/4"></div>
                  <div className="h-2 bg-blue-100 rounded w-1/2"></div>
                </Card>
                <Card className="p-4 space-y-2 border-0 shadow-sm">
                  <div className="bg-pink-100 p-2 rounded-xl w-fit">
                    <Heart className="w-5 h-5 text-pink-600" />
                  </div>
                  <div className="h-2 bg-pink-200 rounded w-3/4"></div>
                  <div className="h-2 bg-pink-100 rounded w-1/2"></div>
                </Card>
                <Card className="p-4 space-y-2 border-0 shadow-sm">
                  <div className="bg-green-100 p-2 rounded-xl w-fit">
                    <Pill className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="h-2 bg-green-200 rounded w-3/4"></div>
                  <div className="h-2 bg-green-100 rounded w-1/2"></div>
                </Card>
                <Card className="p-4 space-y-2 border-0 shadow-sm">
                  <div className="bg-yellow-100 p-2 rounded-xl w-fit">
                    <Bell className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div className="h-2 bg-yellow-200 rounded w-3/4"></div>
                  <div className="h-2 bg-yellow-100 rounded w-1/2"></div>
                </Card>
              </div>
              <div className="mt-6 bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-600 p-2 rounded-xl">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-indigo-200 rounded w-2/3 mb-2"></div>
                    <div className="h-2 bg-indigo-100 rounded w-1/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Complete Healthcare Companion
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access a full suite of AI-powered tools designed to support your health journey
            every step of the way
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link to={feature.link} key={index}>
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0 shadow-md group cursor-pointer h-full">
                <div className={`${feature.color} p-4 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="flex items-center text-indigo-600 font-medium text-sm group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-purple-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Smart, Supportive
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three easy steps to better health management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-3xl shadow-sm mb-4 inline-block">
                <div className="text-4xl font-bold text-indigo-600">1</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Share Your Symptoms</h3>
              <p className="text-gray-600">
                Describe what you're experiencing through our simple chat interface
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-3xl shadow-sm mb-4 inline-block">
                <div className="text-4xl font-bold text-indigo-600">2</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get AI Insights</h3>
              <p className="text-gray-600">
                Receive precautionary guidance and context-aware recommendations
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-3xl shadow-sm mb-4 inline-block">
                <div className="text-4xl font-bold text-indigo-600">3</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Take Action</h3>
              <p className="text-gray-600">
                Follow personalized care plans and connect with healthcare providers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-indigo-600 p-2 rounded-2xl">
                  <Heart className="w-5 h-5 text-white" fill="white" />
                </div>
                <span className="text-lg font-semibold">HealthAI</span>
              </div>
              <p className="text-gray-400 text-sm">
                AI-powered preventive healthcare for everyday life
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/symptom-guidance" className="hover:text-white">Symptom Guidance</Link></li>
                <li><Link to="/medication-tracker" className="hover:text-white">Medication Tracker</Link></li>
                <li><Link to="/chronic-care" className="hover:text-white">Chronic Care</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/education-hub" className="hover:text-white">Health Education</Link></li>
                <li><Link to="/dashboard" className="hover:text-white">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2026 HealthAI. This platform provides informational guidance only and is not a substitute for professional medical advice.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
