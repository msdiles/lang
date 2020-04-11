import React from 'react'
import './wordinfo.scss'
import Button from '../../Components/Button/Button'
import ListOfTranslates from './ListOfTranslates'
import { useActionChooser } from './useActionChooser'
import { useRedirect } from './useRedirect'
import { useDelete } from '../../Pages/home/delete/useDelete'
import { useAdd } from '../../Pages/home/add/useAdd'

const WordInfo = ({
  action = '',
  translateTo = '',
  requestWord = '',
  translateFrom = '',
  redirect = false,
}) => {
  console.log(`Rendering WordInfo component`)
  const filteredResult = useActionChooser({ action, translateTo, redirect })
  const handleClick = useRedirect({
    translateTo,
    requestWord,
    translateFrom,
  })
  const { isDeleted } = useDelete()
  const { isAdded } = useAdd({})
  if (isDeleted && action === 'delete') {
    return (
      <div className='word-info'>
        <p className='deleted-message'>Удаленно!</p>
      </div>
    )
  }
  if (isAdded && action === 'add') {
    return (
      <div className='word-info'>
        <p className='deleted-message'>Добавлено!</p>
      </div>
    )
  }
  if (isAdded === false && action === 'add') {
    return (
      <div className='word-info'>
        <p className='deleted-message'>Не добавлено!</p>
      </div>
    )
  }
  return filteredResult.existed ? (
    <div className='word-info'>
      <span>Слово: {filteredResult.response.word} </span>
      {filteredResult.response.transcription && (
        <span className='transcription'>
          [{filteredResult.response.transcription}]
        </span>
      )}
      {action === 'find' && (
        <Button buttonText='Изменить' name='update' onClick={handleClick} />
      )}
      {action === 'find' && (
        <Button buttonText='Удалить' name='delete' onClick={handleClick} />
      )}
      <ListOfTranslates result={filteredResult} />
    </div>
  ) : filteredResult.display ? (
    <div className='word-info'>
      <span>Слово не найдено</span>
      {action === 'find' && (
        <Button buttonText='Добавить' name='add' onClick={handleClick} />
      )}
    </div>
  ) : (
    <p></p>
  )
}

export default WordInfo
