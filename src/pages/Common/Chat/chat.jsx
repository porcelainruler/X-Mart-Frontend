import React, { useRef } from "react";
import { connect, useDispatch } from "react-redux";
import { themeConfig } from "../../../constants/themeConfig";
import ChatIcon from "@mui/icons-material/Chat";
import CancelIcon from "@mui/icons-material/Cancel";
import SendIcon from "@mui/icons-material/Send";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton, TextField } from "@mui/material";
import { messengerActionCreators } from "../../../state/messenger/messengerAction";
import "../../../public/css/chat.css";

function Layout({ settings, messengerState, isChatModalOpen }) {
  const dispatch = useDispatch();
  const navbarRef = useRef(null);
  const [setting, setSetting] = React.useState({ ...settings });
  const [messenger, setMessenger] = React.useState({ ...messengerState });
  const messages = [
    { msgSide: "Anchor", content: "Hi There! I am Jack. Your smart assistant. Hope you are having a nice covid free day. How may I help you?" },
    { msgSide: "Client", content: "Hi Jack. I need a staff to help me through a payment Issue" },
    { msgSide: "Anchor", content: "Ohh!!! I am very sorry for the inconvenience caused. I will quickly connect you with our staff" },
    { msgSide: "Staff", content: "Hi Akshay, I am Surya, how may i assist you" },
  ];

  console.log("Messenger State:", messenger);

  React.useEffect(() => {
    setSetting({ ...settings });
  }, [settings]);

  React.useEffect(() => {
    setMessenger({ ...messengerState });
  }, [messengerState]);

  const chatIconClickHandler = () => {
    dispatch(messengerActionCreators.modalOpenClose({ isMessengerModalOpen: !messenger.isMessengerModalOpen }));
  };

  const chatSendClickHandler = () => {
    // Do Something
  };

  const MessageComp = ({ message }) => {
    console.log("Message Chat:", message);
    return message.msgSide === "Client" ? (
      <div
        className="ClientMessage"
        style={{
          backgroundColor: themeConfig[setting.theme].whiteColor,
          borderTopRightRadius: "10px",
          borderTopLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          marginBottom: "10px",
          width: "200px",
          marginRight: "auto",
          padding: "5px",
        }}
      >
        {message.content}
      </div>
    ) : (
      <div
        className="XMartMessage"
        style={{
          backgroundColor: themeConfig[setting.theme].whiteColor,
          borderTopRightRadius: "10px",
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
          marginBottom: "10px",
          width: "200px",
          marginLeft: "auto",
          padding: "5px",
        }}
      >
        {message.content}
      </div>
    );
  };

  return (
    <div className="chatContainer">
      {messenger.isMessengerModalOpen ? (
        <div
          style={{
            position: "fixed",
            zIndex: 10,
            bottom: 25,
            right: 25,
            height: "450px",
            width: "300px",
            borderTopRightRadius: "20px",
            borderBottomLeftRadius: "20px",
            backgroundColor: themeConfig[setting.theme].secondaryColor,
            borderStyle: "solid",
            borderColor: themeConfig[setting.theme].mainColor,
            display: "flex",
            flexDirection: "column",
            flexFlow: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="chatHeader" style={{ width: "100%", borderTopRightRadius: "18px", backgroundColor: themeConfig[setting.theme].mainColor }}>
            <div
              className="chatSubHeader"
              style={{
                height: "60px",
                width: "90%",
                display: "flex",
                flexDirection: "row",
                flexFlow: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row", flexFlow: "row", alignItems: "center", justifyContent: "space-between" }}>
                <IconButton
                  size="large"
                  aria-label="Click to login"
                  color="inherit"
                  onClick={chatIconClickHandler}
                  style={{ height: "50px", backgroundColor: themeConfig[setting.theme].mainColor, padding: "5px" }}
                >
                  <AccountCircleIcon style={{ color: themeConfig[setting.theme].whiteColor }} />
                </IconButton>
                <span style={{ color: themeConfig[setting.theme].whiteColor, fontWeight: "bold" }}>Jack</span>
              </div>
              <IconButton
                size="large"
                aria-label="Click to login"
                color="inherit"
                onClick={chatIconClickHandler}
                style={{ height: "50px", backgroundColor: themeConfig[setting.theme].mainColor }}
              >
                <CancelIcon style={{ color: themeConfig[setting.theme].whiteColor }} onClick={chatIconClickHandler} />
              </IconButton>
            </div>
          </div>

          <div
            className="chatMessages"
            style={{
              height: "300px",
              width: "90%",
              margin: "15px",
              borderStyle: "solid",
              overflowY: "scroll",
              borderColor: themeConfig[setting.theme].secondaryColor,
              backgroundColor: themeConfig[setting.theme].secondaryColor,
            }}
          >
            {messages.map((message) => {
              return <MessageComp message={message} />;
            })}
          </div>

          <div
            className="chatSendHeader"
            style={{
              height: "60px",
              width: "100%",
              borderBottomLeftRadius: "18px",
              backgroundColor: themeConfig[setting.theme].mainColor,
              borderStyle: "solid",
              borderColor: themeConfig[setting.theme].mainColor,
              display: "flex",
              flexDirection: "column",
              flexFlow: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="chatSendSubHeader"
              style={{
                height: "60px",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                flexFlow: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <textarea
                rows="5"
                col="40"
                placeholder="Message"
                type="text"
                name="name"
                className="chatInput"
                style={{
                  backgroundColor: themeConfig[setting.theme].secondaryColor,
                  height: "20px",
                  width: "200px",
                  borderRadius: "20px",
                  padding: "10px",
                  overflowY: "scroll",
                  marginLeft: "5px",
                  color: "white",
                }}
              />
              <IconButton
                size="large"
                aria-label="Click to login"
                color="inherit"
                onClick={chatSendClickHandler}
                style={{ height: "50px", backgroundColor: themeConfig[setting.theme].mainColor }}
              >
                <SendIcon style={{ color: themeConfig[setting.theme].whiteColor }} onClick={chatSendClickHandler} />
              </IconButton>
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={chatIconClickHandler}
          style={{
            position: "fixed",
            zIndex: 10,
            bottom: 25,
            right: 25,
            height: "50px",
            width: "50px",
            borderRadius: "50%",
            backgroundColor: themeConfig[setting.theme].mainColor,
            display: "flex",
            flexDirection: "column",
            flexFlow: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton size="large" aria-label="Click to login" color="inherit" onClick={chatIconClickHandler}>
            <ChatIcon style={{ color: "white" }} onClick={chatIconClickHandler} />
          </IconButton>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    settings: state.setting,
    messengerState: state.messenger,
  };
};

export default connect(mapStateToProps)(Layout);
