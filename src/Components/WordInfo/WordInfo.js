//TODO add Input fot each string ( and p>span,span to li, span,span,SPAN)

import React from 'react'
import './wordinfo.scss'
import Button from '../../Components/Button/Button'
import ListOfTranslates from './ListOfTranslates'

const WordInfo = ({ result = {}, handleClick = f => f }) => {
  return result.existed ? (
    <div className='find-result'>
      <span>Слово: {result.response.word} </span>
      {result.response.transcription && (
        <span className='transcription'>[{result.response.transcription}]</span>
      )}
     { result.action==='find'&& <Button buttonText='Изменить' name='update' onClick={handleClick} />}
     { result.action==='find'&& <Button buttonText='Удалить' name='delete' onClick={handleClick} />}
     <ListOfTranslates result={result}/>
    </div>
  ) : result.display ? (
    <div className='find-result'>
      <span>Слово не найдено</span>
      <Button buttonText='Добавить' name='add' onClick={handleClick} />
    </div>
  ) : (
    <p></p>
  )
}

export default WordInfo
