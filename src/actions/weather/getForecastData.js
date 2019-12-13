import requestMaker from "../../utils/requestMaker";

export const getForecastData = params => {
  return async dispatch => {
    try {
      const { daily } = await requestMaker(params);
      dispatch(getForecastDataAction(daily.data));
    } catch (err) {
      alert("Smth went wrong!");
    }
  };
};

const getForecastDataAction = payload => ({
  type: "GET_FORECAST_DATA",
  payload
});
