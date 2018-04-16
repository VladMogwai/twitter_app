import React, { Component } from 'react'

class TimelineTweet extends Component {
  search(text) {
    if (text.length > 1) {
      this.props.search(text)
    }
  }

  render() {
    let {tweet} = this.props
    // console.log('tweet', tweet);
    return (
      <section className={'tweet timeline'}>
        <div className={'tweet_header timeline'}>
          <img src={tweet.user.profile_image_url_https}/>
          <span className={'tweet_name timeline'}>{tweet.user.name}</span>
        </div>
        <div>{tweet.text}</div>
       {tweet.extended_entities &&
         <div className={'tweet_pic timeline'} style={{backgroundImage: `url(${tweet.extended_entities.media[0].media_url_https})`}}></div>
       }
      </section>
    )
  }
}

export default TimelineTweet
