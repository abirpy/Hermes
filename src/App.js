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
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
  <Router>
      <Routes>
        <Route path="/login" element={
          <Login/>
        }>
        </Route>
        <Route path="/register" element={
          <Register/>
        }>
        </Route>
        <Route path="/dosage" element={
          <Dosage/>
        }>

        </Route>
      </Routes>
  </Router>
);
}

export default App;
