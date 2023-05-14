import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Signin from "./pages/signin/Signin";
import Newrequest from "./pages/newrequest/Newrequest";
import Viewdiagnosis from "./pages/viewdiagnosis/Viewdiagnosis";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
function App()
{
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={<Signin/>}/>
                    <Route exact path="/home" element={<Home/>}/>
                    <Route exact path="/newrequest" element={<Newrequest/>}/>
                    <Route exact path="/viewdiagnosis" element={<Viewdiagnosis/>}/>
                    <Route exact path="/register" element={<Register/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;