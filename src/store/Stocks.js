import axios from 'axios'

/**
 * ACTION TYPES
 */

const GET_STOCKS = 'GET_STOCKS'

/**
 * ACTION CREATORS
 */

const getStocks = Stocks => ({ type: GET_STOCKS, Stocks })
/**
 * THUNK CREATORS
 */
export const getStocksThunk = () => {
    return async dispatch => {
        try {
            const { data } = await axios.get(
              "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=6LVP5IK2PC1YPTQ3"
            );
            dispatch(getStocks(data))
        } catch (error) {
            console.log(error)
        }
    }
}

/**
 * INITIAL STATE
 */
const initialState = {
    Stocks: {}
}

/**
 * REDUCER
 */
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_STOCKS:
            return action.Stocks
        default:
            return state
    }
}