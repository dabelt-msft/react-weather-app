var React = require('react');

var WeatherMessage = ({location, temp}) => {
  return (
      <h3>The Weather is {temp} degs is {location}</h3>
  )
}

module.exports = WeatherMessage;
