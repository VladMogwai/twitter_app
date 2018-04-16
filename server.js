import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config';
import twitterApp from './twitter_app.js';
import bodyParser from 'body-parser';


let app = new (require('express'))()
let port = 4000

let compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get(`/tweets`, function(req, res) {
  let url = req.url
  let value = url.split("=", 2)[1];

  async function main() {
    let tweets = await twitterApp(value)
    res.send(tweets);
  }
  main()
})

app.listen(port, function(error) {
  if (!error) console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port)
   else console.log(error);
})
