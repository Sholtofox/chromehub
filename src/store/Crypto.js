import axios from 'axios'

/**
 * ACTION TYPES
 */

const GET_CRYPTO = 'GET_CRYPTO'

/**
 * ACTION CREATORS
 */

const getCrypto = Crypto => ({ type: GET_CRYPTO, Crypto })
/**
 * THUNK CREATORS
 */
export const getCryptoThunk = () => {
    return async dispatch => {
        try {
            const { data } = await axios.get(
                "https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=27AD348D-1B42-4D67-983F-03A78E5A49EF"
            );
            dispatch(getCrypto(data))
        } catch (error) {
            console.log(error)
        }
    }
}

/**
 * INITIAL STATE
 */
const initialState = {
    Crypto: {}
}

/**
 * REDUCER
 */
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CRYPTO:
            return action.Crypto
        default:
            return state
    }
}