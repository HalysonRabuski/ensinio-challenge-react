/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react'
import { Container } from './styles'

interface ItemProps {
  icon?: string
  title?: string
  description?: string
}

const TopMenu: React.FC<ItemProps> = ({
  title = 'no title provided',
  description = 'no description provided',
  icon = '',
}) => (
  <Container>
    <img src={`images/${icon}`} alt="item--icon" />
    <h2>{title}</h2>
    <p>{description}</p>
  </Container>
)

export default TopMenu
