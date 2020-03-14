import React from 'react'

import Add from './Add'
import Edit from './Edit'
import Find from './Find'
import Delete from './Delete'

function switchWordField(param) {
    switch (param) {
        case 'Add':
            return <Add />
        case 'Delete':
            return <Delete />
        case 'Find':
            return <Find />
        case 'Edit':
            return <Edit />
        default:
            return <Add />
    }
}

function WordField({ status }) {
    return <div className='word-field'>{switchWordField(status)}</div>
}

export default WordField
