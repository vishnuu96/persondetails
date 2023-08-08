import React,{useState} from 'react'

import Button from './Button'
import "../styles/UserInput.css";

const UserInput = (props) => {
const [userName, setUserName] = useState('')
const [age, setAge] = useState('')

  const addUser=(event)=>{

    event.preventDefault()
    const personData={
        username:userName,
        age:age,
    }
    // console.log(persondata)
    props.onsaving(personData)
    setUserName('')
    setAge('')


  }
  const userNameInput=(event)=>{ 
   setUserName(event.target.value)
  }
  const ageInput=(event)=>{
   setAge(event.target.value)
  }




  return (
    <>
    <div>
      <form onSubmit={addUser}  >
        <div className='new-person__controls' >
            <div className='new-person__control'>
                <label htmlFor="username">Username</label>
                <input type="text" onChange={userNameInput} value={userName} />
            </div>
            <div className='new-person__control'>
                <label htmlFor="age">Age(years)</label>
                <input type="text" onChange={ageInput} value={age} />
            </div>
        </div>
        <Button onclick='submit'>Add User</Button>
      </form>
    </div>
    </>
  )
}

export default UserInput
