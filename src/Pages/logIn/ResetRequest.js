import React, { useState, useEffect } from 'react'
import { InputCheck } from '../../Components/InputCheck/InputCheck'
import useInputValidation from '../../utils/useInputValidation'
import { useHistory, NavLink } from 'react-router-dom'
import { PopMessage } from '../../Components/PopMessage/PopMessage'
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner'

const ResetRequest = () => {
  console.log('Rendering Reset component')

  const [stage, setStage] = useState(1)

  const {
    email,
    emailErrors,
    validateForm,
    handleChange,
    checkErrors,
  } = useInputValidation({ checkEmail: false })
  const [fetchOptions, setFetchOptions] = useState({
    isLoading: false,
    error: false,
    result: {},
  })
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    validateForm('all')
    if (checkErrors(emailErrors)) {
      setFetchOptions({ error: false, result: {}, isLoading: true })
      fetch('/api/profile/reset/get/', {
        method: 'POST',
        body: JSON.stringify({
          email: email,
        }),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response)
          typeof response.success !== 'undefined'
            ? setFetchOptions({
                isLoading: false,
                error: false,
                result: { success: response.success },
              })
            : setFetchOptions({
                isLoading: false,
                error: true,
                result: {},
              })
        })
        .catch((err) => {
          setFetchOptions({ isLoading: false, error: err, result: {} })
        })
    }
  }

  useEffect(() => {
    if (fetchOptions.result.success) setStage(2)
  }, [fetchOptions.result.success])

  console.log(
    fetchOptions.result.success && fetchOptions.result.success === false
  )

  if (stage === 1)
    return (
      <div className='full-size-page'>
        <div className='full-size-page-content'>
          <div className='flex-column-center'>
            {fetchOptions.isLoading && <LoadingSpinner />}
            {fetchOptions.result.success === false ? (
              <PopMessage message='Пользователь не найден. Проверьте введенные данные' />
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

  if (stage === 2)
    return (
      <div className='full-size-page'>
        <div className='full-size-page-content'>
          <div className='flex-column-center'>
            <p>
              На указанный адрес электронной почты высланы дальнейшие
              инструкции.
            </p>
            <button
              className='btn'
              type='button'
              name='reset-end'
              onClick={() => {
                setStage(1)
                history.push('./home')
              }}
            >
              Продолжить
            </button>
          </div>
        </div>
      </div>
    )
}

export default ResetRequest
