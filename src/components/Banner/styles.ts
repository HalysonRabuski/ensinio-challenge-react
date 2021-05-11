import styled from 'styled-components'

interface BgImageProps {
  top?: string
  left?: string
  right?: string
  bottom?: string
}

export const BannerContainer = styled.div`
  background: linear-gradient(259.95deg, #41b5d9 2.25%, #5f41d9 100.27%);
  height: 80vh;
  display: flex;

  @media screen and (min-width: 0px) and (max-width: 480px) {
    display: block;
    height: auto;
    width: auto;
    padding-top: 50%;

    text-align: center;
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    display: block;
    height: auto;
    width: auto;
    padding-top: 20%;

    text-align: center;
  }
`

export const LeftBanner = styled.div`
  width: 50vw;
  margin: auto;
  /* background-color: red; */

  .content {
    margin: 0 auto;
    width: 42%;

    .actions {
      display: flex;
      align-items: center;

      a#video {
        display: flex;
        align-items: center;
        margin-left: 40px;

        i {
          margin-right: 5px;
        }
      }
    }
  }

  p {
    display: flex;
    margin-bottom: 35px;

    i {
      margin-right: 5px;
    }
  }
  h1 {
    margin-bottom: 35px;
  }

  .actions {
    height: 100%;
    padding-top: 20px;
  }

  @media screen and (min-width: 0px) and (max-width: 480px) {
    /* margin-top: 10%; */
    .actions {
      margin: 0 auto;
      text-align: center;
      flex-direction: column;
      justify-content: center;
    }

    text-align: center;

    a#video {
      margin-top: 25px;
      margin-left: 0 !important;
    }

    .content {
      width: 80%;
      text-align: center;
    }

    p {
      justify-content: center;
    }

    display: block;
    height: auto;
    width: auto;
  }
  @media screen and (min-width: 481px) and (max-width: 1024px) {
    .actions {
      margin: 0 auto;
      text-align: center;
      flex-direction: column;
      justify-content: center;
    }
    text-align: center;

    a#video {
      margin-top: 25px;
      margin-left: 0 !important;
    }

    .content {
      width: 80%;
      text-align: center;
    }

    p {
      justify-content: center;
    }

    display: block;
    height: auto;
    width: auto;
  }

  @media screen and (min-width: 1025px) and (max-width: 1430px) {
    .actions {
      margin: 0 auto;
      justify-content: center;
    }
    /* text-align: center; */

    .content {
      width: 80%;
      text-align: center;
    }

    p {
      justify-content: center;
    }
  }
`
export const RightBanner = styled.div`
  width: 50vw;
  /* height: 100%; */
  margin-top: auto;
  .content {
    margin-top: auto;
    height: 100%;

    overflow: hidden;
  }

  .circle {
    z-index: 1;
    position: relative;
    border-radius: 50%;
    background: linear-gradient(
      93.59deg,
      #41b5d9 -79.31%,
      rgba(65, 181, 217, 0) 203.45%
    );
    width: 650px;
    height: 650px;
    transform: translateY(20%);
    opacity: 0.2;
  }

  @media screen and (min-width: 0px) and (max-width: 480px) {
    /* margin-top: 10%; */
    .circle {
      width: 300px;
      height: 300px;
      margin: 0 auto;
    }

    width: 100vw;
    .content {
      width: 100%;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    .circle {
      margin: 0 auto;
    }

    width: 100vw;
    .content {
      width: 100%;
    }
  }
  @media screen and (min-width: 1025px) and (max-width: 1430px) {
    .circle {
      margin: 0 auto;
      width: 500px;
      height: 500px;
    }

    .content {
      width: 100%;
    }
  }
`
export const ImageCont = styled.img`
  /* object-fit: cover; */
  transform: translateY(-100%) translateX(15%);
  position: absolute;
  z-index: 2;
  /* width: 650px; */

  @media screen and (min-width: 0px) and (max-width: 480px) {
    width: 60%;
    transform: translateY(-100%) translateX(-50%);
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    width: 60%;
    transform: translateY(-100%) translateX(-50%);
  }
  @media screen and (min-width: 1025px) and (max-width: 1430px) {
    width: 40%;
    transform: translateY(-100%) translateX(20%);
  }
`

export const BgImage = styled.img<BgImageProps>`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  /* object-fit: cover; */
  /* transform: translateY(-100%) translateX(15%);
  position: absolute;
  z-index: 2; */
  /* width: 650px; */
`
