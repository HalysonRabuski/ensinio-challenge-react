import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MenuContainer } from './styles'

const HamburguerMenu: React.FC = () => {
  const { t } = useTranslation()

  return (
    <MenuContainer>
      <nav>
        <ul>
          <li>
            <Link to="/">{t('menu.solutions')}</Link>
          </li>
          <li>
            <Link to="/">Preços</Link>
          </li>
          <li>
            <Link to="/">Academy</Link>
          </li>
          <li>
            <Link to="/">Entrar</Link>
          </li>
          <li>
            <Link to="/">Começar agora</Link>
          </li>
        </ul>
      </nav>
    </MenuContainer>
  )
}

export default HamburguerMenu
