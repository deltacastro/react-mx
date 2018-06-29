import styled, {keyframes} from 'styled-components'

export const DivSticky = styled.div `
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`

export const Header = styled.header `
  margin: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 20em 0 20em;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: #8d8d8d;
  @media (max-width: 1400px){
    padding: 0 15em 0 15em;
  }
  @media (max-width: 900px) {
    padding: 0 8em 0 8em;
  }
  @media (max-width: 700px) {
    padding: 0 1em 0 1em;
  }
  @media (max-width: 530px) {
    flex-wrap: wrap;
  }
`

export const Titulo = styled.h1 `
  color: green;

`
export const Menu = styled.nav `
  display: flex;
  margin: 0;
`
export const Ul = styled.ul `
  padding: 0;
  margin: 0;
  display: ${props => props.child ? 'none' : 'flex' };
  position: ${props => props.child ? 'absolute' : '' };
  background-color: ${props => props.child ? 'white' : '' };
  transition: 1s;
`
export const Li = styled.li `
  display: block;
  list-style: none;
  align-items: center;
  box-sizing: border-box;
  @keyframes subMenu {
    from {
      margin-top: -30px;
      opacity: 0;
    }
    to{
      margin-top: 0px;
      opacity: 1;
    }
  }
  ${OptionAnchor}:hover ${Ul} {
    display: block;
    animation-name: subMenu;
    animation-duration: .40s;
    position: absolute;
    width: 200px;
  }
`

export const OptionAnchor = styled.a `
  display: block;
  text-decoration: none;
  text-align: left;
  color: rgba(61,61,61,0.69);
  box-sizing: border-box;
  padding: ${props => props.subMenu ? '10px 20px' : '32px 25px'};
  margin ${props => props.subMenu ? '10px 20px' : '0'};
  transition: background .4s, padding .15s;
  &:hover {
    background-color: ${props => props.hoverColor ? '#47c9e5' : ''};
    padding-left: 30px;
    padding-left: ${props => props.subMenu ? '30px' : '25px'};
  }
`
export const Logo = styled.img `
  margin: 0;
  padding: 0;
  width: 160px;
  height: 80px;
`
