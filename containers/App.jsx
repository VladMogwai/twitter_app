import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/tweets'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import './style.css'

class App extends Component {
  render() {
    const { tweets, actions, loading } = this.props
    return (
      <div>
        <Header tweets={tweets} search={actions.FetchTweets} clear={actions.ClearTweets}/>
        <MainSection tweets={tweets} loading={loading}/>
      </div>
    )
  }
}


const getProps = state => ({
  tweets: state.tweetState.tweets,
  loading: state.tweetState.loading,
})

const getActions = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(
  getProps,
  getActions
)(App)
