import React from 'react'
import './loadingmodal.scss'

const LoadingModal = ({ LoadingText = '' }) => {
  return (
    <div className='modal'>
      <div className='modal-content'>
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
    </div>
  )
}

export default LoadingModal
