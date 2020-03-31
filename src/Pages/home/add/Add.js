import React from 'react'
import InputText from '../../../Components/InputText/InputText'
import Button from '../../../Components/Button/Button'
import SelectContainer from '../../../Components/Select/SelectContainer'
import './add.scss'
import ButtonSwap from '../../../Components/ButtonSwap/ButtonSwap'
import WordInfo from '../../../Components/WordInfo/WordInfo'

const Add = ({
  wordFrom = '',
  wordTo = '',
  addedTo = '',
  addedFrom = '',
  handleChange = f => f,
  handleAdd = f => f,
  handleClear = f => f,
  handleSubmit = f => f,
  swapLanguage = f => f,
  options = [],
  languageFrom = '',
  languageTo = '',
  handleSelect = f => f,
  transcription = ''
}) => {
  return (
    <div className='edit-add'>
      <h2>Внесение слова в базу</h2>
      <form>
        <div className='flex-row'>
          <InputText
            name='wordFrom'
            placeholder='Введите слово'
            value={wordFrom}
            onChange={handleChange}
          />
          <SelectContainer
            name={'from'}
            options={options.filter(option => option !== languageTo)}
            currentOption={languageFrom}
            handleSelect={handleSelect}
          />
          <ButtonSwap swapLanguage={swapLanguage} />
          <SelectContainer
            name={'to'}
            options={options.filter(option => option !== languageFrom)}
            currentOption={languageTo}
            handleSelect={handleSelect}
          />
        </div>
        <div className='flex-row'>
          <InputText
            name='transcription'
            placeholder='Введите транскрипцию'
            value={transcription}
            onChange={handleChange}
          />
        </div>
        <div className='flex-row'>
          <InputText
            name='wordTo'
            placeholder='Перевод'
            value={wordTo}
            onChange={handleChange}
          />
          <Button buttonText='Добавить вариант перевода' onClick={handleAdd} />
          <Button buttonText='Очистить' onClick={handleClear} />
        </div>
        <Button buttonText='Отправить' onClick={handleSubmit} />
      </form>

      <WordInfo
        display={{
          existed: wordFrom  ? true : false,
          response: {
            word: wordFrom,
            transcription: transcription,
            translations: [{ language: languageTo, words: addedTo }]
          }
        }}
        translateTo={languageTo}
      />
    </div>
  )
}

export default Add
