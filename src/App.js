import React, { Component } from 'react'
import NavigateBar from './NavigateBar'
import './App.css'
import WordField from './WordField'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fieldStatus: 'add'
        }
        this.changeStatus = this.changeStatus.bind(this)
    }
    changeStatus(e) {
      e.preventDefault()
        const check = e.target.value
        console.log(check)
        this.setState({ fieldStatus: check })
    }
    render() {
        return (
            <div className='app'>
                <NavigateBar changeStatus={this.changeStatus} />
                <WordField status={this.state.fieldStatus} />
            </div>
        )
    }
}

export default App
