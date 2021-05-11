/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
// import '../../i18n'
// import renderer from 'react-test-renderer'
import DropdownItem from '../DropdownItem'

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

test('should render card component and have test as text prop', async () => {
  render(<DropdownItem text="test" />)
  const DropdopwnElement = screen.getByTestId('dropdown-id')

  expect(DropdopwnElement).toBeInTheDocument()
  expect(DropdopwnElement).toHaveTextContent('test')
})

test('should render card component with an image and texts as children', () => {
  const DropdopwnElement = renderer
    .create(<DropdownItem text="test" />)
    .toJSON()
  expect(DropdopwnElement).toMatchSnapshot()
})
