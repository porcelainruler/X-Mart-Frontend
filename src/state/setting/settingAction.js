export const settingActions = {
  SAVE_SETTINGS: "SAVE_SETTINGS",
  RESTORE_DEFAULT: "RESTORE_DEFAULT",
};

export const settingActionCreators = {
  saveSetting: (setting) => ({ type: settingActions.SAVE_SETTINGS, payload: { setting } }),
  restoreSetting: (setting) => ({ type: settingActions.RESTORE_DEFAULT, payload: { setting } }),
};
