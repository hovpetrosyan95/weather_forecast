export const weather = (
  state = { forecastData: [], selectedDay: {} },
  action
) => {
  const { type, payload } = action;
  const { forecastData } = state;

  switch (type) {
    case "GET_FORECAST_DATA":
      return {
        selectedDay: payload[0],
        forecastData: payload
      };
    case "SELECT_DAY": {
      return {
        ...state,
        selectedDay: forecastData.find(item => item.time === payload)
      };
    }
    default:
      return state;
  }
};
