import { useState } from 'react';
import Home from "./Home.jsx"
import Nav from "./Nav.jsx"
import Info from "./Info.jsx"
import './App.css';
import Footer from './footer.jsx';

function App() {
  return (
    <div className="App"> 
       <Nav/>
       <Home/>
       <Info/>
       <Footer/>
      </div>
         
       
      
  );
}

export default App;
