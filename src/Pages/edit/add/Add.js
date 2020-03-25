import React, { Component } from 'react'
import InputText from '../../../Components/InputText/InputText'
import Button from '../../../Components/Button/Button'
import WordTable from './WordTable'

class Add extends Component {
  constructor(props) {
    super(props)
    this.state = {
      russian: '',
      english: '',
      addedRussian: '',
      addedEnglish: []
    }

    this.formSubmit = this.formSubmit.bind(this)
    this.formAdd = this.formAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    e.preventDefault()
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  formSubmit(e) {
    e.preventDefault()
    console.log(`${this.state.russian}-${this.state.english}`)
  }

  formAdd() {
    const russian = this.state.russian
    if (
      this.state.english !== '' &&
      !this.state.addedEnglish.includes(this.state.english)
    ) {
      const english = this.state.english
      this.setState({
        addedRussian: russian,
        addedEnglish: [...this.state.addedEnglish, english]
      })
    }

  }

  render() {
    return (
      <React.Fragment>
        <h2>Внесение слова в базу</h2>
        <form>
          <InputText
            name='russian'
            placeholder='Введите слово'
            value={this.state.russian}
            onChange={this.handleChange}
          />
          <InputText
            name='english'
            placeholder='Перевод'
            value={this.state.english}
            onChange={this.handleChange}
          />
          <WordTable
            russian={this.state.addedRussian}
            english={this.state.addedEnglish}
          />
          <Button
            buttonText='Добавить вариант перевода'
            onClick={this.formAdd}
          />
          <Button buttonText='Отправить' onClick={this.formSubmit} />
        </form>
      </React.Fragment>
    )
  }
}
export default Add
