import React from 'react'
import InputText from '../../../Components/InputText/InputText'
import Button from '../../../Components/Button/Button'
import SelectContainer from '../../../Components/Select/SelectContainer'
import './add.scss'
import WordInfo from '../../../Components/WordInfo'
import { useAdd } from './useAdd'
import { useSwapLanguage } from '../../../utils/useSwapLanguage'
import { useLocation } from 'react-router-dom'

const Add = () => {
  const location = useLocation()

  const initial =
    typeof location.props === 'undefined'
      ? {
          wordFrom: '',
          translateFrom:'',
          translateTo: '',
        }
      : {
          wordFrom: location.props.word,
          translateFrom: location.props.translateFrom,
          translateTo: location.props.translateTo,
        }
  const {
    translateFrom,
    translateTo,
    selectLanguage,
    options,
  } = useSwapLanguage(initial)

  const {
    wordFrom,
    wordTo,
    handleChange,
    handleAdd,
    handleClear,
    handleSubmit,
    transcription,
    active,
    response,
  } = useAdd({ translateTo, initial })
  console.log(initial)
  return (
    <div className='edit-add'>
      <h2>Внесение слова или словосочетания в базу</h2>
      <form id='edit-add-form'>
        <div className='flex-row-start'>
          {active ? (
            <SelectContainer
              name='from'
              options={options}
              currentOption={translateFrom}
              handleSelect={selectLanguage}
            />
          ) : (
            <InputText
              className='small'
              value={translateFrom}
              disabled={true}
            />
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
            options={options.filter(
              (option) => option !== translateFrom
            )}
            currentOption={translateTo}
            handleSelect={selectLanguage}
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
        translateTo={translateTo}
      />
      {response.word !== '' &&
        response.transcription !== '' &&
        response.translations !== '' && (
          <div className='flex-row-center'>
            <Button
              type='submit'
              buttonText='Отправить'
              onClick={handleSubmit}
              form='edit-add-form'
            />
          </div>
        )}
    </div>
  )
}

export default Add
