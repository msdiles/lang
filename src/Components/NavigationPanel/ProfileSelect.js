import React from 'react'
import Select from '../Select/Select'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

export const ProfileSelect = () => {
  const {user} = useSelector((state) => state.authorization)
  const history = useHistory()
  const options =
    typeof user.id === 'undefined'
      ? ['register', 'login']
      : ['profile', 'logout']
  const currentOption =
    typeof user.id === 'undefined' ? (
      'Join'
    ) : (
      <span className='flex-row-start'>
        <img src='./img/account_circle-24px.svg'  alt='avatar'></img>
        <span >{user.username}</span>
      </span>
    )

  const handleRedirect = (e) => {
    const { value } = e.target.dataset
    switch (value) {
      case 'register':
        history.push('/signup')
        break
      case 'login':
        history.push('/login')
        break
      case 'logout':
        history.push('/logout')
        break
      case 'profile':
        history.push('/profile')
        break

      default:
        break
    }
  }

  return (
    <div className='profile-panel'>
      <Select
        name='profile'
        options={options}
        handleSelect={handleRedirect}
        currentOption={currentOption}
      />
    </div>
  )
}
