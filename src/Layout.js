import React, { useRef } from "react";
// import "./assets/scss/style.scss";
import NavRoutes from "./routes/Routes";
import Header from "./pages/Homepage/components/header";
import Footer from "./pages/Homepage/components/footer";
import Segment from "./pages/Homepage/components/segments";
import SettingModal from "./pages/Homepage/components/setting";
import LoginModal from "./pages/Auth/Login/login";
import Chat from "./pages/Common/Chat/chat";
import { connect } from "react-redux";

function Layout({ settings, messengerState }) {
  const navbarRef = useRef(null);
  const [setting, setSetting] = React.useState({ ...settings });
  const [messenger, setMessenger] = React.useState({ ...messengerState });

  React.useEffect(() => {
    setSetting({ ...settings });
  }, [settings]);

  React.useEffect(() => {
    setMessenger({ ...messengerState });
  }, [messengerState]);

  return (
    <div className="mainContainer">
      {setting.isHeaderVisible ? <Header /> : null}
      <Segment isIconMode={true} />
      <LoginModal />
      <SettingModal />
      <NavRoutes navbarRef={navbarRef} />
      {setting.isHeaderVisible ? <Footer /> : null}
      {setting.isHeaderVisible ? <Chat isChatModalOpen={messenger.isMessengerModalOpen} /> : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("What", state);
  return {
    settings: state.setting,
    messengerState: state.messenger
  };
};

export default connect(mapStateToProps)(Layout);
