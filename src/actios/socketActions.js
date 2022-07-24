export const getSocket = (socket, online) => {
  return {
    type: 'GET_SOCKET',
    payload: {
      socket,
      online,
    },
  };
};
