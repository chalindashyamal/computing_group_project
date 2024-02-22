import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginSignup from './pages/LoginSignup';
import Buses from './pages/Buses';
import Random1 from './pages/Random1';
import Random2 from './pages/Random2';
import Timetable from './pages/Timetable';


function App() {
  return (
    <div>
      <BrowserRouter>

        <Navbar/>
          <Routes>
            <Route path='/login' element={<LoginSignup/>}/>
            <Route path='/buses' element={<Buses/>}/>
            <Route path='/random1' element={<Random1/>}/>
            <Route path='/random2' element={<Random2/>}/>
            <Route path='/timetable' element={<Timetable/>}/>
          </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
