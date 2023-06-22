import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Login from "./components/Login";
import Register from './components/Register';
import SelectionMenu from './components/SelectionMenu';
import RetroDialog from './components/RetroDialog';
import Agricultura from './components/Agricultura';
import Instrumentos from './components/Instrumentos';
import Arquitectura from './components/Arquitectura';
import Galeria from './components/Galeria';
import { OrbitControls } from '@react-three/drei';
import VolumeSlider from './components/VolumeSlider';
import Menu from './components/BreadCrumb';
import Galery from './components/BreadCrumbGalery';
import GaleriaNavigation from './components/GaleriaNavigation';
import ArteOInstrumentos from './components/ArteOInstrumentos';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Navigate to="/login" />} />
          {/* Ruta que nos permite llamar al componente Arquitectura */}
          <Route path="/arquitectura" element={<Arquitectura />} />
          <Route path="/agricultura" element={<Agricultura />} />
          <Route
            path="/galeria"
            element={
              <>
                <Canvas
                  id="three-canvas-container"
                  camera={{ position: [1, 1.5, 2.5], fov: 50 }}
                  shadows
                >
                  <ambientLight intensity={0.9} />
                  <pointLight
                    position={[0, 3.8, -1]}
                    intensity={0.9}
                    castShadow
                  />
                  <GaleriaNavigation />
                </Canvas>
                <Galery />
                <div className="dot" />
              </>
            }
          />

          <Route
            path="/instrumentos"
            element={
              <>
                <Instrumentos />
              </>
            }
          />
          <Route
            path="/arte-instrumentos"
            element={
              <>
                <ArteOInstrumentos />
              </>
            }
          />
          <Route
            path="/menuSelection"
            element={
              <>
                <Canvas
                  id="three-canvas-container"
                  camera={{ position: [1, 1.5, 2.5], fov: 50 }}
                  shadows
                >
                  <SelectionMenu />
                </Canvas>
                <Menu />
                <RetroDialog />
                <VolumeSlider />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
