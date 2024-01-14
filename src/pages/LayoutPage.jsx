import { Outlet } from "react-router-dom";
import Header from "/src/components/Header.jsx";
import Footer from "/src/components/Footer.jsx";
import ScrollToTop from "/src/components/utils/scrollToTop";

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
