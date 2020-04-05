import React from 'react'
import Button from '../../../Components/Button/Button'
import InputText from '../../../Components/InputText/InputText'
import SelectContainer from '../../../Components/Select/SelectContainer'
import WordInfo from '../../../Components/WordInfo'
import { useFind } from '../../../utils/useFind'
import { useSwapLanguage } from '../../../utils/useSwapLanguage'
import { useLocation } from 'react-router-dom'

const Delete = () => {
  const location = useLocation()
  console.log(location)
  const initial =
    typeof location.props === 'undefined'
      ? { result: '' }
      : { result: location.props }
      console.log(initial.result)
  const { translateFrom, options, selectLanguage } = useSwapLanguage()
  const { result, requestWord, handleSubmit, setRequestWord } = useFind({
    action: 'delete',
    translateFrom: translateFrom,
    initial
  })
  console.log(result)
  return (
    <div className='edit-delete'>
      <h2>Удаления слова или словосочетания</h2>
      <form>
        <div className='flex-row-center'>
          <InputText
            placeholder='Введите слово'
            value={requestWord}
            onChange={(e) => setRequestWord(e.target.value)}
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
            onClick={handleSubmit}
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
            onClick={() => console.log('delete')}
          />
        )}
      </div>
    </div>
  )
}

export default Delete
