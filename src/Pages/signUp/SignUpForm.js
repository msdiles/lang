import React, { useState, useEffect } from 'react'
import './signup.scss'
import { InputCheck } from '../../Components/InputCheck/InputCheck'
import { PopMessage } from '../../Components/PopMessage/PopMessage'
import useInputValidation from '../../utils/useInputValidation'
import { useHistory } from 'react-router-dom'

const SignUpForm = ({ changeFormPage = (f) => f }) => {
  const history = useHistory()
  const [isRegister, setIsRegister] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const {
    login,
    loginErrors,
    email,
    emailErrors,
    password,
    passwordErrors,
    passwordRepeat,
    passwordRepeatErrors,
    validateForm,
    handleChange,
  } = useInputValidation()

  const handleSubmit = (e) => {
    setIsRegister('')
    e.preventDefault()
    validateForm('all')
    if (
      loginErrors.filter((item) => item.value === false).length ===
        loginErrors.length &&
      emailErrors.filter((item) => item.value === false).length ===
        emailErrors.length &&
      passwordErrors.filter((item) => item.value === false).length ===
        passwordErrors.length &&
      passwordRepeatErrors.filter((item) => item.value === false).length ===
        passwordRepeatErrors.length
    ) {
      setIsLoading(true)
      fetch('/api/profile/signup', {
        method: 'POST',
        body: JSON.stringify({
          login: login,
          email: email,
          password: password,
        }),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => response.json())
        .then((response) => {
          setIsRegister(response)
          setIsLoading(false)
        })
        .catch((err) => {
          setIsLoading(false)
          setIsRegister({ error: err })
        })
    }
  }

  useEffect(() => {
    if (isRegister.success === true) {
      setIsRegister('')
      changeFormPage()
    }
  }, [changeFormPage, isRegister])

  return (
    <div className='flex-column-center'>
      {(isRegister.signup && isRegister.signup === false) ||
      isRegister.error ? (
        <PopMessage message='Упс. Что-то пошло не так. Регистрация пользователя не удалась.' />
      ) : null}

      <InputCheck
        label='Имя'
        idName='name'
        type='name'
        placeholder='Введите имя'
        validateForm={validateForm}
        autoCorrect='on'
        autoComplete='name'
        errors={loginErrors}
        value={login}
        handleChange={handleChange}
      />
      <InputCheck
        label='Почта'
        idName='email'
        type='email'
        placeholder='Введите почту'
        validateForm={validateForm}
        autoCorrect='on'
        autoComplete='email'
        errors={emailErrors}
        value={email}
        handleChange={handleChange}
      />
      <InputCheck
        label='Пароль'
        idName='password'
        type='password'
        placeholder='Введите пароль'
        validateForm={validateForm}
        autoCorrect='on'
        autoComplete='password'
        errors={passwordErrors}
        value={password}
        handleChange={handleChange}
      />
      <InputCheck
        label='Повторите пароль'
        idName='passwordRepeat'
        type='password'
        placeholder='Повторите пароль'
        validateForm={validateForm}
        autoCorrect='off'
        autoComplete='off'
        errors={passwordRepeatErrors}
        value={passwordRepeat}
        handleChange={handleChange}
      />

      <button
        className='btn'
        name='submit'
        onClick={handleSubmit}
        disabled={isLoading}
      >
        Зарегистрироваться
      </button>
      <button className='btn' name='back' onClick={() => history.push('/home')}>
        Отмена
      </button>
    </div>
  )
}

export default SignUpForm
