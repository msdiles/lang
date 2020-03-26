import React, { Component } from 'react'
import './select.scss'

class Select extends Component {
  constructor(props) {
    super(props)
    this.state = { isClosed: false }

    this.toggleClass = this.toggleClass.bind(this)
  }

  toggleClass() {
    const currentState = this.state.isClosed
    this.setState({ isClosed: !currentState })
  }

  render() {
    const { option } = this.props
    return (
      <div className='selector'>
        <div className='toggle-btn' onClick={this.toggleClass}></div>
        <div className={this.state.isClosed ? 'closed options ' : 'options'}>
          {option.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
    )
  }
}

export default Select
