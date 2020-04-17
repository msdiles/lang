import React from 'react'
import './popmessage.scss'

export const PopMessage = ({ message = '' }) => {
  return (
    <div className='signup-message'>
      <div
        className='close-cross'
        onClick={(e) =>
          (e.target.parentNode.className =
            e.target.parentNode.className === 'signup-message'
              ? 'signup-message hidden'
              : 'signup-message')
        }
      ></div>
      <p>{message}</p>
    </div>
  )
}
