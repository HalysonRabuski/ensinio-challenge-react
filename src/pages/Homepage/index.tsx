import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Banner from '../../components/Banner'
import { Content, FlexDiv, ItemsDiv } from './styles'
import { ReactComponent as Rocket } from '../../assets/icons/rocket.svg'
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg'
import api from '../../services/api'
import ItemComponent from '../../components/Item/Item'

interface Item {
  id: string
  icon: string
  title: any
  description: any
}

const Homepage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const [items, setItems] = useState<Item[]>([])

  async function handleRequest() {
    const response = await api.get<Item[]>('http://localhost:3333/items')

    setItems(response.data)
  }

  useEffect(() => {
    handleRequest()
  }, [])
  return (
    <>
      <Banner />
      <Content>
        <FlexDiv>
          <span>
            <hr className="purple line" />
            <b className="purple">{t('home.details')}</b>
          </span>
          <span className="left">
            <p>{t('home.resources')}</p>
            <i> ⚡️</i>
          </span>
        </FlexDiv>
        <h1>{t('home.title')}</h1>
        <ItemsDiv>
          {items.map((item) => (
            <ItemComponent
              icon={item.icon}
              title={item.title[i18n.language]}
              description={item.description[i18n.language]}
            />
          ))}
        </ItemsDiv>
        <hr id="footer-divider" />
        <FlexDiv>
          <i id="rocket">
            <Rocket />
          </i>
          <b>{t('home.available_resources')}</b>
          <div className="left">
            <a href="/#">
              <span>
                <b>{t('home.see_more')}</b>
                <i id="arrow">
                  <Arrow />
                </i>
              </span>
            </a>
          </div>
        </FlexDiv>
      </Content>
    </>
  )
}

export default Homepage
