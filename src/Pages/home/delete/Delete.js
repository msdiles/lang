//TODO complete Delete

import React from 'react'
import WordInfoContainer from '../../../Components/WordInfo'
import Button from '../../../Components/Button/Button'

const Delete = ({ result = {} }) => {
  return (
    <div className='edit-delete'>
      <WordInfoContainer result={result} />
      <Button
        buttonText='Удалить'
        onClick={() => console.log('DELETEDDDDDDD')}
        name='delete'
      />
    </div>
  )
}

export default Delete
