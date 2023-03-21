import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import LandingPage from "./LandingPage";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPage />}/>
        <Route exact path="/home" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
