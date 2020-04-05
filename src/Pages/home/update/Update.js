import React from 'react'
import Button from '../../../Components/Button/Button'
import './update.scss'
import WordInfo from '../../../Components/WordInfo'
import InputText from '../../../Components/InputText/InputText'
import SelectContainer from '../../../Components/Select/SelectContainer'
import { useLocation } from 'react-router-dom'
import { useSwapLanguage } from '../../../utils/useSwapLanguage'
import { useFind } from '../../../utils/useFind'

// const Update = ({
//   result = {},
//   requestWord = '',
//   translateFrom = '',
//   options = [],
//   handleChange = (f) => f,
//   handleSubmitFind = (f) => f,
//   selectLanguage = (f) => f,
//   handleSubmitUpdate=f=>f
// }) => {
//   return (
//     <div className='edit-update'>
//       <h2>Изменение слова или словосочетания</h2>
//       <form>
//         <div className='flex-row-center'>
//           <InputText
//             placeholder='Введите слово'
//             value={requestWord}
//             onChange={handleChange}
//           />
//           <SelectContainer
//             name={'from'}
//             options={options}
//             handleSelect={selectLanguage}
//             currentOption={translateFrom}
//           />
//           <Button name='find' type='submit' onClick={handleSubmitFind} buttonText={'Поиск'} />
//         </div>
//       </form>
//       <WordInfo result={result} />
//       <div className='flex-row-center'>
//         {result.existed!==undefined&&result.existed===true&&<Button name='update' buttonText='Изменить' onClick={handleSubmitUpdate} />}
//       </div>
//     </div>
//   )
// }

const Update = () => {
  const location = useLocation()
  const initial =
    typeof location.props === 'undefined'
      ? { result: '' }
      : { result: location.props }
  const { translateFrom, options, selectLanguage } = useSwapLanguage()
  const { result, requestWord, handleSubmit, setRequestWord } = useFind({
    action: 'delete',
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
      <WordInfo result={result} />
      <div className='flex-row-center'>
        {result.existed !== undefined && result.existed === true && (
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
