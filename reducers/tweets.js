import { createAction, createReducer } from 'redux-act';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as actions from '../actions/tweets.js'

const initialState = {
    loading: false,
    tweets: []
  }

export default createReducer({

  [actions.FetchTweetsStart]: state => ({ ...state, loading: true }),
  [actions.FetchTweetsOk]: (state, data) => ({ ...state, tweets: data, loading: false }),
  [actions.FetchTweetsFail]: state => ({ ...state, loading: false }),

  [actions.ClearTweets]: state => ({ ...state, loading: false, tweets: [] }),


}, initialState);
