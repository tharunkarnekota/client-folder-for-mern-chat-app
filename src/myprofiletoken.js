//my reference purpose only, main file is myprofile.js

import axios from 'axios'
import React,{useContext,useState,useEffect} from 'react'
import { Redirect } from 'react-router'
import {store} from './App'

const Myprofile = () => {
    const [token,setToken] = useContext(store)
    const [data,setData] = useState(null)
    useEffect(()=>{
        axios.get('http://localhost:5000/myprofile',{
            headers: {
                'x-token' : token
            }
        }).then(res => setData(res.data)).catch((err) => console.log(err))
    })
    if(!token){
        return <Redirect to='/login' />
    }
    return (
        <div>
            {data && 
            <center>
                welcome user : {data.username} !!
                <br />
                <button class="btn btn-primary" onClick={() => setToken(null)}>Logout</button>
            </center> 
            }
        </div>
    )
}

export default Myprofile
