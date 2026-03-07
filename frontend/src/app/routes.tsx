import { createBrowserRouter } from "react-router";
import LandingPage from "./pages/LandingPage";
import SymptomGuidance from "./pages/SymptomGuidance";
import ReportUpload from "./pages/ReportUpload";
import MedicationTracker from "./pages/MedicationTracker";
import ChronicCare from "./pages/ChronicCare";
import RecoveryMonitoring from "./pages/RecoveryMonitoring";
import HealthMonitoring from "./pages/HealthMonitoring";
import NavigationAssistant from "./pages/NavigationAssistant";
import LocationContext from "./pages/LocationContext";
import EducationHub from "./pages/EducationHub";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/symptom-guidance",
    Component: SymptomGuidance,
  },
  {
    path: "/report-upload",
    Component: ReportUpload,
  },
  {
    path: "/medication-tracker",
    Component: MedicationTracker,
  },
  {
    path: "/chronic-care",
    Component: ChronicCare,
  },
  {
    path: "/recovery-monitoring",
    Component: RecoveryMonitoring,
  },
  {
    path: "/health-monitoring",
    Component: HealthMonitoring,
  },
  {
    path: "/navigation-assistant",
    Component: NavigationAssistant,
  },
  {
    path: "/location-context",
    Component: LocationContext,
  },
  {
    path: "/education-hub",
    Component: EducationHub,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/signin",
    Component: SignIn,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
]);
