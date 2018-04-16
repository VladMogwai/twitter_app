import axios from 'axios';

export default {
    getTweets(data) {
      return axios.get('/tweets', {
        params: {
          value: data
        }
      })
    }
}
