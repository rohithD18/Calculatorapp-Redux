import axios from "axios";

export const tempInCity = (data) => {
  return {
    type: "TEMP_IN_CITY",
    payload: data,
  };
};

export const fetchTempData = (city) => {
  return  (dispatch) => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=629c364a5f79414eb95104907220610&q=${city}&aqi=yes`
      )
      .then((res) => dispatch(tempInCity(res.data.current.temp_c)))
  }
}
