import React from 'react'

import Button from './Button'
import "../styles/UserInput.css";

const UserInput = () => {
  return (
    <>
    <div>
      <form  >
        <div className='new-person__controls'>
            <div className='new-person__control'>
                <label htmlFor="username">Username</label>
                <input type="text" />
            </div>
            <div className='new-person__control'>
                <label htmlFor="age">Age(years)</label>
                <input type="text" />
            </div>
        </div>
        <Button onclick='submit'>Add User</Button>
      </form>
    </div>
    </>
  )
}

export default UserInput
