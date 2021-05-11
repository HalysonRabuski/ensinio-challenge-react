import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  TopMenuContainer,
  LogoSvg,
  NavMenu,
  Divider,
  RightMenuContainer,
  LoginButton,
  Solutions,
} from './styles'
// import Button from '../Button'
import { ReactComponent as User } from '../../assets/icons/user-icon.svg'
import { ReactComponent as More } from '../../assets/icons/more.svg'
import eadIcon from '../../assets/icons/icon-ead.png'
import socialIcon from '../../assets/icons/icon-social.png'
import gamificationIcon from '../../assets/icons/icon-gamification.png'
import appIcon from '../../assets/icons/icon-app.png'

import Button from '../Button'
import DropdownItem from '../DropDownItem'
import LanguageDropdown from '../LanguageDropdown'

const TopMenu: React.FC = () => {
  const { t, i18n } = useTranslation()

  return (
    <TopMenuContainer>
      <Link to="/" className="logo">
        <LogoSvg />
      </Link>
      <NavMenu>
        <ul>
          <li>
            <DropdownItem text={t('menu.solutions')} Icon={<More />}>
              <Solutions>
                <h4>SOLUÇÕES PRINCIPAIS</h4>
                <ul>
                  <li>
                    <Link to="/">
                      <img src={eadIcon} alt="ead" />
                      <div>
                        <b>Crie uma Escola Online</b>
                        <p>Lorem ipsum dolor sit amet</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <img src={socialIcon} alt="ead" />
                      <div>
                        <b>Crie uma Escola Online</b>
                        <p>Lorem ipsum dolor sit amet</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <img src={gamificationIcon} alt="ead" />
                      <div>
                        <b>Crie uma Escola Online</b>
                        <p>Lorem ipsum dolor sit amet</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <img src={appIcon} alt="ead" />
                      <div>
                        <b>Crie uma Escola Online</b>
                        <p>Lorem ipsum dolor sit amet</p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </Solutions>
            </DropdownItem>
          </li>
          <li>
            <Link to="/">Preços</Link>
          </li>
          <li>
            <Link to="/">Academy</Link>
          </li>
          <li>
            <Link to="/">Soluções</Link>
          </li>
        </ul>
      </NavMenu>
      <Divider />
      <RightMenuContainer>
        <Link to="/">
          <LoginButton>
            <User />
            Entrar
          </LoginButton>
        </Link>
        <Button width="160px" padding="10px">
          Começar agora
        </Button>
        <DropdownItem text={i18n.language.toUpperCase()} Icon={<More />}>
          <LanguageDropdown />
        </DropdownItem>
      </RightMenuContainer>
    </TopMenuContainer>
  )
}

export default TopMenu
