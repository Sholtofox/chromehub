import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getGeoThunk } from "../store/Geo";
import Weather from './Weather'
class Geo extends Component {

    componentDidMount() {
        this.props.getData()
    }

    render() {
        console.log('in geo', this.props.Geo.district)
        return (
            <div>
                {this.props.Geo.district ? <Weather cityName={this.props.Geo.city} /> : <p>getting there..</p>}  
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getData: () => {
        dispatch(getGeoThunk())
    }
})

const mapStateToProps = state => ({
    Geo: state.Geo
})

const Gpro = connect(mapStateToProps, mapDispatchToProps)(Geo)

export default Gpro
