import React from 'react'
import Button from '../../../Components/Button/Button'
import InputText from '../../../Components/InputText/InputText'
import SelectContainer from '../../../Components/Select/SelectContainer'
import WordInfo from '../../../Components/WordInfo/WordInfo'
import { useFind } from '../../../utils/useFind'
import { useSwapLanguage } from '../../../utils/useSwapLanguage'
import { useLocation } from 'react-router-dom'
import { useDelete } from './useDelete'

const Delete = () => {
  console.log(`Rendering Delete component`)

  const location = useLocation()
  const initial =
    typeof location.props === 'undefined'
      ? { redirect: false, requestWord: '' }
      : { redirect: true, requestWord: location.props.requestWord }
  const { translateFrom, options, selectLanguage } = useSwapLanguage()
  const { result, requestWord, handleSubmit, setRequestWord } = useFind({
    action: 'delete',
    translateFrom: translateFrom,
    initial,
  })
  const { handleSubmitDelete } = useDelete()
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
      <WordInfo action='delete' redirect={initial.redirect} />
      <div className='flex-row-center'>
        {((result.existed !== undefined && result.existed === true) ||
          initial.redirect === true) && (
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
