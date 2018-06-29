import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {PostDiv, PostImg} from './styled'

class Post extends Component {
  render() {
    return (
      <PostDiv>
        <PostImg src="/assets/img/logo.png" />
        <h2>Titulo test</h2>
      </PostDiv>
    );
  }
}

export default Post;
