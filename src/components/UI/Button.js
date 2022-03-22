import React from 'react'
import './Button.css'
export default function Button(props){
    const handleClick = ()=>{
        props.onClick()
    }
    return(
      <button className="btn btn-primary"
              type={props.type}
              name={props.name}
              onClick={handleClick}
      >
          {props.title}
      </button>
    )
}