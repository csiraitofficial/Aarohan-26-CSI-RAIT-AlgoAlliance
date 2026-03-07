import { Navigation } from "../components/Navigation";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  BookOpen,
  Search,
  Heart,
  Brain,
  Activity,
  Apple,
  Shield,
  Baby,
  Stethoscope,
  Eye,
} from "lucide-react";

export default function EducationHub() {
  const categories = [
    { name: "Heart Health", icon: Heart, color: "text-red-600", count: 45 },
    { name: "Mental Wellness", icon: Brain, color: "text-purple-600", count: 38 },
    { name: "Fitness & Exercise", icon: Activity, color: "text-green-600", count: 52 },
    { name: "Nutrition", icon: Apple, color: "text-orange-600", count: 67 },
    { name: "Disease Prevention", icon: Shield, color: "text-blue-600", count: 41 },
    { name: "Women's Health", icon: Baby, color: "text-pink-600", count: 34 },
  ];

  const featuredArticles = [
    {
      title: "Understanding Diabetes: Prevention and Management",
      category: "Disease Awareness",
      readTime: "8 min read",
      image: "bg-blue-100",
      icon: Activity,
    },
    {
      title: "10 Heart-Healthy Foods to Add to Your Diet",
      category: "Nutrition",
      readTime: "5 min read",
      image: "bg-red-100",
      icon: Heart,
    },
    {
      title: "Managing Stress and Anxiety in Daily Life",
      category: "Mental Health",
      readTime: "10 min read",
      image: "bg-purple-100",
      icon: Brain,
    },
    {
      title: "The Importance of Regular Health Screenings",
      category: "Prevention",
      readTime: "6 min read",
      image: "bg-green-100",
      icon: Stethoscope,
    },
  ];

  const commonTopics = [
    "Diabetes Management",
    "High Blood Pressure",
    "Weight Loss Tips",
    "Sleep Hygiene",
    "Seasonal Allergies",
    "Vitamin Deficiency",
    "Exercise for Beginners",
    "Healthy Eating",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Health Education Hub</h1>
          <p className="text-gray-600">
            Evidence-based health information, prevention guides, and wellness tips
          </p>
        </div>

        {/* Search Bar */}
        <Card className="p-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input 
              placeholder="Search health topics, diseases, symptoms..." 
              className="pl-10"
            />
          </div>
        </Card>

        {/* Category Cards */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="p-4 hover:shadow-md transition-shadow cursor-pointer text-center"
            >
              <category.icon className={`w-8 h-8 ${category.color} mx-auto mb-2`} />
              <p className="font-medium text-gray-900 text-sm mb-1">{category.name}</p>
              <p className="text-xs text-gray-500">{category.count} articles</p>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="featured" className="space-y-6">
          <TabsList>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="diseases">Disease Awareness</TabsTrigger>
            <TabsTrigger value="prevention">Prevention Guides</TabsTrigger>
            <TabsTrigger value="faq">FAQs</TabsTrigger>
          </TabsList>

          {/* Featured Tab */}
          <TabsContent value="featured" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {featuredArticles.map((article, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className={`${article.image} p-8 flex items-center justify-center`}>
                    <article.icon className="w-16 h-16 text-gray-400" />
                  </div>
                  <div className="p-5">
                    <Badge variant="outline" className="mb-2 text-xs">
                      {article.category}
                    </Badge>
                    <h3 className="font-semibold text-gray-900 mb-2">{article.title}</h3>
                    <p className="text-sm text-gray-500">{article.readTime}</p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Common Topics */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Frequently Searched Topics</h3>
              <div className="flex flex-wrap gap-2">
                {commonTopics.map((topic, index) => (
                  <Button key={index} variant="outline" size="sm" className="rounded-full">
                    {topic}
                  </Button>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Disease Awareness Tab */}
          <TabsContent value="diseases">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Diabetes", articles: 15, icon: Activity, color: "blue" },
                { name: "Hypertension", articles: 12, icon: Heart, color: "red" },
                { name: "Asthma", articles: 10, icon: Activity, color: "purple" },
                { name: "Thyroid Disorders", articles: 8, icon: Stethoscope, color: "green" },
                { name: "PCOS", articles: 9, icon: Baby, color: "pink" },
                { name: "Arthritis", articles: 11, icon: Activity, color: "orange" },
              ].map((disease, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-shadow cursor-pointer">
                  <div className={`bg-${disease.color}-100 p-3 rounded-2xl w-fit mb-3`}>
                    <disease.icon className={`w-6 h-6 text-${disease.color}-600`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{disease.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{disease.articles} articles available</p>
                  <Button size="sm" variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Prevention Guides Tab */}
          <TabsContent value="prevention">
            <div className="space-y-4">
              {[
                {
                  title: "How to Prevent Heart Disease",
                  description: "Lifestyle changes and habits for cardiovascular health",
                  icon: Heart,
                },
                {
                  title: "Cancer Prevention and Early Detection",
                  description: "Risk factors, screening guidelines, and prevention strategies",
                  icon: Shield,
                },
                {
                  title: "Preventing Type 2 Diabetes",
                  description: "Diet, exercise, and lifestyle modifications",
                  icon: Activity,
                },
                {
                  title: "Vision Care and Eye Health",
                  description: "Protecting your eyesight and preventing vision problems",
                  icon: Eye,
                },
              ].map((guide, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-100 p-3 rounded-2xl">
                      <guide.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{guide.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{guide.description}</p>
                      <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                        Read Guide
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* FAQs Tab */}
          <TabsContent value="faq">
            <div className="space-y-4">
              {[
                {
                  question: "What should I eat to lower my cholesterol?",
                  answer: "Focus on fiber-rich foods, omega-3 fatty acids, nuts, and avoid trans fats...",
                },
                {
                  question: "How much exercise do I need per week?",
                  answer: "Adults should aim for 150 minutes of moderate aerobic activity per week...",
                },
                {
                  question: "When should I get my blood sugar tested?",
                  answer: "Regular screening is recommended after age 45, or earlier if you have risk factors...",
                },
                {
                  question: "What are the early signs of diabetes?",
                  answer: "Common symptoms include increased thirst, frequent urination, fatigue, and blurred vision...",
                },
              ].map((faq, index) => (
                <Card key={index} className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-sm text-gray-600">{faq.answer}</p>
                  <Button size="sm" variant="link" className="px-0 mt-2 text-indigo-600">
                    Read Full Answer →
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
