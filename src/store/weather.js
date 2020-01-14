import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_WEATHER = 'GET_WEATHER'
const NEW_WEATHER = 'NEW_WEATHER'


/**
 * ACTION CREATORS
 */
const getWeather = weather => ({ type: GET_WEATHER, weather })
const newWeather = newWeather => ({type: NEW_WEATHER, newWeather})

/**
 * THUNK CREATORS
 */

export const getWeatherThunk = (city) => {
    return async dispatch => {
        try {
            const { data } = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=27933f63744fc9386923b8f3982d9064`
            );
            dispatch(getWeather(data))
        } catch (err) {
            console.log(err)
        }
    }
}

export const getNewWeatherThunk = (newcity) => {
    return async dispatch => {
        try {
            const { data } = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${newcity}&units=imperial&appid=27933f63744fc9386923b8f3982d9064`
            );
            dispatch(newWeather(data))
        } catch (err) {
            console.log(err)
        }
    }
}

/**
 * INITIAL STATE
 */
const initialState = {
    weatherData: {},
    newWeather: {}
}

/**
 * REDUCER
 */
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_WEATHER:
            return action.weather
        case NEW_WEATHER:
            state.newWeather = action.newWeather
            return state
        default:
            return state
    }
}
