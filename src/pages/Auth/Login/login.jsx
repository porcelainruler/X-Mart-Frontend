import { Box, Modal, Typography, Button, ToggleButtonGroup, ToggleButton, IconButton, Chip, Divider, TextField, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { Component, Fragment, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { settingActionCreators } from "../../../state/setting/settingAction";
import { colorConfig } from "../../../constants/colorConfig";
import { FamilyRestroomOutlined } from "@mui/icons-material";
import loginUI from "../../../public/images/loginUI.png";
import "../../../public/css/login.css";
import { makeStyles } from "@mui/styles";
import { themeConfig } from "../../../constants/themeConfig";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

const useStyles = makeStyles((theme) => ({
  selected: {
    "&&": {
      backgroundColor: "#7900FF",
      color: "#ffffff",
    },
  },
  hover: {
    "&&": {
      backgroundColor: "#7900FF",
      color: "#ffffff",
    },
  },
}));

const LoginModal = ({ settings }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [setting, setSetting] = React.useState({ ...settings });
  const [activeCase, setActiveCase] = React.useState(false);

  useEffect(() => {
    setSetting({ ...settings });
  }, [settings]);

  const handleModalClose = () => {
    dispatch(settingActionCreators.saveSetting({ ...setting, isSettingModalOpen: false, isLoginModalOpen: false }));
  };

  const handleChange = () => {
    if (setting.loginModalOption === "login") {
      setSetting({
        ...setting,
        loginModalOption: "register",
      });
      console.log(setting);
    } else {
      setSetting({
        ...setting,
        loginModalOption: "login",
      });
      console.log(setting);
    }
  };

  const handleUserLoginTypeChange = () => {
    // Do Something
  };

  return (
    <Modal
      open={setting.isLoginModalOpen}
      onClose={handleModalClose}
      style={{
        backgroundColor: "white",
        height: "540px",
        width: "800px",
        position: "absolute",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "auto",
        marginBottom: "auto",
        left: 0,
        right: 0,
        display: "flex",
        flexDirection: "row",
        flexFlow: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        zIndex: 1301,
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexFlow: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          zIndex: 1301,
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "50%",
            display: "flex",
            flexDirection: "column",
            flexFlow: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
            marginTop: "15px",
            marginBottom: "15px",
          }}
        >
          <ToggleButtonGroup color="primary" value={setting.loginModalOption} exclusive onChange={handleChange}>
            <ToggleButton value="login" classes={{ selected: classes.selected }}>
              Login
            </ToggleButton>
            <ToggleButton value="register" classes={{ selected: classes.selected }}>
              Register
            </ToggleButton>
          </ToggleButtonGroup>

          {setting.loginModalOption === "login" ? (
            <div
              style={{
                width: "100%",
                height: "70%",
                display: "flex",
                flexDirection: "column",
                flexFlow: "column",
                justifyContent: "top",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <Typography
                id="modal-modal-title"
                variant="h5"
                component="h2"
                style={{
                  fontFamily: "cursive",
                  fontSize: themeConfig.normal.fontSize.large.header,
                  fontWeight: "bolder",
                  color: themeConfig.normal.mainColor,
                  marginBottom: "20px",
                }}
              >
                Login
              </Typography>
              <div style={{ width: "100%" }}>
                <div style={{ width: "100%" }}>
                  <Divider>
                    <Chip label="Login with your Social Media Account" />
                  </Divider>
                </div>
                <div style={{ display: "flex", flexDirection: "row", flexFlow: "row", justifyContent: "space-evenly", alignItems: "center" }}>
                  <IconButton size="large" aria-label="Click to login" color="inherit">
                    <GoogleIcon />
                  </IconButton>
                  <IconButton size="large" aria-label="Click to login" color="inherit">
                    <FacebookIcon />
                  </IconButton>
                  <IconButton size="large" aria-label="Click to login" color="inherit">
                    <LinkedInIcon />
                  </IconButton>
                </div>
                <div style={{ width: "100%" }}>
                  <Divider>
                    <Chip label="Login with your mobile" />
                  </Divider>
                </div>
              </div>
              <div
                style={{
                  height: "200px",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  flexFlow: "column",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <select
                  style={{
                    width: "100px",
                    height: "40px",
                    borderRadius: "20px",
                    textAlign: "center",
                    fontWeight: "normal",
                    fontSize: themeConfig.normal.fontSize.medium.normal,
                    backgroundColor: themeConfig.normal.mainColor,
                    color: themeConfig.normal.whiteColor,
                  }}
                >
                  <option selected value="Customer">
                    Customer
                  </option>
                  <option value="Shop">Shop</option>
                  <option value="Admin">Admin</option>
                  <option value="Delivery">Delivery</option>
                  <option value="Staff">Staff</option>
                </select>
                <TextField id="outlined-basic" label="Email or Phone" variant="outlined" />
                <TextField id="outlined-basic" label="Password" variant="outlined" />
              </div>
              <Button>Submit</Button>
            </div>
          ) : (
            <div
              style={{
                width: "100%",
                height: "70%",
                display: "flex",
                flexDirection: "column",
                flexFlow: "column",
                justifyContent: "top",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <Typography
                id="modal-modal-title"
                variant="h5"
                component="h2"
                style={{
                  fontFamily: "cursive",
                  fontSize: themeConfig.normal.fontSize.large.header,
                  fontWeight: "bolder",
                  color: themeConfig.normal.mainColor,
                  marginBottom: "20px",
                }}
              >
                Register
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Under Construction
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Under Construction
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Under Construction
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Under Construction
              </Typography>
              <Button>Submit</Button>
            </div>
          )}
        </div>
        <div
          style={{
            height: "100%",
            width: "50%",
            display: "flex",
            flexDirection: "column",
            flexFlow: "column",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
        >
          <img src={loginUI} style={{ width: "100%", height: "100%", borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }}></img>
        </div>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    settings: state.setting,
  };
};

export default connect(mapStateToProps)(LoginModal);
