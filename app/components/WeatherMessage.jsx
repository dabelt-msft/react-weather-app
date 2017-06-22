var React = require('react');

var WeatherMessage = ({location, temp}) => {
  return (
      <h3 className="text-center">The Weather is {temp} degrees in {location}.</h3>
  )
}

module.exports = WeatherMessage;
