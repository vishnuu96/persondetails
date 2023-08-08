import React from 'react'
import UserInput from './UserInput'
import '../styles/UserBox.css'


const UserBox = (props) => {
    const savingData=(personData)=>{
      
        const savedPersondata={
            ...personData,
            id:Math.random().toString()
        }
        // console.log(savedPersondata)
        props.onAddPerson(savedPersondata)
    }
  return (
    <div className='user-box'>
        <UserInput onsaving={savingData}/>
    </div>
  )
}

export default UserBox