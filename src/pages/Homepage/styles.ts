import styled from 'styled-components'

export const Content = styled.div`
  padding: 100px 75px;
  color: #423d51;

  h1 {
    margin-bottom: 80px;
  }
  a {
    color: #432e98;
  }

  .purple {
    color: #432e98;
  }

  .line {
    width: 40px;
    border: 0.5px solid #432e98;
    opacity: 0.5;
    /* background-color: #432e98; */
    margin-right: 16px;
    /* color: #432e98; */
  }

  #arrow {
    margin-left: 20px;
  }

  #rocket {
    margin-right: 20px;
  }

  #footer-divider {
    margin-bottom: 50px;
    border: 1px solid #e7e7e9;
  }

  @media screen and (min-width: 0px) and (max-width: 480px) {
    padding: 20px 10px;
    text-align: center;

    h1 {
      font-size: 1.3rem;
      margin-bottom: 20px;
    }

    #footer-divider {
      margin-bottom: 20px;
    }

    #arrow {
      margin-left: 10px;
      margin-top: 10px;
    }
  }
`

export const FlexDiv = styled.div`
  display: flex;
  margin-bottom: 20px;

  span {
    display: flex;
    align-items: center;
  }

  .left {
    margin-left: auto;
  }

  @media screen and (min-width: 0px) and (max-width: 480px) {
    flex-direction: column;
    margin-bottom: 20px;

    .left {
      margin: 0 auto;
    }
  }
`

export const ItemsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24%;
  margin-bottom: 80px;

  @media screen and (min-width: 0px) and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    margin-bottom: 30px;

    h1 {
      font-size: 1.3rem;
      margin-bottom: 20px;
    }
  }
`
