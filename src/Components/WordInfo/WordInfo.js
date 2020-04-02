//TODO change WordInfo for add,find,update

import React from 'react'
import './wordinfo.scss'
import Button from '../../Components/Button/Button'

const WordInfo = ({ result = {}, handleClick = f => f }) => {
  // console.log(result)
  let filteredResult = {}
  if (result.existed) {
    try {
      filteredResult = { ...result }
      filteredResult.response.translations = [
        filteredResult.response.translations.filter(
          item => (item.language = filteredResult.translateTo)
        )[0]
      ]
      filteredResult = false
    } catch (error) {
      console.log(error)
    }
  }
  const makeWordSection = info => {
    return (
      <div className='find-result'>
        <span>Слово: {info.response.word} </span>
        {info.response.transcription && (
          <span className='transcription'>[{info.response.transcription}]</span>
        )}
        <Button buttonText='Изменить' name='update' onClick={handleClick} />
        <p>Перевод: </p>
        {info.response.translations.map((element, index) => (
          <ul key={index}>
            {element.words.map((word, index) => (
              <li key={index}>
                {index + 1}. {word}
              </li>
            ))}
          </ul>
        ))}
      </div>
    )
  }
  return <span>Слово: </span>
  // return result.existed ? (
  //   makeWordSection(filteredResult)
  // ) : result.display ? (
  //   <div className='find-result'>
  //     <span>Слово не найдено</span>
  //     <Button buttonText='Добавить' name='add' onClick={handleClick} />
  //   </div>
  // ) : (
  //   <p></p>
  // )
}

export default WordInfo
