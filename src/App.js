import './App.css';
import Row from './Row';
import requests from './requests';
import Home from './Home';
import Features from './Features';
import Footer from './Footer';
import Second from './Second';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Third from './Third';
import {useState} from 'react'
import Fourth from './Fourth';
import Fifth from './Fifth';
import N7 from './N7';
import Payment from './Payment';
import Payment2 from './Payment2';
import Banner from './Banner';

function App() {

  const [email, setEmail] = useState("")

  return (
    <div className="App">  
      

      <Routes>

      <Route path='/' element={<Home email = {email} setEmail = {setEmail}/>}></Route>

      <Route path='/Second' element={<Second email = {email} />}></Route>

      <Route path='/Third' element={<Third  email = {email} />}></Route>

      <Route path='/Fourth' element={<Fourth/>}></Route>

      <Route path='/Fifth' element={<Fifth/>}></Route>

      <Route path='/N7' element={<N7/>}></Route>

      <Route path='/Payment' element={<Payment/>}></Route>

      <Route path='/Banner' element={<Banner/>}></Route>

      <Route path='/Payment2' element={<Payment2/>}></Route>

      
      </Routes>

      {/* <Footer></Footer> */}
      
    </div>
  );
}

export default App;
