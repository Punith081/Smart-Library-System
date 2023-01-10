import{ useState,useEffect } from "react";
import '../style/userlist.css';
import {useNavigate} from "react-router-dom"

const UserList = () => {
    let [users, setUsers] = useState([])
    useEffect (()=> {
        let fetchData = async() =>{
           let responce=await fetch(' http://localhost:4001/users');
           let data = await responce.json()
           setUsers(data)
        }
        fetchData()
    },[])
    let handleDelete = (id, Name) =>{
        setBooks(books.filter( x => x.id !==id))
        alert (`${Name} has been deleted`)
    }
    return ( 
        <div className="usre_list">
            <h1>User List</h1>
            <div className="name">
                {users.map(data => (
                    <div className="book_card">
                        <h4>Name{data.name}</h4>
                        <h6>email:{data.email}</h6>
                        <h6>Phone Number:{data.phoneNumber}</h6>
                        <button onClick = { () => handleAdd(data.id,data.name) }>Add</button>
                        <button onClick = { () => handleDelete(data.id,data.Name,data.phoneNumber,data.email) }>Delete</button>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default UserList
