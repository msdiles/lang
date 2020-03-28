import React from 'react'
import './select.scss'

const Select = ({
  wrapper = '',
  name = '',
  options = [],
  currentOption = '',
  isClosed = true,
  focusedOption = 0,
  handleSelect = f => f,
  toggleClass = f => f,
  handleBlur = f => f,
  handleKey = f => f
}) => {
  return (
    <div
      className={isClosed ? `closed selector` : `selector`}
      tabIndex='0'
      onClick={toggleClass}
      onKeyDown={handleKey}
      ref={wrapper}
    >
      <p>{currentOption ? currentOption : options[0]}</p>
      <div className='options' onClick={handleSelect} onBlur={handleBlur}>
        {options.map((item, index) => (
          <div
            onFocus={() => {}}
            id={index}
            key={index}
            data-language={item}
            data-name={name}
            tabIndex='0'
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Select
