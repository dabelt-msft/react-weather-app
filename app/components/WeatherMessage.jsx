var React = require('react');

var WeatherMessage = (props) => {
  var {location, temp} = props;
  return (
      <h3>The Weather is {temp} degs is {location}</h3>
  )
}

module.exports = WeatherMessage;
