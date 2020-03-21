import React from 'react'
import { NavLink } from 'react-router-dom'
import './buttonlink.scss'

export const ButtonLink = ({ reference, name }) => {
  return (
    <div className='button-link'>
      <NavLink to={`${reference}`} style={{ textDecoration: 'none' }}>
        <p>{name}</p>
      </NavLink>
    </div>
  )
}
