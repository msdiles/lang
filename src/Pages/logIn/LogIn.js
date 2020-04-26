import React from 'react'
import './login.scss'
import { InputCheck } from '../../Components/InputCheck/InputCheck'
import { NavLink, useLocation, useHistory } from 'react-router-dom'
import { PopMessage } from '../../Components/PopMessage/PopMessage'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLogIn } from '../../actions/authorizationActions'
import useInputValidation from '../../utils/useInputValidation'

const Login = () => {
  console.log('Rendering Login')

  const { loading, error, errors } = useSelector((state) => state.fetch.user)
  const {
    email,
    emailErrors,
    password,
    passwordErrors,
    validateForm,
    handleChange,
  } = useInputValidation({ checkEmail: false })
  const location = useLocation()
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = (e) => {
    validateForm('all')
    e.preventDefault()
    if (
      emailErrors.filter((item) => item.value === false).length ===
        emailErrors.length &&
      passwordErrors.filter((item) => item.value === false).length ===
        passwordErrors.length
    ) {
      const userData = { email, password }
      dispatch(fetchLogIn(userData))
    }
  }

  return (
    <div className='full-size-page'>
      <div className='full-size-page-content'>
        <div className='flex-column-center'>
          {error ? (
            <PopMessage
              message={errors.message ? errors.message : errors.message}
            />
          ) : null}
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
            handleChange={handleChange}
            errors={emailErrors}
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
              handleChange={handleChange}
              errors={passwordErrors}
            />
          </div>
          <button
            className='btn'
            name='submit'
            onClick={handleSubmit}
            disabled={loading}
          >
            Войти
          </button>
          <button
            className='btn'
            name='back'
            onClick={() => history.push('/home')}
          >
            Отмена
          </button>
          <div className='link'>
            <NavLink to='/signup'>Зарегистрироваться</NavLink>
          </div>
          <div className='link'>
            <NavLink to='/reset'>Забыли пароль?</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
