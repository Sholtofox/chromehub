import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWeatherThunk } from "../store/weather";

class Weather extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // this.props.cityName ? this.props.getData(this.props.cityName) : this.props.getData('Washington')
        // this.props.getGeo()
        this.props.getData(this.props.cityName)
    }

    render() {
        console.log('in weather', this.props.news)
        return (
            <div className="farts">
                {this.props.weather.main && this.props.cityName? 
                <div className='weatherList'>

                    <p>It is {this.props.weather.main.temp}° in {this.props.weather.name}</p>
                    <p>Today, there will be a high of {this.props.weather.main.temp_max}° and a low of {this.props.weather.main.temp_min}°</p>
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
