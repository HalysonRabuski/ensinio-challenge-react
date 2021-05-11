import styled from 'styled-components'
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'

export const TopMenuContainer = styled.div`
  display: flex;
  width: 100vw;
  position: fixed;
  background: rgba(0, 0, 0, 0.02);
  backdrop-filter: blur(30px);
  height: 88px;
  align-items: center;
  z-index: 999;

  .logo {
    margin-left: 6vw;
  }
`
export const LogoSvg = styled(Logo)`
  width: 158.71px;
`

export const NavMenu = styled.nav`
  margin-left: 15vw;
  /* position: absolute; */
  ul {
    list-style-type: none;
    display: flex;
  }

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  a {
    margin-right: 40px;
  }
`
export const Divider = styled.hr`
  margin-left: 10px;
  border-color: #99f3f5;
  background-color: #99f3f5;
  height: 24px;
`
export const Solutions = styled.div`
  position: relative;
  z-index: 999;
  border-radius: 5px;
  color: black;
  background: white;
  padding: 40px;

  a {
    color: black;
    display: flex;
    z-index: 999;
  }

  h4 {
    color: #5f41d9;
    margin-bottom: 40px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;

    img {
      margin-right: 5px;
    }

    li {
      display: flex;
    }
  }
`

export const RightMenuContainer = styled.nav`
  display: flex;
  margin-left: 50px;

  a {
    margin-right: 40px;
  }
`
export const LoginButton = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  svg {
    margin-right: 10px;
  }
`
