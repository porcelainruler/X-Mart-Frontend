import { settingActions } from "./settingAction";

// TODO: Make constant for defaults
let initialState = {
  isSettingModalOpen: false,
  theme: "normal",
  isSegmentVisible: true,
  isHeaderVisible: true,
  fontSize: "medium",
};

const settingReducer = (state = initialState, action) => {
  switch (action.type) {
    case settingActions.SAVE_SETTINGS:
      console.log("Setting", action.payload.setting, {
        ...state,
        ...action.payload.setting,
      });
      return {
        ...state,
        ...action.payload.setting,
      };
    case settingActions.RESTORE_DEFAULT:
      console.log("Setting Restore Default", action.payload.setting, {
        ...state,
        ...action.payload.setting,
      });
      return {
        ...state,
        ...action.payload.setting,
      };
    default:
      return state;
  }
};

export default settingReducer;
