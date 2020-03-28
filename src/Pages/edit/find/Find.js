import React from 'react'
import InputText from '../../../Components/InputText/InputText'
import Button from '../../../Components/Button/Button'
import SelectContainer from '../../../Components/Select/SelectContainer'
import './find.scss'

const Find = ({
  reqWord = '',
  response = {},
  selectedLanguageFrom = '',
  selectedLanguageTo = '',
  options = [],
  handleChange = f => f,
  handleSubmit = f => f,
  selectLanguage = f => f
}) => {
  return (
    <React.Fragment>
      <h2>Поиск слова или словосочетания</h2>
      <form>
        <div className='flex-line'>
          <InputText
            placeholder='Введите слово'
            value={reqWord}
            onChange={handleChange}
          />
          <SelectContainer
            name={'from'}
            options={options}
            handleSelect={selectLanguage}
            currentOption={selectedLanguageFrom}
          />
          <SelectContainer
            name={'to'}
            options={options}
            handleSelect={selectLanguage}
            currentOption={selectedLanguageTo}
          />
          <Button onClick={handleSubmit} buttonText={'Поиск'} />
        </div>
      </form>

      {response.error && <p>Слово не найдено</p>}
      {response.english && <ul>{listMaker(response.english)}</ul>}
    </React.Fragment>
  )
}

const listMaker = list => {
  return list.map((item, index) => <li key={index}>{item}</li>)
}

export default Find
