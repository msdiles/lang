import React from 'react'
import './popmessage.scss'

export const PopMessage = ({ message = '' }) => {
  return (
    <div className='pop-message'>
      <div
        className='close-cross'
        onClick={(e) =>
          (e.target.parentNode.className =
            e.target.parentNode.className === 'pop-message'
              ? 'pop-message hidden'
              : 'pop-message')
        }
      ></div>
      <p>{message}</p>
    </div>
  )
}
