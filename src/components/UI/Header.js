import React from 'react'
import {NavLink} from "react-router-dom";
import './Header.css'

export default function Header(){
    return(
      <header>
          <div className="nav-background">
            <div className="container">
                <div className="row">
                    <div className="col-1">
                        <NavLink className="nav-brand" to='/'>CodingArea</NavLink>
                    </div>
                    <div className="col-11 nav-links-layout">
                        <NavLink className="nav-links" to='/login'>Login</NavLink>
                    </div>
                </div>
            </div>
        </div>
      </header>
    )
}