import React from 'react'
import Button from '../../Components/Button/Button'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchLogOut } from '../../actions/authorizationActions'

export const LogOut = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleClick = (e) => {
    if (e.target.name === 'back') {
      history.goBack()
    }
    if (e.target.name === 'logout') {
      dispatch(fetchLogOut())
      history.push('/home')
    }
  }
  return (
    <div className='full-size-page'>
      <div className='full-size-page-content'>
        <div className='flex-column-center'>
        <p>Вы действительно хотите выйти из аккаунта?</p>
          <Button
            buttonText='Назад'
            name='back'
            type='button'
            onClick={handleClick}
          />
          <Button
            buttonText='Выйти'
            name='logout'
            type='button'
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  )
}
