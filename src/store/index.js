import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import weather from './weather'
import Geo from './Geo'
import News from './News'
import Crypto from './Crypto'
import Stocks from './Stocks'

const reducer = combineReducers({ weather, Geo, News, Crypto, Stocks })
const middleware = composeWithDevTools(
    applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
)
const store = createStore(reducer, middleware)

export default store

