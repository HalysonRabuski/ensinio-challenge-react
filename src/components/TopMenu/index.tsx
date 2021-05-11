/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
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
import { ReactComponent as MenuIcon } from '../../assets/icons/menu-icon.svg'
import eadIcon from '../../assets/icons/icon-ead.png'
import socialIcon from '../../assets/icons/icon-social.png'
import gamificationIcon from '../../assets/icons/icon-gamification.png'
import appIcon from '../../assets/icons/icon-app.png'

import Button from '../Button'
import DropdownItem from '../DropdownItem'
import LanguageDropdown from '../LanguageDropdown'
import HamburguerMenu from '../HamburguerMenu'

const TopMenu: React.FC = () => {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <TopMenuContainer>
      <Link to="/" className="logo">
        <LogoSvg />
      </Link>
      <div id="desktop">
        <NavMenu>
          <ul>
            <li>
              <DropdownItem text={t('menu.solutions')} Icon={<More />}>
                <Solutions>
                  <h4>{t('solutions.title')}</h4>
                  <ul>
                    <li>
                      <Link to="/">
                        <img src={eadIcon} alt="ead" />
                        <div>
                          <b>{t('solutions.placeholder')}</b>
                          <p>Lorem ipsum dolor sit amet</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src={socialIcon} alt="ead" />
                        <div>
                          <b>{t('solutions.placeholder')}</b>
                          <p>Lorem ipsum dolor sit amet</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src={gamificationIcon} alt="ead" />
                        <div>
                          <b>{t('solutions.placeholder')}</b>
                          <p>Lorem ipsum dolor sit amet</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src={appIcon} alt="ead" />
                        <div>
                          <b>{t('solutions.placeholder')}</b>
                          <p>Lorem ipsum dolor sit amet</p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </Solutions>
              </DropdownItem>
            </li>
            <li>
              <Link to="/">{t('menu.prices')}</Link>
            </li>
            <li>
              <Link to="/">{t('menu.academy')}</Link>
            </li>
            <li>
              <Link to="/">{t('menu.blog')}</Link>
            </li>
            <li>
              <Link to="/">{t('menu.contact')}</Link>
            </li>
          </ul>
        </NavMenu>
        <Divider />
        <RightMenuContainer>
          <Link to="/">
            <LoginButton>
              <User />
              {t('menu.signin')}
            </LoginButton>
          </Link>
          <Button width="160px" padding="10px">
            {t('menu.getstarted')}
          </Button>
          {/* <DropdownItem text={i18n.language.toUpperCase()} Icon={<More />}>
            <LanguageDropdown />
          </DropdownItem> */}
        </RightMenuContainer>
        <DropdownItem text={i18n.language.toUpperCase()} Icon={<More />}>
          <LanguageDropdown />
        </DropdownItem>
      </div>
      <div id="menu">
        <DropdownItem text={i18n.language.toUpperCase()} Icon={<More />}>
          <LanguageDropdown />
        </DropdownItem>
        <a>
          <MenuIcon
            onClick={() => {
              setIsOpen(!isOpen)
            }}
          />
        </a>
      </div>
      {isOpen && <HamburguerMenu />}
    </TopMenuContainer>
  )
}

export default TopMenu
