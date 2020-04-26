import React, { useState } from 'react'
import SignUpForm from './SignUpForm'
import { SuccessRegister } from './SuccessRegister'

export const SignUp = () => {
  const [currentPage, setCurrentPage] = useState(0)
  return (
    <div className='full-size-page'>
      <div className='full-size-page-content'>
        {currentPage === 0 && (
          <SignUpForm
            changeFormPage={() => {
              setCurrentPage(currentPage + 1)
            }}
          />
        )}
        {currentPage === 1 && (
          <SuccessRegister
            changeFormPage={() => {
              setCurrentPage(0)
            }}
          />
        )}
      </div>
    </div>
  )
}
