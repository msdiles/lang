import React from 'react'
import './button.scss'

const Button = ({buttonText='',onClick=f=>f,name='',type='button'}) => {
  return(
    <button className='btn' type={type} name={name} onClick={onClick}>{buttonText}</button>
  )
}

export default Button
