import React, { useState } from 'react'
import { InputCheck } from '../../Components/InputCheck/InputCheck'
import useInputValidation from '../../utils/useInputValidation'
import { useHistory, NavLink } from 'react-router-dom'
import { PopMessage } from '../../Components/PopMessage/PopMessage'

const Reset = () => {
  const {
    email,
    emailErrors,
    validateForm,
    handleChange,
  } = useInputValidation()
  const [fetchOptions, setFetchOptions] = useState({
    isLoading: false,
    error: false,
    result: {},
  })
  const history = useHistory()
  //TODO доделать
  const handleSubmit = (e) => {
    e.preventDefault()
    validateForm('all')
    if (
      emailErrors.filter((item) => item.value === false).length ===
      emailErrors.length
    ) {
      setFetchOptions({ ...fetchOptions, isLoading: true })
      fetch('/api/profile/reset', {
        method: 'POST',
        body: JSON.stringify({
          email: email,
        }),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => response.json())
        .then((response) => {
          setFetchOptions({ isLoading: false, error: false, result: response })
        })
        .catch((err) => {
          console.log(err)
          setFetchOptions({ isLoading: false, error: err })
        })
    }
  }

  return (
    <div className='full-size-page'>
      <div className='full-size-page-content'>
        <div className='flex-column-center'>
          {fetchOptions.result && fetchOptions.result === false ? (
            <PopMessage message='Пользователь не найден' />
          ) : fetchOptions.error ? (
            <PopMessage message='Упс. Что-то пошло не так.' />
          ) : null}
          <h3>Не удается войти?</h3>
          <div className='text-field'>
            Введите электронный адрес, и мы отправим вам ссылку для
            восстановления пароля.
          </div>
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
          <button
            nane='reset-password'
            className='btn'
            onClick={handleSubmit}
            disabled={fetchOptions.isLoading}
          >
            Получить ссылку
          </button>
          <div className='line-through-on-side'>Или</div>
          <div className='link'>
            <NavLink to='/signup'> Создать новый аккаунт</NavLink>
          </div>
          <button
            type='button'
            className='btn'
            name='back'
            onClick={() => {
              history.push('/login')
            }}
          >
            Вернуться к входу
          </button>
        </div>
      </div>
    </div>
  )
}

export default Reset
