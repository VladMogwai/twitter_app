import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Header extends Component {
  search(e) {
    let text = this.TextField.input.value,
        tweets = this.props.tweets
    if (e.charCode == 13 && text.length > 1) {
      this.props.search(text)
    } else if(!text.length && tweets.length) {
      this.props.clear()
    }
  }

  render() {
    let style = {
      marginLeft: 10
    }
    return (
      <header className={'header'}>
          <TextField
            ref={(TextField) => { this.TextField = TextField }}
            onKeyPress={(e) => {this.search(e)}}
            hintText="Search tweets"
            hintStyle={{color: '#8c99a7'}}
            inputStyle={{color: '#fff'}}
          />
          <RaisedButton
            onClick={() => {this.TextField.input.value.length ? this.props.search(this.TextField.input.value) : null}}
            label="Search"
            secondary={true}
            style={style}
           />
      </header>
    )
  }
}

export default Header
