import React from 'react'
import './loadingspinner.scss'

const LoadingSpinner = ({ LoadingText = '' }) => {
  return (
    <div className='spinner'>
      <div className='lds-spinner'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>{LoadingText}</p>
    </div>
  )
}

export default LoadingSpinner
