import { Suspense } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Navbar from "./navigation/Navbar";
import Footer from "./landing-page/Footer";

const Layout = () => {
  const location: string = useLocation();

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className='w-screen flex flex-col items-center p-4 pt-20'>
        <Suspense>
          <Outlet />
        </Suspense>
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
