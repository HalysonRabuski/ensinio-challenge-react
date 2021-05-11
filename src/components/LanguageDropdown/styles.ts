import styled from 'styled-components'

export const LanguagesContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  width: 140px;
  border-radius: 5px;

  svg {
    margin-right: 5px;
  }

  a {
    display: flex;
    color: black;
    /* background-color: red; */
    margin: 0;
    width: 100%;
    padding: 15px 20px 15px 20px;

    &:hover {
      cursor: pointer;
    }
  }
  .active {
    background: linear-gradient(
      90deg,
      #5f41d9 -880.48%,
      rgba(95, 65, 217, 0) 100%
    );
    .active-container {
      margin: 0 15px 0 auto;
    }
    .active-icon {
      position: absolute;
    }
  }

  @media screen and (min-width: 1025px) and (max-width: 1075px) {
    position: absolute;
    width: 10vw;
    right: 10%;
    top: 5px;
    /* left: 2%; */
  }
  @media screen and (min-width: 1075px) and (max-width: 1150px) {
    position: absolute;
    width: 10vw;
    right: 10%;
    top: 5px;
  }
`
