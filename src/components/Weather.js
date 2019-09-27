import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWeatherThunk } from "../store/weather";
import { getGeoThunk } from '../store/Geo'
import Geo from '../components/Geo'

class Weather extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // this.props.cityName ? this.props.getData(this.props.cityName) : this.props.getData('Washington')
        this.props.getGeo()
        this.props.getData(this.props.Geo.city)
    }

    render() {
        console.log('in weather', this.props.Geo)
        return (
            <div>
                {this.props.weather.main && this.props.Geo.city? <div>
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
    },
    getGeo: () => {
        dispatch(getGeoThunk())
    }
})

const mapStateToProps = state => ({
    weather: state.weather,
    Geo: state.Geo
})

const Weathers = connect(mapStateToProps, mapDispatchToProps)(Weather)

export default Weathers
