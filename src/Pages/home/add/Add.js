import React from 'react'
import InputText from '../../../Components/InputText/InputText'
import Button from '../../../Components/Button/Button'
import SelectContainer from '../../../Components/Select/SelectContainer'
import './add.scss'
import WordInfo from '../../../Components/WordInfo'

const Add = ({
  wordFrom = '',
  wordTo = '',
  handleChange = (f) => f,
  handleAdd = (f) => f,
  handleClear = (f) => f,
  handleSubmit = (f) => f,
  options = [],
  languageFrom = '',
  languageTo = '',
  handleSelect = (f) => f,
  transcription = '',
  active = true,
  response = {},
}) => {
  return (
    <div className='edit-add'>
      <h2>Внесение слова или словосочетания в базу</h2>
      <form id='edit-add-form'>
        <div className='flex-row-start'>
          {active ? (
            <SelectContainer
              name='from'
              options={options}
              currentOption={languageFrom}
              handleSelect={handleSelect}
            />
          ) : (
            <InputText className='small' value={languageFrom} disabled={true} />
          )}
          <InputText
            name='wordFrom'
            placeholder='Введите слово'
            value={wordFrom}
            onChange={handleChange}
          />
          <InputText
            name='transcription'
            placeholder='Введите транскрипцию'
            value={transcription}
            onChange={handleChange}
          />
        </div>
        <div className='flex-row-start'>
          <SelectContainer
            name='to'
            options={options.filter((option) => option !== languageFrom)}
            currentOption={languageTo}
            handleSelect={handleSelect}
          />
          <InputText
            name='wordTo'
            placeholder='Перевод'
            value={wordTo}
            onChange={handleChange}
          />
          <Button buttonText='Добавить перевод' onClick={handleAdd} />
        </div>
        <Button buttonText='Очистить' onClick={handleClear} />
      </form>

      <WordInfo
        result={{
          existed: true,
          response: response,
          display: true,
          action: 'add',
        }}
        translateTo={languageTo}
      />
      {(response.word!==''&&response.transcription!==''&&response.translations!=='')&&
      <div className='flex-row-center'><Button
        type='submit'
        buttonText='Отправить'
        onClick={handleSubmit}
        form='edit-add-form'
      /></div>}
    </div>
  )
}

export default Add
