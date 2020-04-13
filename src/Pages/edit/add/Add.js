import React from 'react'
import InputText from '../../../Components/InputText/InputText'
import Button from '../../../Components/Button/Button'
import SelectContainer from '../../../Components/Select/SelectContainer'
import './add.scss'
import WordInfo from '../../../Components/WordInfo/WordInfo'
import { useAddForm } from './useAddForm'
import { useAdd } from '../../../utils/useAdd'
import { useSwapLanguage } from '../../../utils/useSwapLanguage'
import { useLocation } from 'react-router-dom'

const Add = () => {
  console.log(`Rendering Add component`)

  const location = useLocation()

  const initial =
    typeof location.props === 'undefined'
      ? {
          word: '',
          translateFrom: '',
          translateTo: '',
          redirect: false,
        }
      : {
          word: location.props.word,
          translateFrom: location.props.translateFrom,
          translateTo: location.props.translateTo,
          redirect: true,
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

    transcription,
    active,
  } = useAddForm({ translateTo, translateFrom, initial })
  const { handleSubmitAdd } = useAdd({ translateFrom })

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
            options={options.filter((option) => option !== translateFrom)}
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

      <WordInfo translateTo={translateTo} action='add' />
      {!active && (
        <div className='flex-row-center'>
          <Button
            type='submit'
            buttonText='Отправить'
            onClick={handleSubmitAdd}
            form='edit-add-form'
          />
        </div>
      )}
    </div>
  )
}

export default Add
