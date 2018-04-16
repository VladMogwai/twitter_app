import { createAction } from 'redux-act'
import ajax from '../utils/ajax'

export const FetchTweetsStart = createAction('fetching tweets')
export const FetchTweetsOk = createAction('fetching tweets ok', data => data)
export const FetchTweetsFail = createAction('fetching tweets error', error => error)
export const FetchTweets = (data) => (dispatch) => {
  dispatch(FetchTweetsStart())
  ajax.getTweets(data)
  .then((data) => {
    dispatch(FetchTweetsOk(data.data.statuses))
  })
  .catch(err => {
        console.log('error', err)
        dispatch(FetchTweetsFail(err))
      });
}

export const ClearTweets = createAction('clear tweets')

export default {
  FetchTweets,
  ClearTweets
}
