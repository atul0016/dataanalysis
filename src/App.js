import './App.css';
import Hpage from './component/Hpage';
import Navbar from './component/Navbar';
import Programs from './component/Programs';
import Solutions from './component/Solutions';
import Vision from './component/Vision';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <><Router>
    <Navbar title="DATON" link1="Solutions" link2="Visions" link3="Programs" link4="Blogs"/>
    <Routes><Route exact path="/" element={<Hpage/>}/>
    <Route path="/Programs" element={<Programs/>}/>
    <Route path="/Solutions" element={<Solutions/>}/>
    <Route path="/Vision" element={<Vision/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
