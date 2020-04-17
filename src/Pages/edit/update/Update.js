import React from 'react'
import Button from '../../../Components/Button/Button'
import './update.scss'
import InputText from '../../../Components/InputText/InputText'
import Select from '../../../Components/Select/Select'
import { useLocation } from 'react-router-dom'
import { useSwapLanguage } from '../../../utils/useSwapLanguage'
import { useFind } from '../../../utils/useFind'
import { UpdateWordInfo } from './UpdateWordInfo'

const Update = () => {
  console.log(`Rendering Update component`)

  const location = useLocation()
  const initial =
    typeof location.props === 'undefined'
      ? { redirect: false, requestWord: '' }
      : { redirect: true, requestWord: location.props.requestWord }

  const { translateFrom, options, selectLanguage } = useSwapLanguage()
  const { requestWord, handleSubmit, setRequestWord } = useFind({
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
          <Select
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
      <UpdateWordInfo action='update' redirect={initial.redirect} />
    </div>
  )
}

export default Update
