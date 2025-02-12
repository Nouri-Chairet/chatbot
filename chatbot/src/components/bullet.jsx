import React from 'react'
import UserProfile from '/user-circle-solid.svg'
import robot from '/robot-solid.svg'
import '../styles/bullet.css'

const bullet = ({role,content}) => {
    const direction = role=="bot" ? 'left' : 'right';
  return (
    <div className={`bullet ${direction}`}>
      <div className='img'>
        <img src={role=="bot"? robot : UserProfile} alt="user"  height={30}/>
      </div>
      <div className={role}>
        <p className='text'>{content}</p>
    </div>
    </div>
  )
}

export default bullet
