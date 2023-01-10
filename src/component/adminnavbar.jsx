import '../style/adminNavbar.css';
import { Link } from 'react-router-dom';
const AdminNavbar=()=>{
    return(
        <div className="admin_Navbar">
            <h1 id="navh1">Admin Home</h1>

            <div className="nav_link">

                
           <li> <Link to="/admin/dashboard">Dashboard</Link></li>
           <li> <Link to="/admin/add-book">Add Books</Link></li>
           <li><Link to="/admin/add-user">Add User</Link></li>
           <li><Link to="/admin/booklist">Book List</Link></li>
           <li><Link to="/admin/userList">User List</Link></li>
           <li><Link to="/">Logout</Link></li>
           
            </div>

        </div>
    )
}
export default AdminNavbar;