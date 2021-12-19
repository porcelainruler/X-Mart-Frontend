import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import {getStore} from "./utils/localStorageOps";

export class AuthenticatedRoute extends Component {
  render() {
    const Component = this.props.component;
    const isAuthenticated = getStore("token");
    return isAuthenticated ? <Component /> : <Navigate to={{ path: "/login" }} />;
  }
}

export default AuthenticatedRoute;
