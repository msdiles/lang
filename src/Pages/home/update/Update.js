import React from 'react'
import Button from '../../../Components/Button/Button'
import './update.scss'
import WordInfo from '../../../Components/WordInfo/WordInfo'
import InputText from '../../../Components/InputText/InputText'
import SelectContainer from '../../../Components/Select/SelectContainer'
import { useLocation } from 'react-router-dom'
import { useSwapLanguage } from '../../../utils/useSwapLanguage'
import { useFind } from '../../../utils/useFind'

const Update = () => {
  console.log(`Rendering Update component`)

  const location = useLocation()
  const initial =
    typeof location.props === 'undefined'
      ? { redirect: false, requestWord: '' }
      : { redirect: true, requestWord: location.props.requestWord }
      
  const { translateFrom, options, selectLanguage } = useSwapLanguage()
  const { result, requestWord, handleSubmit, setRequestWord } = useFind({
    action: 'update',
    translateFrom: translateFrom,
    initial,
  })
  return (
    <div className='edit-update'>
      <h2>Изменение слова или словосочетания</h2>
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
            name='find'
            type='submit'
            onClick={handleSubmit}
            buttonText={'Поиск'}
          />
        </div>
      </form>
      <WordInfo action='update' redirect={initial.redirect} />
      <div className='flex-row-center'>
        {((result.existed !== undefined && result.existed === true) ||
          initial.redirect === true) && (
          <Button
            name='update'
            buttonText='Изменить'
            onClick={() => console.log('updated')}
          />
        )}
      </div>
    </div>
  )
}

export default Update
