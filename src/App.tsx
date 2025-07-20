import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import SignInPage from "./pages/SignInPage";

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
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
