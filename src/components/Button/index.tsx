import React, { PropsWithChildren } from 'react'
import { Button } from './styles'

interface ButtonProps {
  width?: string
  padding?: string
  color?: string
  bgColor?: string
  border?: string
}

const TopMenu: React.FC<PropsWithChildren<ButtonProps>> = ({
  padding = '5px',
  width = '160px',
  color = 'white',
  bgColor = 'none',
  border = '1px solid',
  children,
}) => (
  <Button
    data-testid="button-id"
    width={width}
    padding={padding}
    color={color}
    bgColor={bgColor}
    border={border}
  >
    {children}
  </Button>
)

export default TopMenu
