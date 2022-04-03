import './App.css';
import Login from './Components/Login'
import Register from './Components/Register'
import Dosage from './Components/Dosage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Tracker from './Components/Tracking/Tracker';
import Home from './Components/Home/Home';
import Map from './Components/Map/Map';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/tracker" element={<Tracker/>}/>
          <Route path="/map" element={<Map/>}/>
          <Route path="/login" element={
            <Login/>
          }/>
          <Route path="/register" element={
            <Register/>
          }/>
          <Route path="/dosage" element={
            <Dosage/>
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
