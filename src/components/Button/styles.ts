import styled from 'styled-components'

interface ButtonProps {
  padding: string
  width: string
  color: string
  bgColor: string
  border: string
}

export const Button = styled.a<ButtonProps>`
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  border-radius: 80px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`
