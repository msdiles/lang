import React from 'react'
import Button from '../../Components/Button/Button'
// import './signin.scss'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logOut } from '../../actions/authorizationActions'

export const LogOut = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleClick = (e) => {
    if (e.target.name === 'back') {
      history.goBack()
    }
    if (e.target.name === 'logout') {
      localStorage.removeItem('token')
      dispatch(logOut())
      history.push('/home')
    }
  }
  return (
    <div className='login'>
      <div className='flex-column-start'>
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
  )
}
