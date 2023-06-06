import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Login from "./components/Login";
import Register from './components/Register';
import SelectionMenu from './components/SelectionMenu';
import RetroDialog from './components/RetroDialog';
import Agricultura from './components/Agricultura';
import Instrumentos from './components/Instrumentos';
import Galeria from './components/Galeria';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register/>}/>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path='/agricultura' element={<Agricultura/>}/>
          <Route path='/galeria' element={
              <>
              <Canvas id="three-canvas-container" camera={{ position: [-2, 1.5, -1], fov: 50 }} shadows>
                <ambientLight intensity={0.5} />
                <pointLight position={[0, 3.8, -1]} intensity={0.8} castShadow />
                <OrbitControls/>
                <Galeria />
              </Canvas>
              </>
            }
          />

          <Route path='/instrumentos' element={
              <>
                <Instrumentos />
                <Canvas id="three-canvas-container">
                </Canvas>
              </>
            }
          />
          <Route path='/menuSelection' element={
            <>
          <Canvas id="three-canvas-container" camera={{ position: [1, 1.5, 2.5], fov: 50 }} shadows>          
          <SelectionMenu/>
          </Canvas>     
        <RetroDialog/>
          </>
          }/>          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
