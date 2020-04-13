import React, { useState } from 'react'
import Button from '../../Components/Button/Button'
import './signup.scss'
import { InputCheck } from '../../Components/InputCheck/InputCheck'

const Login = () => {
  const [login, setLogin] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const [loginErrors, setLoginErrors] = useState([
    {
      name: 'isRequired',
      value: false,
      message: 'Это поле обязательно к заполнению.',
    },
    { name: 'isValid', value: false, message: 'Неверный формат.' },
  ])
  const [emailErrors, setEmailErrors] = useState([
    {
      name: 'isRequired',
      value: false,
      message: 'Это поле обязательно к заполнению.',
    },
    { name: 'isValid', value: false, message: 'Неверный формат.' },
    { name: 'isTaken', value: false, message: 'Данный адрес почты уже занят.' },
  ])
  const [passwordErrors, setPasswordErrors] = useState([
    {
      name: 'isRequired',
      value: false,
      message: 'Это поле обязательно к заполнению.',
    },
    { name: 'isValid', value: false, message: 'Пароль имеет неверный формат.' },
  ])
  const [passwordRepeatErrors, setPasswordRepeatErrors] = useState([
    {
      name: 'isRequired',
      value: false,
      message: 'Это поле обязательно к заполнению.',
    },
    { name: 'isRepeat', value: false, message: 'Пароли должны совпадать.' },
  ])

  const validateForm = (name) => {
    if (name === 'name' || name === 'all') {
      const isValidLogin = login.match(
        /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g
      )
        ? true
        : false
      let validateLogin = [...loginErrors]
      validateLogin = validateLogin.map((item) => {
        if (item.name === 'isValid') {
          item.value = isValidLogin ? false : true
        }
        if (item.name === 'isRequired') {
          item.value = login.length > 0 ? false : true
        }
        return item
      })
      setLoginErrors(validateLogin)
    }
    if (name === 'email' || name === 'all') {
      const isValidEmail = email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
        ? true
        : false
      let validatedEmail = [...emailErrors]
      validatedEmail = validatedEmail.map((item) => {
        if (item.name === 'isValid') {
          item.value = isValidEmail ? false : true
        }
        if (item.name === 'isRequired') {
          item.value = email.length > 0 ? false : true
        }
        if (item.name === 'isTaken') {
          item.value = Math.random() < 0.5 ? true : false
        }
        return item
      })
      setEmailErrors(validatedEmail)
    }
    if (name === 'password' || name === 'all') {
      const isValidPassword = password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\w{8,}$/
      )
        ? true
        : false
      let validatedPassword = [...passwordErrors]
      validatedPassword = validatedPassword.map((item) => {
        if (item.name === 'isValid') {
          item.value = isValidPassword ? false : true
        }
        if (item.name === 'isRequired') {
          item.value = password.length > 0 ? false : true
        }
        return item
      })
      setPasswordErrors(validatedPassword)
    }
    if (name === 'passwordRepeat' || name === 'all') {
      const isValidPassword = password !== passwordRepeat
      let validatedPasswordRepeat = [...passwordRepeatErrors]
      validatedPasswordRepeat = validatedPasswordRepeat.map((item) => {
        if (item.name === 'isRepeat') {
          item.value = isValidPassword ? true : false
        }
        if (item.name === 'isRequired') {
          item.value = passwordRepeat.length > 0 ? false : true
        }
        return item
      })
      setPasswordRepeatErrors(validatedPasswordRepeat)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    validateForm('all')
  }

  return (
    <div className='login'>
      <div className='flex-column-start'>
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
          setValue={setLogin}
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
          setValue={setEmail}
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
          setValue={setPassword}
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
          setValue={setPasswordRepeat}
        />

        <Button
          name='submit'
          buttonText='Зарегистрироваться'
          onClick={handleSubmit}
        />
      </div>
    </div>
  )
}

export default Login
