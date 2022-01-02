import React, { useRef } from "react";
// import "./assets/scss/style.scss";
import NavRoutes from "./routes/Routes";
import Header from "./pages/Homepage/components/header";
import Footer from "./pages/Homepage/components/footer";
import Segment from "./pages/Homepage/components/segments";
import SettingModal from "./pages/Homepage/components/setting";

function Layout({ match }) {
  const navbarRef = useRef(null);
  console.log("Exist");

  return (
    <div className="mainContainer">
      <Header />
      <Segment isIconMode={true} />
      <SettingModal />
      <NavRoutes navbarRef={navbarRef} />
      <Footer />
    </div>
  );
}

export default Layout;
