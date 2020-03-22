import React from 'react'
import { ButtonLink } from '../ButtonLink/ButtonLink'

const NavigationPanel = ({ className, listLinks, isNan }) => {
  const list = listLinks.map((link, index) => (
    <li key={index}>
      <ButtonLink reference={link.route} name={link.element} />
    </li>
  ))
  return isNan === true ? (
    <nav>
      <ul className={`${className}`}>{list}</ul>
    </nav>
  ) : (
    <div className={`${className}`}>
      <ul>{list}</ul>
    </div>
  )
}

export default NavigationPanel
