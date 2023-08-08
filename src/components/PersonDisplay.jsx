import React from 'react'
import PersonItem from './PersonItem'
import '../styles/PersonDisplay.css'

const PersonDisplay = (props) => {
  
  return (
    <div className='person-box__container'>
        {props.people.map((person)=>{
           return  <PersonItem key={person.id}>{`${person.username}(${person.age} )`}</PersonItem>
        })}
    </div>
  )
}

export default PersonDisplay