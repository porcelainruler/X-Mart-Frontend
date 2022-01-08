import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import profile from "./user/userReducer";
import setting from "./setting/settingReducer";
import messenger from "./messenger/messengerReducer";

const rootReducer = combineReducers({
  user: profile,
  setting: setting,
  messenger: messenger,
});

const configureStore = () => {
  return createStore(rootReducer, compose(applyMiddleware(thunk)));
};

export default configureStore;
