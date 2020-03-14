import React, { Component } from 'react'

class Add extends Component {
    constructor(props) {
        super(props)
        this.state = { russian: '', english: '' }

        this.englishChange = this.englishChange.bind(this)
        this.russianChange = this.russianChange.bind(this)
    }

    englishChange(e) {
        const word = e.target.value
        this.setState({ english: word })
    }

    russianChange(e) {
        const word = e.target.value
        this.setState({ russian: word })
    }

    render() {
        return (
            <div>
                <form>
                    <div className='form-element'>
                        <label htmlFor='add-russian'>Russian:</label>
                        <input
                            type='text'
                            id='add-russian'
                            onChange={this.russianChange}
                        />
                    </div>

                    <div className='form-element'>
                        <label htmlFor='add-english'>English:</label>
                        <input
                            type='text'
                            id='add-english'
                            onChange={this.englishChange}
                        />
                    </div>
                    <div className='form-element'>
                        <p>
                            {this.state.russian}-{this.state.english}
                        </p>
                    </div>
                    <div className='form-element'>
                        <button type='submit'>Send</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default Add
