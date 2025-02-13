import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Users from './Users';
import { SingleUser } from './Pages/SingleUser';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/users' element ={<Users/>}/>
        <Route path='/users/:id' element={<SingleUser/>} />

      </Routes>
    </Router>
  </React.StrictMode>
);




// reportWebVitals();
