import { useNavigate } from "react-router-dom";
import { useState } from "react";
import '../style/userLogin.css';

const UserLogin=()=>{
    let navigate=useNavigate()
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    
    let login =(e)=>{
            e.preventDefault();
            let data={email,password}
        navigate('/User/')
        console.log(data);


    }
    return(
        <div className="form container card mt-5 pt-3">

            <div className="user_form">
                <h1 id="usrh1">User Login</h1>

                

                <div className="form_input p-5" >

                    <form action="" onSubmit={login}>

                    <div className="
                    ">
                    <img width="100px" height="100px" src="images/usericon.png" alt="" />
                </div>

                        <div className="email">
                        <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email address"  className="form-control"/>
                        </div><br />

                        <div className="password">
                            <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="enter password" className="form-control" />
                        </div>

                        <button className="user_btn">Login</button>

                    </form>
                </div>
                </div>

            </div>
    )
}
export default UserLogin;