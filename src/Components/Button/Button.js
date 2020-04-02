import React from 'react'
import './button.scss'

const Button = ({buttonText='',onClick=f=>f,name=''}) => {
  return(
    <button className='btn' type='button' name={name} onClick={onClick}>{buttonText}</button>
  )
}

export default Button
