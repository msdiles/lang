import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import useInputValidation from '../../utils/useInputValidation'
import { InputCheck } from '../../Components/InputCheck/InputCheck'
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner'
import { PopMessage } from '../../Components/PopMessage/PopMessage'
import LoadingModal from '../../Components/LoadingModal/LoadingModal'
import ResetForm from './ResetForm'

const ResetCheckToken = () => {
  const history = useHistory()
  const { id, token } = useParams()
  const [fetchStatusCheck, setFetchStatusCheck] = useState({
    isLoading: false,
    error: false,
    result: {},
  })

  useEffect(() => {
    setFetchStatusCheck({ isLoading: true, result: {}, error: false })
    fetch('/api/profile/reset/check', {
      method: 'POST',
      body: JSON.stringify({
        token,
        id,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        typeof response.result !== 'undefined'
          ? setFetchStatusCheck({
              isLoading: false,
              error: false,
              result: { success: response.result },
            })
          : setFetchStatusCheck({
              isLoading: false,
              error: true,
              result: {},
            })
      })
      .catch((err) => {
        setFetchStatusCheck({ isLoading: false, error: err, result: {} })
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  const FailureCheck = (
    <div className='flex-column-center'>
      <p>
        {fetchStatusCheck.error
          ? 'Что-то пошло не так. Повторите попытку.'
          : fetchStatusCheck.result.success === 'notExist'
          ? 'Неправильный URL адрес.'
          : fetchStatusCheck.result.success === 'tokenExpired'
          ? 'Время действия ссылке истекло.'
          : null}
      </p>
      <button className='btn' name='back' onClick={() => history.push('/home')}>
        Отмена
      </button>
    </div>
  )

  return (
    <React.Fragment>
      {fetchStatusCheck.isLoading && <LoadingModal />}
      {(fetchStatusCheck.result.success === 'notExist' ||
        fetchStatusCheck.result.success === 'tokenExpired' ||
        fetchStatusCheck.error ||
        fetchStatusCheck.result.success) && (
        <div className='full-size-page'>
          <div className='full-size-page-content'>
            {fetchStatusCheck.result.success === 'success' ? (
              <ResetForm
                fetchStatusCheck={fetchStatusCheck}
                token={token}
                id={id}
              />
            ) : (
              FailureCheck
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default ResetCheckToken
