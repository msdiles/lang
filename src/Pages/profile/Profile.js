import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  console.log('Rendering Profile component')

  const user = useSelector((state) => state.fetch.user)

  if (user.loading)
    return (
      <div className='module-block'>
        <p>Loadingsafa[ssak[ppsoagopoj]].......</p>
      </div>
    )
  return (
    <div className='module-block'>
      {user && <p>Id:{user.id}</p>}
      {user && <p>Имя пользователя:{user.username}</p>}
    </div>
  )
}

export default Profile
