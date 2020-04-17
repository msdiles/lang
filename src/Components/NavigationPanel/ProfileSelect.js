import React from 'react'
import Select from '../Select/Select'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

export const ProfileSelect = () => {
  const user = useSelector((state) => state.fetch.user)
  const history = useHistory()
  const options =
    typeof user.id === 'undefined'
      ? ['register', 'login']
      : ['profile', 'logout']

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
        currentOption={0}
      />
    </div>
  )
}
