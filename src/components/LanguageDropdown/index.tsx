/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { useTranslation } from 'react-i18next'
import { LanguagesContainer } from './styles'
import { ReactComponent as Checkmark } from '../../assets/icons/checkmark.svg'
import langs from '../../languages/options'

const LanguageDropdown: React.FC = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  return (
    <LanguagesContainer>
      {langs.languages.map((lang) =>
        lang.name === i18n.language ? (
          <a className="active" onClick={() => changeLanguage(lang.name)}>
            <i>
              <lang.icon />
            </i>
            <span>{lang.name.toUpperCase()}</span>

            <div className="active-container">
              <i className="active-icon">
                <Checkmark />
              </i>
            </div>
          </a>
        ) : (
          <a onClick={() => changeLanguage(lang.name)}>
            <i>
              <i>
                <lang.icon />
              </i>
            </i>
            <span>{lang.name.toUpperCase()}</span>
          </a>
        )
      )}
    </LanguagesContainer>
  )
}

export default LanguageDropdown
