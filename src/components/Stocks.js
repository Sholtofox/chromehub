import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getStocksThunk } from "../store/Stocks"

class Stocks extends Component {

    componentDidMount() {
        this.props.getData()
    }

    render() {
        const nuts = this.props.Stocks['Realtime Currency Exchange Rate']
        
        return (
            <div className="stocks">
                {nuts ? 
                <div>
                        <p> Incoming currency: {nuts['1. From_Currency Code']}, {nuts['2. From_Currency Name']}</p> 
                        <p> To Currency: {nuts['3. To_Currency Code']}, {nuts['4. To_Currency Name']}</p>
                        <p> Exchange Rate: {nuts['5. Exchange Rate']}</p>
                        <p> Price per dollar: {nuts['9. Ask Price']}</p>
                        <p> Last Updated: {nuts['6. Last Refreshed']}</p>
                    </div>
                : <p>getting there</p>}

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getData: () => {
        dispatch(getStocksThunk())
    }
})

const mapStateToProps = state => ({
    Stocks: state.Stocks
})

const Stocky = connect(mapStateToProps, mapDispatchToProps)(Stocks)

export default Stocky
