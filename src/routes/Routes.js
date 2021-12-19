import React from "react";
import { Route, Routes } from "react-router-dom";
// import LoginWrapper from "../viewScreen/loginScreens";
// import { Logout } from "../components/header/Logout/Logout";
import AuthenticatedRoute from "../AuthenticatedRoute";
// import ErrorPage from "../viewScreen/ErrorScreen/ErrorPage";
import HomePage from '../pages/Homepage/homePageContainer';

function NavRoutes({ match, navbarRef }) {
  console.log("Hey", match);
    return (
    <div>
      <Routes>
        <Route exact path={"/"} element={<HomePage />} />
        {/* <Route exact path={match.url + "forgotPassword"} component={LoginWrapper} /> */}
        {/* <Route exact path={match.url + "logout"} component={Logout} /> */}
        {/* <AuthenticatedRoute exact path={match.url + "checkoutCart"} component={} /> */}
        <Route exact path="*" component={HomePage} />
      </Routes>
    </div>
  );
}

export default NavRoutes;
