import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Login from "./components/Login";
import Register from './components/Register';
import SelectionMenu from './Models/SelectionMenu';
import RetroDialog from './components/RetroDialog';
import Agricultura from './Models/Agricultura';
import Instrumentos from './components/Instrumentos';
import Arquitectura from './components/Arquitectura';
import VolumeSlider from './components/VolumeSlider';
import Menu from './components/BreadCrumb';
import Galery from './components/BreadCrumbGalery';
import GaleriaNavigation from './Models/GaleriaNavigation';
import ArteOInstrumentos from './components/ArteOInstrumentos';
import { Suspense } from 'react';
import LoaderScreen from './components/LoaderScreen';
import AgriculturaInfo from './components/AgriculturaInfo';
import BCAgricultura from './components/BreadCrumbAgricultura';
import PaginaPrincipal from './components/PaginaPrincipal';
import ArteInfo from './components/ArteInfo';
import Art from './components/BreadCrumbArt';
import ArteNavigation from './Models/ArteNavigation';
import QuestionaireForm from './components/Questionaire';
import Questionnaires from './components/Questionary';
import Questionario from './components/VentanaQuestionario';
import ProfileViewer from './components/Profile';
import { angleToRadians } from './utils/angle';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/testingComponents" element={<ProfileViewer/>}/> */}
          <Route path="/getQuestionary" element={<Questionnaires />} />
          <Route path='/addQuestionary' element={
          <>
          <Menu/>
          <QuestionaireForm />
          </>} />
          <Route path='/pagina-principal' element={<PaginaPrincipal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Navigate to="/pagina-principal" />} />
          {/* Ruta que nos permite llamar al componente Arquitectura */}
          <Route path="/arquitectura" element={<Arquitectura />} />
          <Route
            path="/galeria"
            element={
              <>
                <Suspense fallback={<LoaderScreen />}>
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
                </Suspense>
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
            path="/arte-info"
            element={
              <>
                <ArteInfo />
              </>
            }
          />
          <Route
            path="/agricultura-info"
            element={
              <>
                <AgriculturaInfo />
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
            path="/pagina-principal"
            element={
              <>
                <PaginaPrincipal />
              </>
            }
          />
          <Route
            path="/menuSelection"
            element={
              <>
                <Suspense fallback={<LoaderScreen />}>
                  <Canvas
                    id="three-canvas-container"
                    camera={{ position: [1, 1.5, 4.5], fov: 50, rotation: [angleToRadians(0),angleToRadians(-90),angleToRadians(0)] }}
                    shadows
                  >
                    <SelectionMenu />
                  </Canvas>
                  <Menu />
                  <RetroDialog />
                  <Questionario />
                  <VolumeSlider />
                  <ProfileViewer/>                  
                  <div className="dot" />
                </Suspense>
              </>
            } />

          <Route path='/agricultura' element={
            <>
              <Suspense fallback={<LoaderScreen />}>
                <Canvas id="three-canvas-container" camera={{ position: [1, 10, 2.5], fov: 50 }} shadows>
                  <Agricultura />
                </Canvas>
                <div className="dot" />
                <BCAgricultura />
              </Suspense>

            </>
          } />

          <Route path='/arte' element={
            <>
              <Suspense fallback={<LoaderScreen />}>
                <Canvas id="three-canvas-container" camera={{ position: [1, 1.5, 2.5], fov: 50 }} shadows>
                  <ambientLight intensity={0.9} />
                  <pointLight position={[0, 3.8, -1]} intensity={0.9} castShadow />
                  <ArteNavigation />
                </Canvas>
                <Art />
                <div className="dot" />
              </Suspense>
            </>
          }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
