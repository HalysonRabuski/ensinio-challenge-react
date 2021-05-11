import styled from 'styled-components'

export const MenuContainer = styled.div`
  display: block;
  position: absolute;
  top: 100%;
  background: ${($props) => $props.theme.colors.primary};
  text-align: center;
  width: 100%;
  /* width: 100vw; */
  /* padding: 120px; */
  /* background: white; */

  ul {
    width: 100vw;
    list-style-type: none;
    margin: 0 auto;
  }

  li {
    margin: 0 auto;
    text-align: center;

    .dropdown.item {
      margin: 0 auto;
      width: 100%;
    }
  }

  @media screen and (max-width: 1025px) {
    display: flex;
  }
`
