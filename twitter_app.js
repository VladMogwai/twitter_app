import Twitter from 'twitter';

let twitterApp = async function(value) {
  let client = new Twitter({
    consumer_key: 'arSoJJZbFEB74nbEq4eC6KXsz',
    consumer_secret: 'HykoD1xZtmTduEUNn1ylg6a5qtUDBrVmyBgF8lxIk8ZtdQultO',
    access_token_key: '702041066481065984-gquC7n5qpOLAHikOCtUBm1xctnlAEgI',
    access_token_secret: 'EOD1B9gJxcubR5GxJI9TXGm5xIFc5ufh4JUNpc0HxPDsF'
  });

  let params = {screen_name: 'Medvedington'};
  let url = `search/tweets.json?q=${value}&result_type=mixed&count=100`

   return client.get(url, params).then(tweets => tweets)
}

export default twitterApp;
