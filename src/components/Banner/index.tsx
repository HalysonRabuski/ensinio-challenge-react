import React from 'react'
import Button from '../Button'
import {
  BannerContainer,
  LeftBanner,
  RightBanner,
  ImageCont,
  BgImage,
} from './styles'
import { ReactComponent as Devices } from '../../assets/icons/devices.svg'
import PlaylistBg from '../../assets/icons/icon-playlists.svg'
import CertifiedBg from '../../assets/icons/icon-certified.svg'
import Play from '../../assets/icons/play.png'
import img from '../../assets/images/ISTOCKPHOTO.png'

const Banner: React.FC = () => (
  <BannerContainer>
    <BgImage src={PlaylistBg} left="5%" top="5%" />
    <BgImage src={CertifiedBg} left="50%" top="10%" />
    <BgImage src={PlaylistBg} right="5%" top="5%" />
    <LeftBanner>
      <div className="content">
        <p>
          <i>
            <Devices />
          </i>
          PLATAFORMA ALL IN ONE
        </p>
        <h1>Sua escola online poderosa e lucrativa</h1>
        <p>
          Tenha sua própria escola online 100% white label com rede social,
          gamificação, clube de assinaturas, ecommerce e sistema EAD completo.
        </p>
        <div className="actions">
          <Button
            // width="200px"
            padding="18px 20px"
            bgColor="#00E1E7"
            color="#130c25"
            border="none"
          >
            <b>Começar agora</b>
          </Button>
          <a id="video" href="/#">
            <i id="play-icon">
              <img src={Play} alt="play-icon" />
            </i>
            Ver vídeo
          </a>
        </div>
      </div>
    </LeftBanner>
    <RightBanner>
      <div className="content">
        <div className="circle" />
        <ImageCont src={img} />
      </div>
    </RightBanner>
  </BannerContainer>
)

export default Banner
