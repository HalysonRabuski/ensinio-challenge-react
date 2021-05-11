/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { PropsWithChildren, useState } from 'react'
import { DropdownContainer } from './styles'

interface DropdownItemProps {
  Icon?: React.SVGProps<SVGSVGElement>
  text: string
}

const DropdownItem: React.FC<PropsWithChildren<DropdownItemProps>> = ({
  Icon,
  text,
  children = false,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownContainer data-testid="dropdown-id">
      <div className="dropdown-item">
        <a onClick={() => setIsOpen(!isOpen)}>
          {text} <span> {Icon}</span>
        </a>
      </div>

      <div className="dropdown-content">
        {isOpen && children ? children : null}
      </div>
    </DropdownContainer>
  )
}

export default DropdownItem
