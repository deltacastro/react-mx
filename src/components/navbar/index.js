import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Titulo, Header, Logo, OptionAnchor, Menu, Ul, Ult, Li, DivSticky} from './styled'

class Navbar extends Component {
  render() {
    return(
      <DivSticky>
        <Header>
          <Logo src="/assets/img/logo.png" />
          <Menu>
            <Ul>
              <Li>
                <OptionAnchor href="#">Apps</OptionAnchor>
                <Ul child>
                  <Li subMenu><OptionAnchor hoverColor subMenu href="#">1st App</OptionAnchor></Li>
                  <Li subMenu><OptionAnchor hoverColor subMenu href="#">2nd Apps</OptionAnchor></Li>
                  <Li subMenu><OptionAnchor hoverColor subMenu href="#">3th Appsss</OptionAnchor></Li>
                </Ul>
              </Li>
              <Li>
                <OptionAnchor href="#">Games</OptionAnchor>
                  <Ul child>
                    <Li subMenu><OptionAnchor hoverColor subMenu href="#">1st Game</OptionAnchor></Li>
                    <Li subMenu><OptionAnchor hoverColor subMenu href="#">2nd Game</OptionAnchor></Li>
                    <Li subMenu><OptionAnchor hoverColor subMenu href="#">3th Game</OptionAnchor></Li>
                  </Ul>
              </Li>
              <Li><OptionAnchor href="#">Movies</OptionAnchor></Li>
              <Li><OptionAnchor href="#">Movies</OptionAnchor></Li>
              <Li><OptionAnchor href="#">News</OptionAnchor></Li>
            </Ul>
          </Menu>
        </Header>
      </DivSticky>
    )
  }
}

Navbar.defaultProps = {
  titulo: 'Titulo h2'
}
export default Navbar
