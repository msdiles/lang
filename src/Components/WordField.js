import React from 'react'

import Add from '../Pages/edit/Add'
import Find from '../Pages/edit/Find'

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
