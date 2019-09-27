import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getGeoThunk } from "../store/Geo";

class Geo extends Component {

    componentDidMount() {
        this.props.getData()
    }

    render() {
        console.log(this.props.Geo)
        return (
            <div>
                {this.props.Geo ? <p>{this.props.Geo.city}</p> : <p>getting there..</p>}
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
