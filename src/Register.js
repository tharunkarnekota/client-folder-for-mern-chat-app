import React,{useState} from 'react'
import axios from 'axios'

const Register = () => {
    const [data,setData] = useState({
        username:'',
        email:'',
        password:'',
        confirmpassword:''
    })

    const changehandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const submithandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:5000/register',data).then(
            res => alert(res.data)
        )
    }
    return (
        <div>
            <center>
                <form onSubmit={submithandler}>
                    <h2><b>Registration</b></h2>
                    <input type="text" name="username" onChange={changehandler} placeholder="user name" /><br />
                    <input type="email" name="email" onChange={changehandler} placeholder="email" /><br />
                    <input type="password" name="password" onChange={changehandler} placeholder="password" /><br />
                    <input type="password" name="confirmpassword" onChange={changehandler} placeholder="confirm password" /><br />
                    <input type="submit" className="btn btn-primary" value="register" /><br />
                </form>
            </center>
        </div>
    )
}

export default Register
