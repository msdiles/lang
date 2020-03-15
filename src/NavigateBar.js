import React from 'react'

function NavigateBar({ changeStatus }) {
    return (
        <form className='navigate-bar'>
            <div className='navigate-element'>
                <button
                name='Add'
                    onClick={changeStatus}
                    className='btn'
                    value='Добавить'
                >
                    Add
                </button>
            </div>
            <div className='navigate-element'>
                <button
                name='Find'
                    onClick={changeStatus}
                    className='btn'
                    value='Найти'
                >
                    Find
                </button>
            </div>
        </form>
    )
}

export default NavigateBar
