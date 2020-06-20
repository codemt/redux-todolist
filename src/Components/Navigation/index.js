import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
export default function Navigation() {
 
        return (
            <div className="navigation">
                <ul>
                    <li> <Link className="navItem" to="/"> Add Todo </Link> </li>
                    
                </ul>
            </div>
        )

}
