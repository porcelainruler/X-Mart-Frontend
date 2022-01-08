export const messengerActions = {
  SEND_MESSAGE: "SEND_MESSAGE",
  RECEIVE_MESSAGE: "RECEIVE_MESSAGE",
  MODAL_OPEN_CLOSE: "MODAL_OPEN_CLOSE",
};

export const messengerActionCreators = {
  sendMessage: (message) => ({ type: messengerActions.SEND_MESSAGE, payload: { message } }),
  receiveMessage: (message) => ({ type: messengerActions.RECEIVE_MESSAGE, payload: { message } }),
  modalOpenClose: (isModalOpen) => ({ type: messengerActions.MODAL_OPEN_CLOSE, payload: { isModalOpen } }),
};
