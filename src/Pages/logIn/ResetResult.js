import React from 'react'
import { useHistory } from 'react-router-dom'

const ResetResult = ({ result }) => {
  const history = useHistory()
  return (
    <div className='flex-column-center'>
      {result === true && <p>Пароль успешно изменен.</p>}
      {result === 'tokenExpired' && <p>Время действия ссылки истекло .</p>}
      {result === 'notExist' && <p>Неправильный URL адрес.</p>}

      <button className='btn' name='back' onClick={() => history.push('/home')}>
        Отмена
      </button>
    </div>
  )
}

export default ResetResult
