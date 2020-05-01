import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import useInputValidation from '../../utils/useInputValidation'
import { InputCheck } from '../../Components/InputCheck/InputCheck'
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner'
import { PopMessage } from '../../Components/PopMessage/PopMessage'
import ResetResult from './ResetResult'

const ResetForm = ({ fetchStatusCheck, token, id }) => {
  const history = useHistory()

  const [fetchStatusReset, setFetchStatusReset] = useState({
    isLoading: false,
    error: false,
    result: {},
  })

  const {
    password,
    passwordErrors,
    passwordRepeat,
    passwordRepeatErrors,
    validateForm,
    handleChange,
    checkErrors,
  } = useInputValidation()

  const handleSubmit = (e) => {
    e.preventDefault()
    validateForm('all')
    if (checkErrors(passwordErrors, passwordRepeatErrors)) {
      setFetchStatusReset({ isLoading: true, result: {}, error: false })
      fetch('/api/profile/reset/password', {
        method: 'POST',
        body: JSON.stringify({
          token,
          id,
          password,
        }),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response)
          typeof response.success !== 'undefined'
            ? setFetchStatusReset({
                isLoading: false,
                error: false,
                result: { success: response.success },
              })
            : setFetchStatusReset({
                isLoading: false,
                error: true,
                result: {},
              })
        })
        .catch((err) => {
          setFetchStatusReset({ isLoading: false, error: err, result: {} })
        })
    }
  }

  console.log(fetchStatusReset.result)
  return fetchStatusReset.result.success ? (
    <ResetResult result={fetchStatusReset.result.success} />
  ) : (
    <div className='flex-column-center'>
      {fetchStatusReset.isLoading && <LoadingSpinner />}
      {fetchStatusReset.error && (
        <PopMessage message='Упс. Что-то пошло не так.' />
      )}
      {!fetchStatusReset.result.success && (
        <React.Fragment>
          <h3 className=''>Введите новый пароль.</h3>
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
            disabled={fetchStatusCheck.isLoading}
          >
            Сбосить пароль
          </button>
        </React.Fragment>
      )}

      <button className='btn' name='back' onClick={() => history.push('/home')}>
        Отмена
      </button>
    </div>
  )
}

export default ResetForm
