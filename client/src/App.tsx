import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

// Lazy-loaded pages
const LandingPage = lazy(() => import("./pages/LandingPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const UploadPage = lazy(() => import("./pages/UploadPage"));
const ResumesPage = lazy(() => import("./pages/ResumesPage"));
const ResumePage = lazy(() => import("./pages/ResumePage"));
const AnalyticsPage = lazy(() => import("./pages/AnalyticsPage"));
const SettingsPage = lazy(() => import("./pages/SettingsPage"));

interface AppRoute {
  path: string;
  element: JSX.Element;
}

// Public (auth) routes
const publicRoutes: AppRoute[] = [
  { path: "/signup", element: <SignupPage /> },
  { path: "/signin", element: <SignInPage /> }
];

// Protected (inside layout) routes
const protectedRoutes: AppRoute[] = [
  { path: "", element: <LandingPage /> },
  { path: "dashboard", element: <Dashboard /> },
  { path: "new", element: <UploadPage /> },
  { path: "resumes", element: <ResumesPage /> },
  { path: "resume/:username/:resume_name", element: <ResumePage /> },
  { path: "analytics/:username/:resume_name", element: <AnalyticsPage /> },
  { path: "settings", element: <SettingsPage /> }
];

const App = () => (
  <Router>
    <Routes>
      {/* Public Routes */}
      {publicRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}

      {/* Protected Routes under Layout */}
      <Route path='/' element={<Layout />}>
        {protectedRoutes.map(({ path, element }) => (
          <Route
            key={path || "index"}
            index={path === ""}
            path={path === "" ? undefined : path}
            element={element}
          />
        ))}
      </Route>
    </Routes>
  </Router>
);

export default App;
