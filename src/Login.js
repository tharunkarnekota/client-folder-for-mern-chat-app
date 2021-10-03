import React,{useState,useContext} from 'react'
import axios from 'axios'
import {store} from './App'
import { Redirect } from 'react-router'

const Login = () => {
    const [token,setToken] = useContext(store)
    const [data,setData] = useState({
       
        email:'',
        password:'',
        
    })

    const changehandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const submithandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:5000/login',data).then(
            res => setToken(res.data.token)
        )
    }

    if(token){
        return <Redirect to='/myprofile' />
    }
    

    return (
        <div>
            <center>
                <form onSubmit={submithandler} autoComplete="off">
                    <h2><b>Login</b></h2>
                    
                    <input type="email" name="email" onChange={changehandler} placeholder="email" /><br />
                    <input type="password" name="password" onChange={changehandler} placeholder="password" /><br />
                    
                    <input type="submit" className="btn btn-primary" value="sigin" /><br />
                </form>
            </center>
        </div>
    )
}

export default Login
