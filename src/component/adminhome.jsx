import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./admindashboard";
import AdminNavbar from "./adminnavbar";

const AdminHome=()=>{
    return(
        <div className="admin_Home">
            <AdminNavbar/>

            <Routes>
                <Route path="/" element={<admindashboard/>}/>
                <Route path="/booklist/id" booklist={<AdminDashboard/>}/>
                <Route path="/user-list" element={<userList/>}/>
                <Route path="/add-book" element={<addbook />} />
                <Route path="/add-user" element={<adduser />} />

            </Routes>

        </div>
    )
}
export default AdminHome;