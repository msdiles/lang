import React from 'react'
import './buttonswap.scss'

const ButtonSwap = ({ swapLanguage = f => f }) => {
  return <button type='button' className='btn-swap' onClick={swapLanguage} />
}

export default ButtonSwap
