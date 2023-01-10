import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom/dist';
import Userlogin from './component/userlogin';
import Adminlogin from './component/adminlogin';
import Landingpage from './component/landingpage';
import Adminhome from './component/adminhome';
import Booklist from './component/booklist';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

            <Route path='/' element={<Landingpage/>}/>
            <Route path='/adminlogin' element={<adminlogin/>}/>
            <Route path='/userlogin' element={<userlogin/>}/>
            <Route path='/admin/*' element={<adminhome/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;