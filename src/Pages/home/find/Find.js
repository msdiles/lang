import React from 'react'
import InputText from '../../../Components/InputText/InputText'
import Button from '../../../Components/Button/Button'
import SelectContainer from '../../../Components/Select/SelectContainer'
import WordInfo from '../../../Components/WordInfo'
import ButtonSwap from '../../../Components/ButtonSwap/ButtonSwap'
import './find.scss'
import { useFind } from '../../../utils/useFind'
import { useSwapLanguage } from '../../../utils/useSwapLanguage'

const Find = () => {
  const {
    translateFrom,
    translateTo,
    options,
    selectLanguage,
    swapLanguage,
  } = useSwapLanguage()
  const { result, requestWord, handleSubmit, setRequestWord } = useFind(
    {action:'find',
    translateFrom:translateFrom,
    translateTo:translateTo}
  )
  return (
    <React.Fragment>
      <h2>Поиск слова или словосочетания</h2>
      <form>
        <div className='flex-line'>
          <InputText
            placeholder='Введите слово'
            value={requestWord}
            // onChange={handleChange}
            onChange={(e) => setRequestWord(e.target.value)}
          />
          <SelectContainer
            name={'from'}
            options={options.filter((option) => option !== translateTo)}
            handleSelect={selectLanguage}
            currentOption={translateFrom}
          />
          <ButtonSwap swapLanguage={swapLanguage} />

          <SelectContainer
            name={'to'}
            options={options.filter((option) => option !== translateFrom)}
            handleSelect={selectLanguage}
            currentOption={translateTo}
          />
          <Button type='submit' onClick={handleSubmit} buttonText={'Поиск'} />
        </div>
      </form>
      <WordInfo
        result={result}
        translateTo={translateTo}
        requestWord={requestWord}
        translateFrom={translateFrom}
      />
    </React.Fragment>
  )
}

export default Find
