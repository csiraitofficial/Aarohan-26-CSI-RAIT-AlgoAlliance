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
import { ProtectedRoute } from "../context/ProtectedRoute";

const ProtectedDashboard = () => (
  <ProtectedRoute>
    <Dashboard />
  </ProtectedRoute>
);

const ProtectedSymptomGuidance = () => (
  <ProtectedRoute>
    <SymptomGuidance />
  </ProtectedRoute>
);

const ProtectedReportUpload = () => (
  <ProtectedRoute>
    <ReportUpload />
  </ProtectedRoute>
);

const ProtectedMedicationTracker = () => (
  <ProtectedRoute>
    <MedicationTracker />
  </ProtectedRoute>
);

const ProtectedChronicCare = () => (
  <ProtectedRoute>
    <ChronicCare />
  </ProtectedRoute>
);

const ProtectedRecoveryMonitoring = () => (
  <ProtectedRoute>
    <RecoveryMonitoring />
  </ProtectedRoute>
);

const ProtectedHealthMonitoring = () => (
  <ProtectedRoute>
    <HealthMonitoring />
  </ProtectedRoute>
);

const ProtectedNavigationAssistant = () => (
  <ProtectedRoute>
    <NavigationAssistant />
  </ProtectedRoute>
);

const ProtectedLocationContext = () => (
  <ProtectedRoute>
    <LocationContext />
  </ProtectedRoute>
);

const ProtectedEducationHub = () => (
  <ProtectedRoute>
    <EducationHub />
  </ProtectedRoute>
);

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/symptom-guidance",
    Component: ProtectedSymptomGuidance,
  },
  {
    path: "/report-upload",
    Component: ProtectedReportUpload,
  },
  {
    path: "/medication-tracker",
    Component: ProtectedMedicationTracker,
  },
  {
    path: "/chronic-care",
    Component: ProtectedChronicCare,
  },
  {
    path: "/recovery-monitoring",
    Component: ProtectedRecoveryMonitoring,
  },
  {
    path: "/health-monitoring",
    Component: ProtectedHealthMonitoring,
  },
  {
    path: "/navigation-assistant",
    Component: ProtectedNavigationAssistant,
  },
  {
    path: "/location-context",
    Component: ProtectedLocationContext,
  },
  {
    path: "/education-hub",
    Component: ProtectedEducationHub,
  },
  {
    path: "/dashboard",
    Component: ProtectedDashboard,
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
