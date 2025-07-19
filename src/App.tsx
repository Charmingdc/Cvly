import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/** Auth Pages **/}
        <Route path='/signup' element={<SignupPage />} />
        
        { /** Protected Pages **/ }
        <Route path='/' element={<Layout />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
