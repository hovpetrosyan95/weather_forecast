import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./WeatherApp.scss";
import DayList from "./components/DaysList";
import SelectedDay from "./components/SelectedDay";
import City from "./components/City";
import { getForecastData } from "./actions/weather/getForecastData";
import { Spin } from "antd";
import PropTypes from "prop-types";

function WeatherApp(props) {
  const { city, forecastData, getForecastData } = props;
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    if (city.name) {
      getForecastData({
        // eslint-disable-next-line no-undef
        route: `/${city.lat},${city.lng}?units=si`
      });
    }
  }, [city]);

  useEffect(() => {
    setIsLoading(false);
  }, [forecastData]);

  return (
    <div className="main">
      <div className="header">
        <h1>Weather Forecast</h1>
        <img src={logo} className="app-logo" alt="logo" />
        <City />
        {!isLoading ? (
          <React.Fragment>
            <DayList forecastData={forecastData} />

            <SelectedDay />
          </React.Fragment>
        ) : (
          <Spin className="spin" />
        )}
      </div>
    </div>
  );
}

WeatherApp.propTypes = {
  city: PropTypes.object.isRequired,
  forecastData: PropTypes.array.isRequired,
  getForecastData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  forecastData: state.weather.forecastData,
  city: state.city.current
});

const mapDispatchToProps = dispatch => ({
  getForecastData: params => dispatch(getForecastData(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherApp);
