import axios from 'axios'

/**
 * ACTION TYPES
 */

const GET_NEWS = 'GET_NEWS'

/**
 * ACTION CREATORS
 */

const getNews = News => ({ type: GET_NEWS, News })
/**
 * THUNK CREATORS
 */
export const getNewsThunk = () => {
    return async dispatch => {
        try {
            const { data } = await axios.get(
              "https://newsapi.org/v2/top-headlines?country=us&apiKey=57336b07014742ae87037077423ffb3f"
            );
            dispatch(getNews(data))
        } catch (error) {
            console.log(error)
        }
    }
}


/**
 * INITIAL STATE
 */
const initialState = {
    News: {}
}

/**
 * REDUCER
 */
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_NEWS:
            return action.News
        default:
            return state
    }
}


