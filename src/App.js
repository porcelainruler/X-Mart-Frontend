import './App.css';
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { useLocation } from "react-router";
import Layout from "./Layout";
import { useEffect } from 'react';

function App({ isLoggedIn, store }) {
  const location = useLocation();

  useEffect(() => {
  }, [location.pathname]);

  return (
    <div className="App">
      <Routes>
        {/* <Route path="/window" component={WindowScreensLayout} /> */}
        <Route path="/*" element={<Layout match={location} />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

export default connect(mapStateToProps, null)(App);
