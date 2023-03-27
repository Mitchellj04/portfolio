import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import LandingPage from "./LandingPage";
import NavBar from "./NavBar";
import Profile from "./Profile/Profile";
import './App.css'
import { useState } from "react";


function App() {

  const [loading, setLoading] = useState(false)

  if(loading !==false) return <LandingPage />
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path='/' element={<LandingPage setLoading={setLoading}/>}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
