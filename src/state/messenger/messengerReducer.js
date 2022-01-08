import { messengerActions } from "./messengerAction";

// TODO: Make constant for defaults
let initialState = {
  isMessengerModalOpen: false,
  messages: [], // message Structure {messageState : [Anchor: One Way [REST or at Frontend], Active [Socket Backend]] , messageSender {}, messageReceiver {}}
};

const messengerReducer = (state = initialState, action) => {
  switch (action.type) {
    case messengerActions.SEND_MESSAGE:
      console.log("Messenger Called:", action);
      return {
        ...state,
        messages: state.messages.push[action.payload.message],
      };
    case messengerActions.RECEIVE_MESSAGE:
      return {
        ...state,
        messages: state.messages.push[action.payload.message],
      };
    case messengerActions.MODAL_OPEN_CLOSE:
        console.log("PP", action.payload);
      return {
        ...state,
        ...action.payload.isModalOpen,
      };
    default:
      return state;
  }
};

export default messengerReducer;
