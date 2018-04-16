import React, { Component } from 'react'
import CircularProgress from 'material-ui/CircularProgress';
import TweetContainer from './TweetContainer.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import PrevArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import NextArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

let current_page = 1;
let tweets_per_page = 10;

class MainSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: '',
      cuttenTweets: [],
      prev: true,
      next: false
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.tweets.length) {
       this._changePage(1, nextProps.tweets)
    } else {
      this.setState({cuttenTweets: [], content: 'nothing found sorry'})
    }
  }

  _prevPage() {
    let tweets = this.props.tweets
      if (current_page > 1) {
          current_page--;
          this._changePage(current_page, tweets);
      }
  }

  _nextPage() {
    let tweets = this.props.tweets
      if (current_page < this._numPages(tweets)) {
          current_page++;
          this._changePage(current_page, tweets);
      }
  }

  _changePage(page, tweets) {
    // Validate page
    let cuttenTweets = []
    if (page < 1) page = 1;
    if (page > this._numPages(tweets)) page = this._numPages(tweets)
    for (var i = (page-1) * tweets_per_page; i < (page * tweets_per_page); i++) {
        cuttenTweets.push(tweets[i])
    }
    this.setState({cuttenTweets: cuttenTweets})
    if (page == 1) {
      this.setState({prev: true})
    } else {
      this.setState({prev: false})
    }

    if (page == this._numPages(tweets)) {
        this.setState({next: true})
    } else {
        this.setState({next: false})
    }
  }

  _numPages(tweets) {
      return Math.ceil(tweets.length / tweets_per_page);
  }

  render() {
    let {tweets, loading} = this.props
    let {cuttenTweets, content, prev, next} = this.state

    if(!loading) {
      if(cuttenTweets.length) {
        return (
          <section className="main">
             <div className="service_button prev">
               <FloatingActionButton
               onClick={() => {this._prevPage()}}
               label="сюда"
               secondary={true}
               disabled={prev}
               mini
              >
                <PrevArrow/>
              </FloatingActionButton>
            </div>

            <div className="service_button next">
              <FloatingActionButton
                onClick={() => {this._nextPage()}}
                label="туда"
                secondary={true}
                disabled={next}
                mini
               >
                 <NextArrow/>
               </FloatingActionButton>
           </div>
            <TweetContainer view={'timeline'} tweets={cuttenTweets}/>
            <TweetContainer view={'grid'} tweets={cuttenTweets}/>
          </section>
        )
      } else {
        return <div className="no_content">{content}</div>
      }
    } else {
      return (
        <section className="main spinner">
          <CircularProgress size={80} thickness={5} />
        </section>
      )
    }
  }
}

export default MainSection
