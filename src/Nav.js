import React,{useContext,useState} from 'react'
import { Link } from 'react-router-dom'
import {store} from './App'

const Nav = () => {
    const [token,setToken] = useContext(store)
    return (
        <div>
            {!token &&
            <ul>
                <Link to='/register' className="btn btn-secondary" ><li>Register</li> </Link>&nbsp;&nbsp;
                <Link to='/login' className="btn btn-secondary" ><li>Login</li> </Link>
            </ul>
            }
        </div>
    )
}

export default Nav
