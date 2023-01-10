import '../style/landingPage.css';
import { Link } from "react-router-dom";
const LandingPage=()=>{
    return(
        <div className="LandingPage">

            <div className="selectLogin">
                <h1 id="idh">Library Management System</h1>
                <div className="Land_img">
                    <img id="https://tse1.mm.bing.net/th?id=OIP.kDboRh_1_d_1bXJSgrk96AAAAA&pid=Api&P=0" width="100px" height="100px" src="images/adminicon.png" alt="admin login" />
                    <img id="https://tse2.mm.bing.net/th?id=OIP.h-d_CM_NIzy--o8Wfuyq0AHaD5&pid=Api&P=0" width="100px" height="100px" src="images/usericon.png"  alt="user login" />
                    {/* //images/adminicon.png //"images/usericon.png" */}
                </div>
                <div className="btnn">
                <Link to='/adminlogin' className="btn1">Admin Login</Link>
                <Link to='/userlogin' className="btn2">User Login</Link>
                </div>
    


            </div>

        </div>
    )
}
export default LandingPage;