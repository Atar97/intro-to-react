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
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=3b865174016d7ba667d628015d46ae84`,
      method: "GET",
      dataType: "JSONP"
    }).then((res) => {
      console.log(res.weather);
      console.log(this);
    });
  //
  // let xmlhttp = new XMLHttpRequest();
  //
  //     xmlhttp.onreadystatechange = function() {
  //         if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
  //            if (xmlhttp.status == 200) {
  //                console.log(xmlhttp.response);
  //            }
  //            else if (xmlhttp.status == 400) {
  //               alert('There was an error 400');
  //            }
  //            else {
  //                alert('something else other than 200 was returned');
  //            }
  //         }
  //     };
  //
  //     xmlhttp.open("GET", `api.openweathermap.org/data/2.5/weather?q=${city}&APPID=3b865174016d7ba667d628015d46ae84`, true);
  //     xmlhttp.send();
  //
  }

}

export default Weather;
