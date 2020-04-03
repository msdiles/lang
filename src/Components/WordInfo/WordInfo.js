//TODO change WordInfo for add,find,update

import React from 'react'
import './wordinfo.scss'
import Button from '../../Components/Button/Button'
import ListOfTranslates from './ListOfTranslates'

const WordInfo = ({ result = {}, handleClick = f => f }) => {
  console.log(result)
  return result.existed ? (
    <div className='find-result'>
      <span>Слово: {result.response.word} </span>
      {result.response.transcription && (
        <span className='transcription'>[{result.response.transcription}]</span>
      )}
     { result.action==='find'&& <Button buttonText='Изменить' name='update' onClick={handleClick} />}
     { result.action==='find'&& <Button buttonText='Удалить' name='delete' onClick={handleClick} />}
     <ListOfTranslates result={result}/>
      {/* <p>Перевод: </p>
      {result.response.translations.map((element, index) => (
        <React.Fragment>
          <p>{element.language}</p>
          <ul key={index}>
            {element.words.map((word, index) => (
              <li key={index}>
                {index + 1}. {word}
              </li>
            ))}
          </ul>
        </React.Fragment>
      ))} */}
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
