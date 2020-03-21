import React from 'react'
import './navigatepanel.scss'
import { ButtonLink } from '../ButtonLink/ButtonLink'

const NavigatePanel = () => {
  return (
    <nav>
      <ul className='navigate'>
        <li>
          <ButtonLink reference='/' name='Home' />
        </li>
        <li>
          <ButtonLink reference='about' name='About' />
        </li>
        <li>
          <ButtonLink reference='edit' name='Edit' />
        </li>
        <li>
          <ButtonLink reference='admin' name='Admin' />
        </li>
      </ul>
    </nav>
  )
}

export default NavigatePanel
