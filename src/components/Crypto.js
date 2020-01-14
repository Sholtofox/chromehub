import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCryptoThunk } from "../store/Crypto";
import Stocks from '../components/Stocks'


class Crypto extends Component {
    componentDidMount() {
        this.props.getData()
    }


    render() {
        console.log('in crypto',this.props)
        return (
            <div className="crypto">
            <div >
              {this.props.Crypto.asset_id_base ? (
                <div>
                  <p>{this.props.Crypto.asset_id_base}</p>
                  <p>
                    ${this.props.Crypto.rate} at {this.props.Crypto.time}
                  </p>
                </div>
              ) : (
                <p>
                  The Api in use has exceeded requests. Please contact
                  webmaster.
                </p>
              )}
              <div>
                  <hr />
                <Stocks />
              </div>
            </div>
          </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getData: () => {
        dispatch(getCryptoThunk())
    }

})

const mapStateToProps = state => ({
    Crypto: state.Crypto
})

const CryptoComp = connect(mapStateToProps, mapDispatchToProps)(Crypto)

export default CryptoComp
