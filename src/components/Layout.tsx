import { Outlet } from "react-router-dom";
import Navbar from "./navigation/Navbar";
import Footer from "./landing-page/Footer";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
      <Footer />
      </footer>
    </>
  );
};

export default Layout;
