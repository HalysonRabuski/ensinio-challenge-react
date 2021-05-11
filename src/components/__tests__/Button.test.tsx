/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
// import '../../i18n'
// import renderer from 'react-test-renderer'
import Button from '../Button'

afterEach(() => {
  cleanup()
})

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => ({
    t: (str: any) => str,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  }),
}))

test('should render card component', async () => {
  render(<Button />)
  const ButtonElement = screen.getByTestId('button-id')

  expect(ButtonElement).toBeInTheDocument()
})

test('should render card component with an image and texts as children', () => {
  const ButtonElement = renderer.create(<Button />).toJSON()
  expect(ButtonElement).toMatchSnapshot()
})
