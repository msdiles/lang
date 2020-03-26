import React, { Component } from 'react'
import Find from './Find'

class FindContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { reqWord: '', response: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const word = e.target.value
    this.setState({ reqWord: word })
  }

  handleSubmit(e) {
    e.preventDefault()
    fetch('/api/word/read', {
      method: 'POST',
      body: JSON.stringify({ word: this.state.reqWord }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(result => this.setState({ response: result }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Find
        reqWord={this.state.reqWord}
        response={this.state.response}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default FindContainer
