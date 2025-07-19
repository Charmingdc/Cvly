import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "./navigation/Navbar";
import Footer from "./landing-page/Footer";

const Layout = () => {
  const location: string = useLocation();

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      {location.pathname === "/" && (
        <footer>
          <Footer />
        </footer>
      )}
    </>
  );
};

export default Layout;
