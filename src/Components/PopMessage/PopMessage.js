import React from 'react'
import './popmessage.scss'
import { useState } from 'react'

export const PopMessage = ({ message = '' }) => {
  const [closed, setClosed] = useState(false)

  const handleClick = (e) => {
    setClosed(true)
  }

  if (closed === true) return <div></div>
  return (
    <div className='pop-message'>
      <div
        className='close-cross'
        // onClick={(e) =>
        //   (e.target.parentNode.className =
        //     e.target.parentNode.className === 'pop-message'
        //       ? 'pop-message hidden'
        //       : 'pop-message')
        // }
        onClick={handleClick}
      ></div>
      <p>{message}</p>
    </div>
  )
}
