import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Login from "./components/Login";
import Register from './components/Register';
import SelectionMenu from './components/SelectionMenu';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register/>}/>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path='/menuSelection' element={
          <Canvas id="three-canvas-container" camera={{ position: [1, 1.5, 2.5], fov: 50 }} shadows>          
          <SelectionMenu/>
          </Canvas>          
          }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
