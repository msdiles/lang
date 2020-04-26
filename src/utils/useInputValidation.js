import { useState } from 'react'

const useInputValidation = (options) => {
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
    {
      name: 'isLength',
      value: false,
      length: [5, 30],
      message: 'От 5 до 30 символов',
    },
  ])
  const [emailErrors, setEmailErrors] = useState([
    {
      name: 'isRequired',
      value: false,
      message: 'Это поле обязательно к заполнению.',
    },
    { name: 'isValid', value: false, message: 'Неверный формат.' },
    {
      name: 'isTaken',
      value: false,
      checkedEmail: '',
      message: 'Данный адрес почты уже занят.',
    },
    {
      name: 'isLength',
      value: false,
      length: [255],
      message: 'Не более 255 символов',
    },
  ])

  const [passwordErrors, setPasswordErrors] = useState([
    {
      name: 'isRequired',
      value: false,
      message: 'Это поле обязательно к заполнению.',
    },
    { name: 'isValid', value: false, message: 'Пароль имеет неверный формат.' },
    {
      name: 'isLength',
      value: false,
      length: [8, 128],
      message: 'От 8 до 128 символов',
    },
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
    if (name === 'name' || name === 'all') ValidateLogin()
    if (name === 'email' || name === 'all') ValidateEmail()
    if (name === 'password' || name === 'all') ValidatePassword()
    if (name === 'passwordRepeat' || name === 'all') ValidatePasswordRepeat()
  }

  const ValidateLogin = () => {
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

      if (item.name === 'isLength') {
        item.value =
          login.length >= item.length[0] && login.length <= item.length[1]
            ? false
            : true
      }
      return item
    })
    setLoginErrors(validateLogin)
  }

  const ValidateEmail = () => {
    const isValidEmail = email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
      ? true
      : false
    let validatedEmail = [...emailErrors]
    let emailIsValid = false
    validatedEmail = validatedEmail.map((item) => {
      if (item.name === 'isValid') {
        item.value = isValidEmail ? false : true
        emailIsValid = isValidEmail ? true : false
      }
      if (item.name === 'isRequired') {
        item.value = email.length > 0 ? false : true
      }
      if (
        item.name === 'isTaken' &&
        item.checkedEmail !== email &&
        emailIsValid
      ) {
        if (options && options.checkEmail === false) {
        } else {
          checkEmail()
        }
      }

      if (item.name === 'isLength') {
        item.value = email.length <= item.length[0] ? false : true
      }
      return item
    })
    setEmailErrors(validatedEmail)
  }

  const ValidatePassword = () => {
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
      if (item.name === 'isLength') {
        item.value =
          password.length >= item.length[0] && password.length <= item.length[1]
            ? false
            : true
      }

      return item
    })
    setPasswordErrors(validatedPassword)
  }

  const ValidatePasswordRepeat = () => {
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

  const checkEmail = () => {
    fetch('/api/profile/email', {
      method: 'POST',
      body: JSON.stringify({ email: email }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((response) => {
        let { value, checkedEmail } = emailErrors.filter(
          (item) => item.name === 'isTaken'
        )[0]
        if (response.success === false) {
          value = false
          checkedEmail = email
        }
        if (response.success === true) {
          value = true
          checkedEmail = email
        }
        setEmailErrors([
          ...emailErrors.filter((item) => item.name !== 'isTaken'),
          {
            ...emailErrors.filter((item) => item.name === 'isTaken')[0],
            value: value,
            checkedEmail: checkedEmail,
          },
        ])
      })
      .catch((err) => console.log(err))
  }

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'name':
        setLogin(e.target.value)
        break
      case 'email':
        setEmail(e.target.value)
        break
      case 'password':
        setPassword(e.target.value)
        break
      case 'passwordRepeat':
        setPasswordRepeat(e.target.value)
        break

      default:
        break
    }
  }

  return {
    login,
    setLogin,
    loginErrors,
    setLoginErrors,
    email,
    setEmail,
    emailErrors,
    setEmailErrors,
    password,
    setPassword,
    passwordErrors,
    setPasswordErrors,
    passwordRepeat,
    setPasswordRepeat,
    passwordRepeatErrors,
    setPasswordRepeatErrors,
    validateForm,
    handleChange,
  }
}

export default useInputValidation
