import React from 'react'
import { ButtonLink } from '../ButtonLink/ButtonLink'
import { ProfileSelect } from './ProfileSelect'

const NavigationPanel = ({ className, listLinks, isNan }) => {
  const list = listLinks.map((link, index) => (
    <li key={index}>
      <ButtonLink reference={link.route} name={link.element} />
    </li>
  ))
  return isNan === true ? (
    <nav>
      <ul className={`${className}`}>
        {list}
        <li>
          <ProfileSelect />
        </li>
      </ul>
    </nav>
  ) : (
    <div className={`${className}`}>
      <ul>{list}</ul>
    </div>
  )
}

export default NavigationPanel
