import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.getWeather("San Francisco");
  }
  render() {
    return null;
  }

  getWeather(city) {
    $.ajax({
      url: `api.openweathermap.org/data/2.5/weather?q=${city}&APPID=3b865174016d7ba667d628015d46ae84`,
      method: "GET",
      dataType: "JSONP"
    }).then((res) => console.log(res));
  }
}

export default Weather;
