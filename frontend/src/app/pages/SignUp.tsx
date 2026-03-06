import { Link, useNavigate } from "react-router";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import { Heart } from "lucide-react";
import { useState } from "react";
import { userSignup } from "../../lib/auth";

export default function SignUp() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [consentAccepted, setConsentAccepted] = useState(false);

  const handleContinue = () => {
    setError("");
    if (!firstName || !lastName || !email || !password) {
      setError("Please fill in all required fields");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!termsAccepted) {
      setError("Please accept the Terms of Service");
      return;
    }
    setStep(2);
  };

  const handleSignUp = async () => {
    setError("");
    if (!consentAccepted) {
      setError("Please provide your consent to continue");
      return;
    }
    setLoading(true);
    try {
      await userSignup(email, password, firstName, lastName);
      navigate("/dashboard");
    } catch (e: any) {
      setError(e.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 p-3 rounded-2xl">
            <Heart className="w-8 h-8 text-white" fill="white" />
          </div>
          <span className="text-2xl font-bold text-gray-900">HealthAI</span>
        </Link>

        <Card className="p-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Create Your Account</h1>
            <p className="text-gray-600">
              {step === 1 ? "Let's get started with your basic information" : "Set up your health profile"}
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              step >= 1 ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-600"
            }`}>1</div>
            <div className={`w-16 h-1 ${step >= 2 ? "bg-indigo-600" : "bg-gray-200"}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              step >= 2 ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-600"
            }`}>2</div>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
              {error}
            </div>
          )}

          {step === 1 ? (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" className="mt-1"
                    value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" className="mt-1"
                    value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" className="mt-1"
                  value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" className="mt-1"
                  value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>

              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" type="password" placeholder="••••••••" className="mt-1"
                  value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>

              <div className="flex items-start gap-2">
                <Checkbox id="terms" className="mt-1"
                  checked={termsAccepted}
                  onCheckedChange={(v) => setTermsAccepted(v as boolean)} />
                <Label htmlFor="terms" className="text-sm cursor-pointer">
                  I agree to the{" "}
                  <a href="#" className="text-indigo-600 hover:text-indigo-700">Terms of Service</a>
                  {" "}and{" "}
                  <a href="#" className="text-indigo-600 hover:text-indigo-700">Privacy Policy</a>
                </Label>
              </div>

              <Button type="button" onClick={handleContinue}
                className="w-full bg-indigo-600 hover:bg-indigo-700">
                Continue to Health Profile
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="age">Age</Label>
                  <Input id="age" type="number" placeholder="30" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="gender">Gender</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="city">City, State</Label>
                <Input id="city" placeholder="San Francisco, CA" className="mt-1" />
              </div>

              <div>
                <Label htmlFor="conditions">Chronic Conditions (if any)</Label>
                <Input id="conditions" placeholder="e.g., Diabetes, Hypertension" className="mt-1" />
              </div>

              <div>
                <Label htmlFor="medications">Current Medications (if any)</Label>
                <Input id="medications" placeholder="List your medications" className="mt-1" />
              </div>

              <div>
                <Label htmlFor="allergies">Known Allergies</Label>
                <Input id="allergies" placeholder="e.g., Penicillin, Pollen" className="mt-1" />
              </div>

              <div>
                <Label htmlFor="emergencyContact">Emergency Contact</Label>
                <Input id="emergencyContact" placeholder="Name and phone number" className="mt-1" />
              </div>

              <div>
                <Label htmlFor="caregiverContact">Caregiver Contact (Optional)</Label>
                <Input id="caregiverContact" placeholder="Name and phone number" className="mt-1" />
              </div>

              <div className="flex items-start gap-2">
                <Checkbox id="consent" className="mt-1"
                  checked={consentAccepted}
                  onCheckedChange={(v) => setConsentAccepted(v as boolean)} />
                <Label htmlFor="consent" className="text-sm cursor-pointer">
                  I consent to HealthAI storing my health information securely and using it to provide personalized health guidance
                </Label>
              </div>

              <div className="flex gap-3">
                <Button type="button" onClick={() => setStep(1)}
                  variant="outline" className="flex-1">
                  Back
                </Button>
                <Button type="button" onClick={handleSignUp}
                  disabled={loading}
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700">
                  {loading ? "Creating account..." : "Complete Sign Up"}
                </Button>
              </div>
            </div>
          )}

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/signin" className="text-indigo-600 hover:text-indigo-700 font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </Card>

        <Card className="p-4 mt-4 bg-blue-50 border-blue-200">
          <p className="text-sm text-blue-900">
            <strong>Privacy First:</strong> Your health data is encrypted and stored securely.
            We never share your personal information without your explicit consent.
          </p>
        </Card>
      </div>
    </div>
  );
}