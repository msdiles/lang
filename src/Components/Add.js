import React, { Component } from 'react'

class Add extends Component {
  constructor(props) {
    super(props)
    this.state = { russian: '', english: '' }

    this.englishChange = this.englishChange.bind(this)
    this.russianChange = this.russianChange.bind(this)
    this.formSubmit = this.formSubmit.bind(this)
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

  render() {
    return (
      <form>
        <label htmlFor='add-russian'>Введите слово:</label>
        <input
          autoComplete='off'
          type='text'
          id='add-russian'
          onChange={this.russianChange}
        />

        <label htmlFor='add-english'>Перевод:</label>
        <input
          autoComplete='off'
          type='text'
          id='add-english'
          onChange={this.englishChange}
        />

        <button type='submit' className='btn' onClick={this.formSubmit}>
          Добавить
        </button>
        
      </form>
    )
  }
}
export default Add
