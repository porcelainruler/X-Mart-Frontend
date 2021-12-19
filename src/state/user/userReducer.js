import {userActions} from './userAction';

const initialState = {
  profile: {
    id: -1,
    firstName: "",
    lastName: "",
    age: 0,
    email: "",
    addressType: "HOME",
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: -1,
    isPrime: false,
    isBanned: false,
    profileImagePath: "",
    isLoggedIn: false,
    jwtToken: "",
    subscribedToNewsLetter: false,
  },
};



const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.LOGIN:
      console.log("Login", action.payload.user);
      return {
        ...state,
        profile: action.payload.user,
      };
    case userActions.ADD_USER:
      return {
        ...state,
        profile: action.payload.user,
        formSubmitted: false, // after update user formsubmition reset
      };
    case userActions.UPDATE_USER:
      return {
        ...state,
        profile: action.payload.user,
        formSubmitted: false, // after update user formsubmition reset
      };
    case userActions.UPDATE_PROFILE_PICTURE:
      return {
        ...state,
        profile: {
          ...state.profile,
          profileImagePath: action.payload.image,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
