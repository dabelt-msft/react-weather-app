var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    };
  },
  //builtin method to react
  componentDidMount: function(){
    //.location after query is changed as needed
    var location = this.props.location.query.location;

    if (location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  //builtin method to react
  componentWillReceiveProps: function(newProps){
    var location = newProps.location.query.location;

    if (location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  handleSearch: function(location){
    var that = this;
    this.setState({
      isLoading : true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    },function(err){
      that.setState({
        isLoading: false,
        errorMessage: err.message
      });
    });
  },
  render: function(){

    var {isLoading, location, temp, errorMessage} = this.state;

    function renderMessage(){
      if (isLoading){
        return <h3 className="text-center">Fetching Weather...</h3>;
      } else if (temp && location){
        return <WeatherMessage location={location} temp={temp}/>
      }
    }

    function renderError(){
      if (typeof errorMessage === 'string'){
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }
    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}

      </div>
    )
  }
})

module.exports = Weather;
