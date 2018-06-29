import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {DivImg, Img} from './styled'

class Slider extends Component {
  render () {
    return(
      <DivImg>
        <Img src="/assets/img/slider.png" />
      </DivImg>
    )
  }
}
export default Slider
