import React from "react";
import { Route, Routes } from "react-router-dom";
// import LoginWrapper from "../viewScreen/loginScreens";
// import { Logout } from "../components/header/Logout/Logout";
import AuthenticatedRoute from "../AuthenticatedRoute";
// import ErrorPage from "../viewScreen/ErrorScreen/ErrorPage";
import HomePage from '../pages/Homepage/homePageContainer';
import RaiseTicket from "../pages/StaticPagesFooter/RaiseTicket/raiseTicket";
import ReturnPolicy from "../pages/StaticPagesFooter/ReturnPolicy/returnPolicy";
import TermOfUse from "../pages/StaticPagesFooter/TermOfUse/termOfUse";
import FAQs from "../pages/StaticPagesFooter/FAQs/faqs";
import Security from "../pages/StaticPagesFooter/Security/security";

function NavRoutes({ match, navbarRef }) {
    return (
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="raiseTicket" element={<RaiseTicket />} /> // TODO: Make it authenticated route
          <Route path="returnPolicy" element={<ReturnPolicy />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="termOfUse" element={<TermOfUse />} />
          <Route path="security" element={<Security />} />
          {/* <Route exact path={match.url + "forgotPassword"} component={LoginWrapper} /> */}
          {/* <Route exact path={match.url + "logout"} component={Logout} /> */}
          {/* <AuthenticatedRoute exact path={match.url + "checkoutCart"} component={} /> */}
          <Route exact path="*" component={HomePage} />
        </Routes>
      </div>
    );
}

export default NavRoutes;
