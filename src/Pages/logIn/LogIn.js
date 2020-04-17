import React, { useState } from 'react'
import Button from '../../Components/Button/Button'
import './login.scss'
import { InputCheck } from '../../Components/InputCheck/InputCheck'
import { NavLink, useLocation } from 'react-router-dom'
import { PopMessage } from '../../Components/PopMessage/PopMessage'
import { useDispatch } from 'react-redux'
import { fetchLogIn } from '../../actions/authorizationActions'

const Login = () => {
  const location = useLocation()
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  //добавить валидацию
  const validateForm = (name) => {}

  const handleSubmit = (e) => {
    e.preventDefault()
    const userData = { email, password }
    dispatch(fetchLogIn(userData))
  }
  return (
    <div className='login'>
      <div className='flex-column-start'>
        {location.props && location.props.signup ? (
          <PopMessage message='Вы успешно зарегистрировались' />
        ) : null}
        <InputCheck
          label='Почта'
          idName='email'
          type='email'
          placeholder='Введите почту'
          validateForm={validateForm}
          autoCorrect='on'
          autoComplete='email'
          value={email}
          setValue={setEmail}
        />
        <div className='input-link'>
          <InputCheck
            label='Пароль'
            idName='password'
            type='password'
            placeholder='Введите пароль'
            validateForm={validateForm}
            autoCorrect='on'
            autoComplete='password'
            value={password}
            setValue={setPassword}
          />
          <div className='link'>
            <NavLink to='/edit'>Забыли пароль?</NavLink>
          </div>
        </div>
        <Button name='submit' buttonText='Войти' onClick={handleSubmit} />
        <div className='link'>
          <NavLink to='/signup'>Зарегистрироваться</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Login
