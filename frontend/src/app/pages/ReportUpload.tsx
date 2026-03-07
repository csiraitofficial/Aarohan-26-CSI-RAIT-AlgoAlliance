import { Navigation } from "../components/Navigation";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Badge } from "../components/ui/badge";
import { MedicalReportSummarizer } from "../components/MedicalReportSummarizer";
import {
  AlertTriangle,
  HelpCircle,
  Download,
} from "lucide-react";

export default function ReportUpload() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Medical Report Understanding</h1>
          <p className="text-gray-600">
            Upload your medical reports and get simplified explanations of your results
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Upload Section */}
          <div className="space-y-6">
            <MedicalReportSummarizer />

            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Report Details</h3>
              <div className="space-y-4">
                <div>
                  <Label>Report Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select report type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="blood">Blood Test</SelectItem>
                      <SelectItem value="scan">CT/MRI Scan</SelectItem>
                      <SelectItem value="xray">X-Ray</SelectItem>
                      <SelectItem value="prescription">Prescription</SelectItem>
                      <SelectItem value="discharge">Discharge Summary</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Patient Name</Label>
                  <Input placeholder="Full name" />
                </div>
                <div>
                  <Label>Report Date</Label>
                  <Input type="date" />
                </div>
                <div>
                  <Label>Ordering Physician</Label>
                  <Input placeholder="Doctor's name (optional)" />
                </div>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Analyze Report
                </Button>
              </div>
            </Card>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Extracted Findings</h3>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
              
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">Hemoglobin</span>
                    <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                      Normal
                    </Badge>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-gray-900">14.5</span>
                    <span className="text-sm text-gray-500">g/dL</span>
                    <span className="text-sm text-gray-500 ml-auto">Range: 12-16</span>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">Total Cholesterol</span>
                    <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">
                      Borderline High
                    </Badge>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-gray-900">215</span>
                    <span className="text-sm text-gray-500">mg/dL</span>
                    <span className="text-sm text-gray-500 ml-auto">Range: &lt;200</span>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">Blood Sugar (Fasting)</span>
                    <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                      Normal
                    </Badge>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-gray-900">92</span>
                    <span className="text-sm text-gray-500">mg/dL</span>
                    <span className="text-sm text-gray-500 ml-auto">Range: 70-100</span>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">Vitamin D</span>
                    <Badge variant="outline" className="bg-red-100 text-red-800 border-red-300">
                      Low
                    </Badge>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-gray-900">18</span>
                    <span className="text-sm text-gray-500">ng/mL</span>
                    <span className="text-sm text-gray-500 ml-auto">Range: 30-100</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-yellow-500">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                Values Requiring Attention
              </h4>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <p className="font-medium text-gray-900 mb-1">Total Cholesterol - Borderline High</p>
                  <p>Your cholesterol is slightly elevated. Consider dietary changes and regular exercise. Discuss with your doctor about lifestyle modifications.</p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg">
                  <p className="font-medium text-gray-900 mb-1">Vitamin D - Low</p>
                  <p>Your vitamin D levels are below optimal range. You may need supplementation. Consult your doctor for appropriate dosage.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-blue-500">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                Questions to Ask Your Doctor
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Do I need to make any dietary changes to manage my cholesterol?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>What is the recommended vitamin D supplement dosage for me?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>When should I schedule my next blood test?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Are there any lifestyle changes I should prioritize?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Should I be concerned about my current cholesterol level?</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Simplified Explanation</h4>
              <div className="prose prose-sm text-gray-600">
                <p className="mb-3">
                  Your blood test results show that most of your values are within normal ranges, which is good news. Here's what each result means:
                </p>
                <p className="mb-3">
                  <strong>Hemoglobin:</strong> This measures the oxygen-carrying capacity of your blood. Your level is healthy and normal.
                </p>
                <p className="mb-3">
                  <strong>Cholesterol:</strong> This is slightly elevated. While not in the high-risk category, it's worth monitoring and making lifestyle adjustments.
                </p>
                <p>
                  <strong>Vitamin D:</strong> This is below optimal levels. Vitamin D is important for bone health and immunity. Supplementation may be beneficial.
                </p>
              </div>
            </Card>

            {/* Disclaimer */}
            <Card className="p-4 bg-amber-50 border-amber-200">
              <p className="text-sm text-amber-900">
                <strong>Important:</strong> This is an informational summary only and not a confirmed diagnosis. 
                Please discuss these results with your healthcare provider for proper medical interpretation and guidance.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
