import React, { Component } from 'react'

class Add extends Component {
  constructor(props) {
    super(props)
    this.state = { russian: '', english: '', addRussian: '', addEnglish: [] }

    this.englishChange = this.englishChange.bind(this)
    this.russianChange = this.russianChange.bind(this)
    this.formSubmit = this.formSubmit.bind(this)
    this.formAdd = this.formAdd.bind(this)
  }

  englishChange(e) {
    const word = e.target.value
    this.setState({ english: word })
  }

  russianChange(e) {
    const word = e.target.value
    this.setState({ russian: word })
  }

  formSubmit(e) {
    e.preventDefault()
    console.log(`${this.state.russian}-${this.state.english}`)
  }

  formAdd() {
    const russian = this.state.russian
    const english = this.state.english
    this.setState({
      addRussian: russian,
      addEnglish: [...this.state.addEnglish, english]
    })
  }

  render() {
    const addRussian =
      this.state.addRussian !== '' ? <p>{this.state.addRussian}</p> : ''
    const addEnglish =
      this.state.addEnglish != false ? (
        <ul>
          {this.state.addEnglish.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      ) : (
        ''
      )
    return (
      <React.Fragment>
        <h2>Внесение слова в базу</h2>
        <form>
          <label htmlFor='add-russian'>Введите слово:</label>
          <input
            autoComplete='off'
            type='text'
            id='add-russian'
            value={this.state.russian}
            onChange={this.russianChange}
          />
          <label htmlFor='add-english'>Перевод:</label>
          <input
            autoComplete='off'
            type='text'
            id='add-english'
            value={this.state.english}
            onChange={this.englishChange}
          />
          {addRussian}
          {addEnglish}
          <button type='button' className='btn' onClick={this.formAdd}>
            Добавить вариант перевода
          </button>
          <button type='submit' className='btn' onClick={this.formSubmit}>
            Отправить
          </button>
        </form>
      </React.Fragment>
    )
  }
}
export default Add
