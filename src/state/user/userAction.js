export const userActions = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  REGISTER: "REGISTER",
  SUBSCRIBE: "SUBSCRIBE",
  CHANGE_PASSWORD: "CHANGE_PASSWORD",
  FORGOT_PASSWORD: "FORGOT_PASSWORD",
  ADD_USER: "ADD_USER",
  UPDATE_USER: "UPDATE_USER",
  UPDATE_PROFILE_PICTURE: "UPDATE_PROFILE_PICTURE",
};

export const userActionCreators = {
  register: (user) => ({ type: userActions.REGISTER, payload: { user } }),
  login: (user) => ({ type: userActions.LOGIN, payload: { user } }),
  logout: (user) => ({ type: userActions.LOGOUT, payload: { user } }),
  subscribe: (user) => ({ type: userActions.LOGOUT, payload: { user } }),
  changePassword: (user) => ({ type: userActions.LOGOUT, payload: { user } }),
  forgetPassword: (user) => ({ type: userActions.LOGOUT, payload: { user } }),
};
