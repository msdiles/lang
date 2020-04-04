
import React from 'react'
import Button from '../../../Components/Button/Button'
import InputText from '../../../Components/InputText/InputText'
import SelectContainer from '../../../Components/Select/SelectContainer'
import WordInfo from '../../../Components/WordInfo'

const Delete = ({
  result = {},
  requestWord = '',
  translateFrom = '',
  options = [],
  handleChange = (f) => f,
  handleSubmitFind = (f) => f,
  selectLanguage = (f) => f,
  handleSubmitDelete = (f) => f,
}) => {
  return (
    <div className='edit-delete'>
      <h2>Удаления слова или словосочетания</h2>
      <form>
        <div className='flex-row-center'>
          <InputText
            placeholder='Введите слово'
            value={requestWord}
            onChange={handleChange}
          />
          <SelectContainer
            name={'from'}
            options={options}
            handleSelect={selectLanguage}
            currentOption={translateFrom}
          />
          <Button
            type='submit'
            name='find'
            onClick={handleSubmitFind}
            buttonText={'Поиск'}
          />
        </div>
      </form>
      <WordInfo result={result} />
      <div className='flex-row-center'>
        {result.existed !== undefined && result.existed === true && (
          <Button
            name='delete'
            buttonText='Удалить'
            onClick={handleSubmitDelete}
          />
        )}
      </div>
    </div>
  )
}

export default Delete
