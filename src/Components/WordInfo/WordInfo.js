import React from 'react'
import './wordinfo.scss'
import Button from '../../Components/Button/Button'
import { useHistory } from 'react-router-dom'
//TODO split to container and presentational component
const FindResult = ({ result = {}, translateTo = '', display = {} }) => {
  const history = useHistory()
// FIXME fix handleClick props wordFrom
  const handleClick = () => {
    history.push({ pathname: '/home/add', props: { wordFrom: 'asda' } })
  }
// TODO change name of display
  if (display.existed) {
    result = display
  }
  const existed = result.existed ? result.existed : ''
  let word = ''
  let transcription = ''
  let languages = []
  if (existed) {
    word = result.response.word
    transcription = result.response.transcription
    languages = result.response.translations
  }
  return existed ? (
    <div className='find-result'>
      <span>Слово: {word} </span>
      {transcription && (
        <span className='transcription'>[{transcription}]</span>
      )}
      <p>Перевод: </p>
      <ul>
        {languages.length > 0 &&
          languages.filter(item => item.language === translateTo)[0] &&
          languages.filter(item => item.language === translateTo)[0].words &&
          languages
            .filter(item => item.language === translateTo)[0]
            .words.map((word, index) => (
              <li key={index}>
                {index + 1}. {word}
              </li>
            ))}
      </ul>
    </div>
  ) : Object.keys(result).length > 0 ? (
    <div className='find-result'>
      <span>Слово не найдено</span>
      <Button buttonText='Добавить' onClick={handleClick} />
    </div>
  ) : (
    <p></p>
  )
}

export default FindResult
