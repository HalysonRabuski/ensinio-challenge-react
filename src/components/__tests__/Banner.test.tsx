/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { render, screen, cleanup, waitFor } from '@testing-library/react'
import renderer from 'react-test-renderer'
// import '../../i18n'
// import renderer from 'react-test-renderer'
import Banner from '../Banner'

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
  render(<Banner />)
  const bannerElement = await waitFor(() => screen.getByTestId('banner-id'))

  expect(bannerElement).toBeInTheDocument()
})

test('should render card component with an image and texts as children', () => {
  const cardElement = renderer.create(<Banner />).toJSON()
  expect(cardElement).toMatchSnapshot()
})
