import React from 'react'
import "../styles/Button.css";

const Button = (props) => {
  return (
    <div>
        <div className='button-controls'>
            <button onClick={props.onClick} >
                {props.children}
            </button>
        </div>
    </div>
  )
}

export default Button