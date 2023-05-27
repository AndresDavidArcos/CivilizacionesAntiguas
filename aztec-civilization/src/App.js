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
                <Galeria />
                <Canvas id="three-canvas-container">
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