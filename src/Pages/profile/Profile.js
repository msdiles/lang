import React from 'react'
import { useSelector } from 'react-redux'

export const Profile = () => {
  const user = useSelector((state) => state.fetch.user)

  return (
    <div className='profile'>
      <p>Имя пользователя:{user.username}</p>
    </div>
  )
}
