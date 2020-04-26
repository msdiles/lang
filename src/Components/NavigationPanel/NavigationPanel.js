import React from 'react'
import { ButtonLink } from '../ButtonLink/ButtonLink'
import { ProfileSelect } from './ProfileSelect'
import { useSelector } from 'react-redux'

const NavigationPanel = ({ className, listLinks, isNan }) => {
  const user = useSelector((state) => state.fetch.user)
  const permissions = useSelector((state) => state.fetch.permissions)

  const list = listLinks.map((link, index) =>
    permissions.indexOf(link.permission) <= permissions.indexOf(user.role) ? (
      <li key={index}>
        <ButtonLink reference={link.route} name={link.element} />
      </li>
    ) : null
  )
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
