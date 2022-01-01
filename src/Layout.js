import React, { useRef } from "react";
// import "./assets/scss/style.scss";
import Routes from "./routes/Routes";
import Header from "./pages/Homepage/components/header";
import Footer from "./pages/Homepage/components/footer";
import Segment from "./pages/Homepage/components/segments";

function Layout({ match }) {
  const navbarRef = useRef(null);

  return (
    <div className="mainContainer">
      <Header />
      <Segment />
      <Routes match={match} navbarRef={navbarRef} />
      <Footer />
    </div>
  );
}

export default Layout;
