import { Box, Modal, Typography, Button } from "@mui/material";
import React, { Component, Fragment, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { settingActionCreators } from "../../../state/setting/settingAction";
import { colorConfig } from "../../../constants/colorConfig";

const SettingModal = ({ settings }) => {
  const dispatch = useDispatch();
  const [setting, setSetting] = React.useState({ ...settings });
  console.log("Setting", settings, setting);

  useEffect(() => {
    setSetting({ ...settings });
  }, [settings]);

  const handleModalClose = () => {
    // TODO: To be implemented
    dispatch(settingActionCreators.saveSetting({ ...setting, isSettingModalOpen: false }));
  };

  return (
    <Modal
      open={setting.isSettingModalOpen}
      onClose={handleModalClose}
      style={{
        backgroundColor: "white",
        height: "400px",
        width: "300px",
        position: "absolute",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "auto",
        marginBottom: "auto",
        left: 0,
        right: 0,
        display: "flex",
        flexDirection: "column",
        flexFlow: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        zIndex: 1301,
        borderRadius: "10px",
      }}
    >
      <Box
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          flexFlow: "column",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
          borderStyle: "solid",
          borderColor: colorConfig.mainColor,
          borderRadius: "10px",
        }}
      >
        <Typography id="modal-modal-title" variant="h5" component="h2">
          Settings
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Under Construction
        </Typography>
        <Button>Save Settings</Button>
      </Box>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  console.log("Setting Comp State:", state);
  return {
    settings: state.setting,
  };
};

export default connect(mapStateToProps)(SettingModal);
