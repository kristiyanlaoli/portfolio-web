import { Outlet } from "react-router-dom";
import Header from "/components/Header.jsx";
import Footer from "/components/Footer.jsx";
import ScrollToTop from "/components/utils/ScrollToTop.jsx";

const LayoutPage = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutPage;
