import './App.css';
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import Layout from "./Layout";

function App({ isLoggedIn }) {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/window" component={WindowScreensLayout} /> */}
        <Route path="/" element={<Layout />} />
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
