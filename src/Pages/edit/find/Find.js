import React from 'react'
import InputText from '../../../Components/InputText/InputText'
import Button from '../../../Components/Button/Button'
import Select from '../../../Components/Select/Select'

const Find = ({
  reqWord = '',
  response = {},
  handleChange = f => f,
  handleSubmit = f => f
}) => {
  return (
    <React.Fragment>
      <form>
        <h2>Поиск слова или словосочетания</h2>
        <InputText
          placeholder='Введите слово'
          value={reqWord}
          onChange={handleChange}
        />
        <Select option={['english','russian']}/>
        <Button onClick={handleSubmit} buttonText={'Поиск'} />
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
