import React from 'react'
import '../styles/PersonItem.css'

const PersonItem = (props) => {
  return (
    <div>
        <div className='person-item'>{props.children}</div>
    </div>
  )
}

export default PersonItem