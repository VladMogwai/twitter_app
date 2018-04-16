import React, {Component} from 'react'
import TimelineTweet from './TimelineTweet.jsx'
import GridTweet from './GridTweet.jsx'

class TweetContainer extends Component {

  render() {
    let {tweets, loading, view} = this.props

    if (view == 'timeline') {
      return (
        <div className="tweet_container">
          {tweets.map((tweet, i) => (<TimelineTweet key={i} tweet={tweet}/>))}
       </div>
     )
    } else {
      return (
        <div className="tweet_container grid">
            {
              tweets.map((tweet, i) => (
                <GridTweet modifier={i % 3 === 0 ? 'big' : 'small'} key={i} i={i} tweet={tweet}/>
              ))
            }
        </div>
     )
    }
  }
}

export default TweetContainer
