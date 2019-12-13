import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { changeCity } from "../../actions/city/changeCity";
import { Select } from "antd";
import "./index.scss";
import PropTypes from "prop-types";

const { Option } = Select;

const citiesList = [
  {
    name: "Yerevan",
    lat: "40.179188",
    lng: "44.499104"
  },
  {
    name: "Moscow",
    lat: "55.755825",
    lng: "37.617298"
  },
  {
    name: "Paris",
    lat: "48.856613",
    lng: "2.352222"
  },
  {
    name: "Washington",
    lat: "47.751076",
    lng: "-120.740135"
  },
  {
    name: "Tbilisi",
    lat: "41.715137",
    lng: "44.827095"
  },
  {
    name: "Berlin",
    lat: "52.520008",
    lng: "13.404954"
  }
];

function City(props) {
  const [cities, setCities] = useState(citiesList);
  const { changeCity, city } = props;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(data => {
      const currentCity = {
        name: "Current Place",
        lat: data.coords.latitude,
        lng: data.coords.longitude
      };
      setCities([currentCity, ...cities]);
      changeCity(currentCity);
    });
  }, []);

  const onChange = name => {
    changeCity(cities.find(city => city.name === name));
  };

  return (
    <div className="city">
      <Select
        style={{ width: 100 }}
        placeholder="city"
        value={city.name}
        optionFilterProp="children"
        onChange={onChange}
        filterOption={(input, option) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {cities.map(({ name }) => (
          <Option value={name} key={name}>
            {name}
          </Option>
        ))}
      </Select>
    </div>
  );
}

City.propTypes = {
  changeCity: PropTypes.func.isRequired,
  city: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  city: state.city.current
});

const mapDispatchToProps = dispatch => ({
  changeCity: city => dispatch(changeCity(city))
});

export default connect(mapStateToProps, mapDispatchToProps)(City);
