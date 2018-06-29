import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Navbar, Slider, Post} from '../../components'
import {MainContainer, LeftDiv, RightDiv, BodyDiv} from './styled'
class Home extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return(
			<MainContainer>
        <Navbar />
        <Slider />
        <BodyDiv>
          <LeftDiv>
            <Post />
            <Post />
            <Post />
          </LeftDiv>
          <RightDiv>
            <Post></Post>
          </RightDiv>
        </BodyDiv>
      </MainContainer>
		)
	}
}

export default Home
