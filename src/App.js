import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "./Reducer/useReducer.js";
import Navbar from './Components/Navbar/navbar';
import Home from './Pages/Home/home.jsx'
import JourneyDetails from './Pages/JourneyDetails/journey_details.jsx'
import Login from './Pages/LoginPage/login_page.jsx'
import Register from './Pages/RegisterPage/register.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export const AuthContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div >
      <AuthContext.Provider value={{ state, dispatch }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/journey_details' element={<JourneyDetails />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
