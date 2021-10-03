//my reference purpose only, main file is myprofile.js
//gives  only msgs text in db && input to send message

import axios from 'axios'
import React,{useContext,useState,useEffect} from 'react'
import { Redirect } from 'react-router'
import {store} from './App'

const Myprofile = () => {
    const [token,setToken] = useContext(store)
    const [data,setData] = useState(null)
    const [allmsg,setAllmsg] = useState([]);
    const [newmsg,setNewmsg] = useState("");
    useEffect(()=>{
        axios.get('http://localhost:5000/myprofile',{
            headers: {
                'x-token' : token
            }
        }).then(res => setData(res.data)).catch((err) => console.log(err))

        axios.get('http://localhost:5000/getmsg',{
            headers: {
                'x-token' : token
            }
        }).then(res => setAllmsg(res.data)).catch((err) => console.log(err))
    })

    const submithandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:5000/addmsg',{text:newmsg},{
            headers: {
                'x-token' : token
            }
        }).then(res => setAllmsg(res.data)).catch((err) => console.log(err))
        
    }

    if(!token){
        return <Redirect to='/login' />
    }
    return (
        <div>
            {data && 
            <center>
                <br />
                <div class="card" style={{"width":"38rem","textAlign":"left"}}>
                <div class="card-body">
                    {
                        allmsg.length>=1 ? 
                            allmsg.map(message => 
                                <div class="card">
                                <div className="card-body">
                                    <h4 className="card-title">{message.username} {message.date}</h4>
                                    <p>{message.text}</p>
                                </div>
                                </div>
                                )
                        :
                        <h1>msg loading....</h1>
                    }
                    
                    <center>
                    <form onSubmit={submithandler}>
                        <input type="text" placeholder="Enter message" onChange={ e => setNewmsg(e.target.value)} />
                        <input type="submit" class="btn btn-secondary" value="send message" />
                    </form>
                    </center>
                    <hr />
                    
                    <center><button class="btn btn-primary" onClick={() => setToken(null)}>Logout</button></center>
                </div>
                </div>
            </center> 
            }
        </div>
    )
}

export default Myprofile
