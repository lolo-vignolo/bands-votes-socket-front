export const socketReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_SOCKET':
      return {
        ...state,
        socket: action.payload.socket,
        online: action.payload.online,
      };
    default:
      return state;
  }
};
