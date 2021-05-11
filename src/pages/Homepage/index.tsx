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
  const { i18n } = useTranslation()
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
            <b className="purple"> PENSAMOS EM CADA DETALHE</b>
          </span>
          <span className="left">
            <p>Conheça alguns dos nossos recursos </p>
            <i> ⚡️</i>
          </span>
        </FlexDiv>
        <h1>Queremos que o aluno se sinta confortável enquanto aprende</h1>
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
          <b>Veja todos os outros recursos disponíveis para te ajudar</b>
          <div className="left">
            <a href="/#">
              <span>
                <b>ver mais</b>
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
