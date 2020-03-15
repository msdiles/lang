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
            <div>
                <form>
                    <div className='form-element-find'>
                        <label htmlFor='find'>Введите слово:</label>
                        <input
                            type='text'
                            id='find'
                            autoComplete='off'
                            onChange={this.wordChange}
                        ></input>
                    </div>
                    <div className='form-element-find'>
                        <div className='form-element-find-btn'>
                            <button type='submit' className='btn'
                            onClick={this.formSubmit}>
                                Найти
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Find
