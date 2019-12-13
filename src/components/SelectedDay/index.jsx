import React from "react";
import { connect } from "react-redux";
import { Statistic, Row, Col } from "antd";
import "./index.scss";
import PropTypes from "prop-types";

function SelectedDay(props) {
  const {
    temperatureMin,
    temperatureMax,
    summary,
    precipIntensity,
    dewPoint,
    windSpeed,
    pressure,
    visibility,
    humidity
  } = props.selectedDay;

  return (
    <div className="selected-day">
      <Row gutter={16}>
        <Col span={12}>
          <Statistic
            title="Max Temperature"
            value={`${temperatureMax}  C`}
            style={{ color: "white" }}
          />
        </Col>
        <Col span={12}>
          <Statistic title="Min Temperature" value={`${temperatureMin}  C`} />
        </Col>
        <Col span={12}>
          <Statistic title="Hummidity" value={`${humidity * 100} %`} />
        </Col>
        <Col span={12}>
          <Statistic title="Visibility" value={`${visibility} Km`} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Pressure"
            value={`${Math.ceil(pressure * 0.750061683)} mmHg`}
          />
        </Col>
        <Col span={12}>
          <Statistic title="Dew Point" value={`${dewPoint} C`} />
        </Col>
        <Col span={12}>
          <Statistic title="Wind Speed" value={`${windSpeed} m/s`} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Precipitation Intensity"
            value={`${precipIntensity} mm/h`}
          />
        </Col>
        <Statistic title="Summary" value={summary} />
      </Row>
    </div>
  );
}

SelectedDay.propTypes = {
  selectedDay: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  selectedDay: state.weather.selectedDay
});

export default connect(mapStateToProps, null)(SelectedDay);
