import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "./Reducer/useReducer.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar/navbar';
import Home from './Pages/Home/home.jsx'
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
          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
