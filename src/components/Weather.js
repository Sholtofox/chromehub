import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWeatherThunk, getNewWeatherThunk } from "../store/weather";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      city: "",
      cityData: {},
      toggler: false
    };
  }

  componentDidMount() {
    // this.props.cityName ? this.props.getData(this.props.cityName) : this.props.getData('Washington')
    // this.props.getGeo()
    this.props.getData(this.props.cityName);
    this.props.grabShit(this.state.city)
  }
  togglerer = () => {
      this.setState({toggler: !this.state.toggler})
  }

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing });
  };

  onChange = (e) => {
      this.setState({ city: e.target.value })
    };

    handleSubmit = async (e) => {
        try {
            e.preventDefault()

            await this.props.grabShit(this.state.city)
            await this.props.weather.newWeather
        } catch (error) {
            console.log('err', error)
        }

    }

  render() {
    // console.log("in weather", this.props.news);
    return (
      <div className="farts">
        {this.props.weather.main && this.props.cityName ? (
          <div className="weatherList">
            <p>
              It is {this.props.weather.main.temp}° in {this.props.weather.name}
            </p>
            <p>
              Today, there will be a high of {this.props.weather.main.temp_max}°
              and a low of {this.props.weather.main.temp_min}°
            </p>

            {
                this.props.weather.newWeather ? (
                <div>
                  <p>
                      It is {this.props.weather.newWeather.main.temp_max} in {this.props.weather.newWeather.name}
                  </p>
                <div>
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    name="city"
                    value={this.state.city}
                    onChange={this.onChange}
                  />
                  <button className="editweather" type="submit">
                    Add City
                  </button>
                </form>
              </div>
              </div>


            ) : (
              <p>
                No city selected.
                <button className="editweather" onClick={this.toggleEdit}>
                  Add City
                </button>
              </p>
            )}
            {this.state.editing ? (
              <div>
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    name="city"
                    value={this.state.city}
                    onChange={this.onChange}
                  />
                  <button className="editweather" type="submit">
                    Add City
                  </button>
                </form>

                <p>Adding City</p>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        ) : (
          <p>loading...</p>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    getData: (city) => {
        dispatch(getWeatherThunk(city))
    },
    grabShit: (newCity) => {
        dispatch(getNewWeatherThunk(newCity))
    }

})

const mapStateToProps = state => ({
    weather: state.weather,
    newWeather: state.newWeather
})

const Weathers = connect(mapStateToProps, mapDispatchToProps)(Weather)

export default Weathers
