export const city = (
  state = {
    current: {}
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case "CHANGE_CITY":
      return {
        current: payload
      };
    default:
      return state;
  }
};
