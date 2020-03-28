import React, { Component } from 'react'
import Select from './Select'
import './select.scss'

class SelectContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { isClosed: true, focusedOption: 0 }

    this.toggleClass = this.toggleClass.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleKey = this.handleKey.bind(this)
    this.wrapper = React.createRef()
  }

  toggleClass() {
    const currentState = this.state.isClosed
    this.setState({ isClosed: !currentState })
  }

  handleBlur(e) {
    if (this.wrapper.current && !this.wrapper.current.contains(e.target)) {
      this.setState({isClosed:true})
    }
  }

  handleKey(e) {
    const focusedOption = this.state.focusedOption
    if (e.keyCode === 38 || e.keyCode === 40 || e.keyCode === 13) {
      e.preventDefault()
    }
    if (e.keyCode === 38) {
      if (e.target.className !== 'selector') {
        const newOption =
          focusedOption === 0
            ? this.props.options.length - 1
            : focusedOption - 1
        const NextElement = e.target.parentNode.childNodes[newOption]
        this.setState({ focusedOption: newOption }, () => {
          NextElement.focus()
        })
      }
    }
    if (e.keyCode === 40) {
      if (e.target.className !== 'selector') {
        const newOption =
          focusedOption === this.props.options.length - 1
            ? 0
            : focusedOption + 1
        const NextElement = e.target.parentNode.childNodes[newOption]
        this.setState({ focusedOption: newOption }, () => {
          NextElement.focus()
        })
      }
    }
    if (e.keyCode === 13) {
      if (e.target.className === 'selector') {
        const isSelectorClosed =
        e.target === 'closed selector' ? true : false
        const optionsElement = e.target.childNodes[1].childNodes
        e.target.className =
          isSelectorClosed === true ? 'selector' : 'closed selector'
        if (isSelectorClosed === true) {
          optionsElement[this.state.focusedOption].focus()
        }
      } else {
        this.props.handleSelect(e)
        e.target.parentNode.parentNode.focus()
      }
      this.toggleClass()
    }
    if (e.keyCode === 9) {
      if (e.target.className !== 'selector') {
        const newOption =
          e.target.id === this.props.options.length - 1 ? 0 : +e.target.id + 1
        if (newOption === 3) {
          this.toggleClass()
        }
        this.setState({ focusedOption: newOption })
      }
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleBlur)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleBlur)
  }

  render() {
    const { name, options, handleSelect, currentOption } = this.props
    return (
      <Select
        wrapper={this.wrapper}
        name={name}
        options={options}
        currentOption={currentOption}
        isClosed={this.state.isClosed}
        focusedOption={this.state.focusedOption}
        handleSelect={handleSelect}
        toggleClass={this.toggleClass}
        handleBlur={this.handleBlur}
        handleKey={this.handleKey}
      />
    )
  }
}

export default SelectContainer
