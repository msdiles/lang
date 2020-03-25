import React, { Component } from 'react'
import InputText from '../../../Components/InputText/InputText'
import Button from '../../../Components/Button/Button'

class Find extends Component {
  constructor(props) {
    super(props)
    this.state = { word: '' }

    this.handleChange = this.handleChange.bind(this)
    this.formSubmit = this.formSubmit.bind(this)
  }

  handleChange(e) {
    const word = e.target.value
    this.setState({ word: word })
  }

  formSubmit(e) {
    e.preventDefault()
    console.log(`${this.state.word}`)
  }
  render() {
    return (
      <form>
        <h2>Поиск слова или словосочетания</h2>
        <InputText
          placeholder='Введите слово'
          value={this.state.word}
          onChange={this.handleChange}
        />
        <Button onClick={this.formSubmit} buttonText={'Поиск'} />
      </form>
    )
  }
}

export default Find
