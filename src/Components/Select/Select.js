import React from 'react'
import './select.scss'
import { useSelect } from './useSelect'

const Select = ({
  name = '',
  options = [],
  handleSelect = (f) => f,
  currentOption = 0,
}) => {
  const {
    selectorRef,
    isClosed,
    toggleClass,
    handleBlur,
    handleKey,
  } = useSelect({ options, handleSelect })
  return (
    <div
      className={isClosed ? `closed selector` : `selector`}
      tabIndex='0'
      onClick={toggleClass}
      onKeyDown={handleKey}
      ref={selectorRef}
    >
      <p>{currentOption ? currentOption : options[0]}</p>
      <div className='options' onClick={handleSelect} onBlur={handleBlur}>
        {options.map((item, index) => (
          <div
            onFocus={() => {}}
            id={index}
            key={index}
            data-value={item}
            data-name={name}
            tabIndex='0'
          >
            {item[0].toUpperCase() + item.slice(1)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Select
