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
            {nuts ? (
              <div>
                <p>
                  {" "}
                  Incoming currency: {nuts["1. From_Currency Code"]},{" "}
                  {nuts["2. From_Currency Name"]}
                </p>
                <p>
                  {" "}
                  To Currency: {nuts["3. To_Currency Code"]},{" "}
                  {nuts["4. To_Currency Name"]}
                </p>
                <p> Exchange Rate: {nuts["5. Exchange Rate"]}</p>
                <p> Price per dollar: {nuts["9. Ask Price"]}</p>
                <p> Last Updated: {nuts["6. Last Refreshed"]}</p>

              </div>
            ) : (
              <p>getting there</p>
            )}
            <hr />
            <div className="weblinks">
              <p>
                  <a href="https://www.facebook.com">
                            <i class="fab fa-facebook-square" />
                  </a>
                
              </p>
              <p>
                <a href="https://www.youtube.com">
                            <i class="fab fa-youtube-square"></i>
                </a>
              </p>
              <p>
                  <a href="https://www.spotify.com">
                            <i class="fab fa-spotify"></i>
                  </a>
              </p>

              <p>
                  <a href="https://www.twitter.com">
                            <i class="fab fa-twitter"></i>
                  </a>
              </p>

              <p>
                <a href="https://www.instagram.com">
                            <i class="fab fa-instagram"></i>
                </a>
              </p>
              <p>
                <a href="https://www.github.com">
                        <i class="fab fa-github"></i>
                </a>
              </p>
            </div>
          </div>
        );
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
