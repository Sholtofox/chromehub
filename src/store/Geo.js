import axios from 'axios'

/**
 * ACTION TYPES
 */

const GET_GEO = 'GET_GEO'

/**
 * ACTION CREATORS
 */

const getGeo = Geo => ({ type: GET_GEO, Geo})
/**
 * THUNK CREATORS
 */
export const getGeoThunk = () => {
    return async dispatch => {
        try {
            const { data } = await axios.get(
              "https://api.ipgeolocation.io/ipgeo?apiKey=b1bc9fe620ab4ec88828d3b669951168"
            );
            dispatch(getGeo(data))
        } catch (error) {
            console.log(error)
        }
    }
}


/**
 * INITIAL STATE
 */
const initialState = {
    Geo: {}
}

/**
 * REDUCER
 */
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_GEO:
            return action.Geo
        default:
            return state
    }
}