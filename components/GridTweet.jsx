import React, { Component } from 'react'

class GridTweet extends Component {
  search(text) {
    if (text.length > 1) {
      this.props.search(text)
    }
  }

  render() {
    let {tweet, modifier} = this.props
    let img = tweet.extended_entities ? tweet.extended_entities.media[0].media_url_https : 'https://help.twitter.com/content/dam/help-twitter/brand/logo.png'
    let text = tweet.text.length > 40 && modifier == 'small' ? `${tweet.text.slice(0,25)}...` : tweet.text

    return (
      <section className={`tweet grid ${modifier}` } style={{backgroundImage: `url(${img})`, fontSize: '13px'}}>
        <div className={'tweet_header grid'}>
          <span className={'tweet_name grid'}>{tweet.user.name}</span>
          <div className={'tweet_text grid'}>{text}</div>
        </div>
      </section>
    )
  }
}

export default GridTweet
