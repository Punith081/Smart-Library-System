import { useNavigate } from "react-router-dom";
import{useState} from "react";

const AddUser = () => {
    let [name,setName] = useState("")
    let [age,setAge] = useState("")
    let [email,setEmail] = useState("")
    let [phoneNumber,setPhoneNumber] = useState("")
    let navigate = useNavigate();

    let handleSubmit = ()=>{
        e.preventDefault();
        //data to be posted know below
        let userData = (name,age,email,phoneNumber)

        //posting to the server
        fetch('http://localhost:4001/users',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:Json.stringify(userData)
        })
        alert('user added sucessfully')
        Navigate('/admin/user-list')
    }
    return ( 
        <div className="addUser">
            <h1>Add a new user</h1>
            <div className="form">
                <form action="">
                    <div className="name">
                        <input type="text" value={name} onChange={ (e)=>setName(e.target.value)} className="" placeholder="eneter the name of an user"/>
                    </div>
                    <div className="age">
                    <input type="number" value={age} onChange={ (e)=>setAge(e.target.value)} className="" placeholder="eneter the age of an user"/>
                    </div>
                    <div className="email">
                    <input type="email" value={email} onChange={ (e)=>setEmail(e.target.value)} className="" placeholder="eneter the email of an user"/>
                    </div>
                    <div className="phoneNumber">
                    <input type="tel" minLength='10' maxLength='10' value={phoneNumber} onChange={ (e)=>setPhoneNumber(e.target.value)} className="" placeholder="eneter the phoneNumber of an user"/>
                    </div>
                    <button className="btn btn success">Add User</button>

                </form>
            </div>

        </div>
     );
}
 
export default AddUser;