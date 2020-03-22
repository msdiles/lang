import React, { Component } from 'react'

class Find extends Component {
  constructor(props) {
    super(props)
    this.state = { word: '' }

    this.wordChange = this.wordChange.bind(this)
    this.formSubmit = this.formSubmit.bind(this)
  }

  wordChange(e) {
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
        <label htmlFor='find'>Введите слово:</label>
        <input
          type='text'
          id='find'
          autoComplete='off'
          onChange={this.wordChange}
        ></input>

        <button type='submit' className='btn' onClick={this.formSubmit}>
          Найти
        </button>
      </form>
    )
  }
}

export default Find
