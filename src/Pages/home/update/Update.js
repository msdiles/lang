import React from 'react'
import Button from '../../../Components/Button/Button'
import './update.scss'
import WordInfo from '../../../Components/WordInfo'

const UpdateContainer = ({result={}}) => {
  return (
    <div className='edit-update'>
          <WordInfo result={result}/>
      <div className='flex-column'>
        <Button buttonText='Отправить' />
      </div>

    </div>
  )
}

export default UpdateContainer
