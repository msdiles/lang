import React from 'react'

function NavigateBar({ changeStatus }) {
    return (
        <form className='navigate-bar'>
            <button
                onClick={changeStatus}
                className='navigate-element'
                value='Add'
            >
                Add
            </button>
            <button
                onClick={changeStatus}
                className='navigate-element'
                value='Find'
            >
                Find
            </button>
            <button
                onClick={changeStatus}
                className='navigate-element'
                value='Delete'
            >
                Delete
            </button>
            <button
                onClick={changeStatus}
                className='navigate-element'
                value='Edit'
            >
                Edit
            </button>
        </form>
    )
}

export default NavigateBar
