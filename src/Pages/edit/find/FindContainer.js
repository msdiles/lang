import React, { Component } from 'react'
import Find from './Find'

const options = ['English', 'Russian', 'Germany']
class FindContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reqWord: '',
      response: '',
      selectedLanguageFrom: '',
      selectedLanguageTo: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.selectLanguage = this.selectLanguage.bind(this)
  }

  handleChange(e) {
    const word = e.target.value
    this.setState({ reqWord: word })
  }

  selectLanguage(e) {
    const { language, name } = e.target.dataset
    if (language && name) {
      if (name === 'from') {
        this.setState({ selectedLanguageFrom: language })
      } else if (name === 'to') {
        this.setState({ selectedLanguageTo: language })
      }
    }
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
        selectedLanguageFrom={this.state.selectedLanguageFrom}
        selectedLanguageTo={this.state.selectedLanguageTo}
        options={options}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        selectLanguage={this.selectLanguage}
      />
    )
  }
}

export default FindContainer
