import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import SignInPage from "./pages/SignInPage";
import Dashboard from "./pages/Dashboard";
import UploadPage from "./pages/UploadPage";
import SettingsPage from "./pages/SettingsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/** Auth Pages **/}
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/signin' element={<SignInPage />} />

        {/** Protected Pages **/}
        <Route path='/' element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='new' element={<UploadPage />} />
          <Route path='settings' element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
