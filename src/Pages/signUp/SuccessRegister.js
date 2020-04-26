import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../../Components/Button/Button'

export const SuccessRegister = ({ changeFormPage = (f) => f }) => {

  const history = useHistory()
  return (
    <div className='flex-column-center'>
      <p>Вы успешно зарегистрировались</p>
      <Button
        type='button'
        name='register-end'
        onClick={() => {
          changeFormPage()
          history.push('./home')
        }}
        buttonText='Продолжить'
      />
    </div>
  )
}
