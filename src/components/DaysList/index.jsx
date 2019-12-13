import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Day from "../Day";
import "./index.scss";

function DaysList(props) {
  const { forecastData, selectedDay } = props;

  const dataForRender = forecastData.map(day => (
    <Day
      data={day}
      key={day.time}
      isSelected={day.time === selectedDay.time ? true : false}
    />
  ));
  return <div className="days-list">{dataForRender}</div>;
}

DaysList.propTypes = {
  forecastData: PropTypes.array.isRequired,
  selectedDay: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  forecastData: state.weather.forecastData,
  selectedDay: state.weather.selectedDay,
  city: state.city.current
});

export default connect(mapStateToProps)(DaysList);
