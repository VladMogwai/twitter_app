import { combineReducers } from 'redux'
import tweetState from '../reducers/tweets.js'

const rootReducer = combineReducers({
    tweetState
})

export default rootReducer
