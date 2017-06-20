var React = require('react');

var WeatherMessage = React.createClass({
  render: function(){
    var {location, temp} = this.props;
    return (
        <h3>The Weather is {temp} degs is {location}</h3>
    )
  }
});

module.exports = WeatherMessage;
