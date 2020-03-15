import React from 'react'

import Add from './Add'
import Find from './Find'

function switchWordField(param) {
    switch (param) {
        case 'Add':
            return <Add />
        case 'Find':
            return <Find />
        default:
            return <Add />
    }
}

function WordField({ status }) {
    return <div className='word-field'>{switchWordField(status)}</div>
}

export default WordField
