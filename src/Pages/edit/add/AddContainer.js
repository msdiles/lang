import React, { Component } from 'react'
import Add from './Add'

class AddContainer extends Component {
  constructor() {
    super()
    this.state = {
      russian: '',
      english: '',
      addedRussian: '',
      addedEnglish: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  handleChange(e) {
    e.preventDefault()
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit(e) {
    e.preventDefault()
    fetch('/api/word/create', {
      method: 'POST',
      body: JSON.stringify({
        russian: this.state.addedRussian,
        english: this.state.addedEnglish
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }

  handleAdd() {
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

  handleClear() {
    this.setState({
      russian: '',
      english: '',
      addedRussian: '',
      addedEnglish: []
    })
  }
  render() {
    return (
      <Add
        russian={this.state.russian}
        english={this.state.english}
        addedEnglish={this.state.addedEnglish}
        addedRussian={this.state.addedRussian}
        handleChange={this.handleChange}
        handleAdd={this.handleAdd}
        handleClear={this.handleClear}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default AddContainer
