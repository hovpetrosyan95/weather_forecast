import React from "react";
import { connect } from "react-redux";
import { selectDay } from "../../actions/weather/selectDay";
import { Card } from "antd";
import moment from "moment";
import "./index.scss";
import PropTypes from "prop-types";
// eslint-disable-next-line no-undef
const weatherSvgs = require.context("../../assets/weather", true, /\.svg$/);

function Day(props) {
  const { time, temperatureMax, temperatureMin, icon } = props.data;

  return (
    <Card
      bordered={false}
      className={props.isSelected ? "card selected-card" : "card"}
      onClick={() => props.selectDay(time)}
    >
      <div>
        {moment.unix(time).format("D")} {moment.unix(time).format("MMM")}
      </div>
      <div>
        <img
          src={weatherSvgs(`./${icon}.svg`)}
          width="40"
          height="40"
          alt="Oops"
        ></img>
      </div>
      <div>
        Max: <span className="max">{Math.ceil(temperatureMax)} &deg; C</span>
      </div>
      <div>
        Min: <span className="min">{Math.ceil(temperatureMin)} &deg; C</span>
      </div>
      <div className="weekday">{moment.unix(time).format("ddd")}</div>
    </Card>
  );
}

Day.propTypes = {
  data: PropTypes.object.isRequired,
  isSelected: PropTypes.bool.isRequired,
  selectDay: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  selectDay: time => dispatch(selectDay(time))
});

export default connect(null, mapDispatchToProps)(Day);
