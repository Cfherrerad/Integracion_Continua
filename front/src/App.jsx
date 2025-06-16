// import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Home from './views/Home/Home';
import Appointments from "./views/Appointments/Appointments";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./views/PageNotFound/PageNotFound";

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/appointments' element={<Appointments/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>  
      <Route path='*' element={<PageNotFound/>}/>   
      </Routes>
    </>
  )
}

export default App;
