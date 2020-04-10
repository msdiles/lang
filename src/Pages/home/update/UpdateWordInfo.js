import React from 'react'
import { useActionChooser } from '../../../Components/WordInfo/useActionChooser'
import Button from '../../../Components/Button/Button'
import { useUpdateWordInfo } from './useUpdateWordInfo'

export const UpdateWordInfo = ({ action = '', redirect = false }) => {
  console.log(`Rendering UpdateWordInfo component`)
  const filteredResult = useActionChooser({ action, redirect })
  const {
    stringifiedResult,
    handleChange,
    checkObject,
    checked,
    textareaRef,
  } = useUpdateWordInfo({ filteredResult })
  return (
    <React.Fragment>
      {filteredResult.response ? (
        <div className='word-info'>
          <textarea
            ref={textareaRef}
            value={stringifiedResult}
            onChange={handleChange}
          ></textarea>
        </div>
      ) : filteredResult.display ? (
        <div className='word-info'>
          <span>Слово не найдено</span>
        </div>
      ) : (
        <p></p>
      )}
      {filteredResult.response &&
        (!checked ? (
          <div className='flex-row-center'>
            <Button
              buttonText='Проверить'
              name='check'
              type='button'
              onClick={checkObject}
            />
          </div>
        ) : (
          <p></p>
        ))}
      <div className='flex-row-center'>
        {((filteredResult.existed !== undefined &&
          filteredResult.existed === true) ||
          redirect === true) &&
          checked && (
            <Button
              name='update'
              buttonText='Изменить'
              onClick={() => console.log('updated')}
            />
          )}
      </div>
    </React.Fragment>
  )
}
