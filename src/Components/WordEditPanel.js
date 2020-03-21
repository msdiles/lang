import React, { Component } from 'react'
import NavigateBar from './NavigateBar'
import WordField from './WordField'
import WordsTable from './WordsTable'

class wordEditPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fieldStatus: 'add'
    }
    this.changeStatus = this.changeStatus.bind(this)
  }
  changeStatus(e) {
    e.preventDefault()
    const check = e.target.name
    console.log(check)
    this.setState({ fieldStatus: check })
  }
  render() {
    return (
      <div className='app'>
        <NavigateBar changeStatus={this.changeStatus} />
        <WordField status={this.state.fieldStatus} />
        <WordsTable />
      </div>
    )
  }
}

export default wordEditPanel
