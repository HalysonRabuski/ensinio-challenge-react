import React from 'react'
import { useTranslation } from 'react-i18next'
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

const Banner: React.FC = () => {
  const { t } = useTranslation()

  return (
    <BannerContainer data-testid="banner-id">
      <BgImage src={PlaylistBg} left="5%" top="5%" />
      <BgImage src={CertifiedBg} left="50%" top="10%" />
      <BgImage src={PlaylistBg} right="5%" top="5%" />
      <LeftBanner>
        <div className="content">
          <p>
            <i>
              <Devices />
            </i>
            {t('banner.platform')}
          </p>
          <h1>{t('banner.title')}</h1>
          <p>{t('banner.description')}</p>
          <div className="actions">
            <Button
              padding="18px 20px"
              bgColor="#00E1E7"
              color="#130c25"
              border="none"
            >
              <b>{t('banner.getstarted')}</b>
            </Button>
            <a id="video" href="/#">
              <i id="play-icon">
                <img src={Play} alt="play-icon" />
              </i>
              {t('banner.video')}
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
}

export default Banner
