import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWeatherThunk } from "../store/weather";

class Weather extends Component {

    componentDidMount() {
        this.props.getData('London')
    }

    render() {
        return (
            <div>
                {this.props.weather.main ? <div>
                    <p>It is {this.props.weather.main.temp}° in {this.props.weather.name}</p>
                    <p>Today, there will be a high of {this.props.weather.main.temp_max}° and a low of {this.props.weather.main.temp_min}°</p>
                    <p>{}</p>
                    </div> : <p>loading...</p>
                }

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getData: (city) => {
        dispatch(getWeatherThunk(city))
    }
})

const mapStateToProps = state => ({
    weather: state.weather
})

const Weathers = connect(mapStateToProps, mapDispatchToProps)(Weather)

export default Weathers
