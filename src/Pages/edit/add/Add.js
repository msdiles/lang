import React from 'react'
import InputText from '../../../Components/InputText/InputText'
import Button from '../../../Components/Button/Button'
import WordTable from './WordTable'
import './add.scss'

const Add = ({
  russian = '',
  english = '',
  addedEnglish = '',
  addedRussian = '',
  handleChange = f => f,
  handleAdd = f => f,
  handleClear = f => f,
  handleSubmit = f => f
}) => {
  return (
    <div className='edit-add'>
      <h2>Внесение слова в базу</h2>
      <form>
        <InputText
          name='russian'
          placeholder='Введите слово'
          value={russian}
          onChange={handleChange}
        />
        <InputText
          name='english'
          placeholder='Перевод'
          value={english}
          onChange={handleChange}
        />
        <Button buttonText='Добавить вариант перевода' onClick={handleAdd} />
        <Button buttonText='Очистить' onClick={handleClear} />
        <Button buttonText='Отправить' onClick={handleSubmit} />
      </form>
      <WordTable
        russian={addedRussian}
        english={addedEnglish}
      />
    </div>
  )
}

export default Add
