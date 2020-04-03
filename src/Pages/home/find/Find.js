import React from 'react'
import InputText from '../../../Components/InputText/InputText'
import Button from '../../../Components/Button/Button'
import SelectContainer from '../../../Components/Select/SelectContainer'


import './find.scss'
import WordInfo from '../../../Components/WordInfo'
import ButtonSwap from '../../../Components/ButtonSwap/ButtonSwap'

const Find = ({
  result={},
  requestWord = '',
  translateFrom = '',
  translateTo = '',
  options = [],
  handleChange = f => f,
  handleSubmit = f => f,
  selectLanguage = f => f,
  swapLanguage = f => f
}) => {
  console.log('add result : ',result)
  return (
    <React.Fragment>
      <h2>Поиск слова или словосочетания</h2>
      <form>
        <div className='flex-line'>
          <InputText
            placeholder='Введите слово'
            value={requestWord}
            onChange={handleChange}
          />
          <SelectContainer
            name={'from'}
            options={options.filter(option => option !== translateTo)}
            handleSelect={selectLanguage}
            currentOption={translateFrom}
          />
          <ButtonSwap swapLanguage={swapLanguage}/>

          <SelectContainer
            name={'to'}
            options={options.filter(option => option !== translateFrom)}
            handleSelect={selectLanguage}
            currentOption={translateTo}
          />
          <Button onClick={handleSubmit} buttonText={'Поиск'} />

        </div>
      </form>
      <WordInfo result={result} translateTo={translateTo}/>
    </React.Fragment>
  )
}

export default Find
