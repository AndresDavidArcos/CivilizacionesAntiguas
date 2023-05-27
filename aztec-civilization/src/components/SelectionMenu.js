import AztecPyramid from "./AztecPyramid";
import { StoneGate } from "./StoneGate";
import Player from "./Player";
import { Physics, RigidBody } from "@react-three/rapier";
import { useLocation, useNavigate } from "react-router-dom";
import { CameraControls, Environment, Float, Html, KeyboardControls, PerspectiveCamera, PointerLockControls, Text3D, useEnvironment, useTexture} from "@react-three/drei";
import { angleToRadians } from "../utils/angle";
import { useEffect, useRef } from "react";
import * as dat from 'dat.gui'
import gsap from "gsap";

export default function SelectionMenu(){
  const location = useLocation();
  const datosProps = location.state.user;

  console.log(datosProps)
    const tPathI = '../../imagenes/'
    const painting = useTexture({
      map: tPathI+"agricultura.jpg",
      map1: tPathI+"guerreros-aztecas-ataviados-con-sus-armas-y-vestimenta-tipicas_df905ca0_1280x720.jpg",
      map2: tPathI+"plaza-scaled.jpg"
    })
    const envMap = useEnvironment({files: "../../ambientes/industrial_sunset_puresky_1k.hdr"})

    const tPathP = '../../texturas/pyramid/';
    const pyramidTextures = useTexture({
      map: tPathP+'broken_wall_diff_1k.jpg',
      aoMap: tPathP+'broken_wall_ao_1k.jpg',
      displacementMap: tPathP+'broken_wall_disp_1k.png',
      normalMap: tPathP+"broken_wall_nor_gl_1k.png",
      roughnessMap: tPathP+"broken_wall_rough_1k.png",
    })

    const tPathX = '../../texturas/defenseWall/';
    const wallTexture = useTexture({
      map: tPathX+'defense_wall_diff_2k.png',
      aoMap: tPathX+'defense_wall_ao_2k.png',
      displacementMap: tPathX+'defense_wall_disp_2k.png',
      normalMap: tPathX+"defense_wall_nor_gl_2k.png",
      roughnessMap: tPathX+"defense_wall_rough_2k.png",
    })    
    const navigator = useNavigate()
    const handleNavCollision = (topic) => {
      switch (topic) {
        case 'agricultura':
          navigator('/agricultura')
          break;
        case 'instrumentos':
          navigator('/instrumentos', {state: {user: datosProps}})
          break;
      
        default:
          break;
      }
    }
    return (
        <>
          {/* Camera */}
          {/* <PerspectiveCamera ref={camera} makeDefault position={[-20, 4, 0]} />
          <CameraControls  minPolarAngle={angleToRadians(60)} maxPolarAngle={angleToRadians(80)} />     */}
          <Physics>
          <KeyboardControls
                map={[
                  { name: "forward", keys: ["ArrowUp", "w", "W"] },
                  { name: "backward", keys: ["ArrowDown", "s", "S"] },
                  { name: "left", keys: ["ArrowLeft", "a", "A"] },
                  { name: "right", keys: ["ArrowRight", "d", "D"] },
                  { name: "jump", keys: ["Space"] },
                ]}>          
        <Player />
        </KeyboardControls>
          {/* Models */}
          <group position={[0,-0.5,0]}>
          <RigidBody type="fixed" colliders="hull">
          <AztecPyramid rotation={[0,-3.1,0]}/>

          </RigidBody>
          <RigidBody type="fixed" colliders="cuboid"
           onCollisionEnter={({ manifold, target, other }) => {
            console.log(
              "Collision at world position ",
              manifold.solverContactPoint(0)
            );
            handleNavCollision('agricultura')
          }}
          >
          <StoneGate position={[0,7,4]} map={painting.map}/>

          </RigidBody>
          <RigidBody type="fixed" colliders="cuboid"
           onCollisionEnter={({ manifold, target, other }) => {
            console.log(
              "Collision at world position ",
              manifold.solverContactPoint(0)
            );
            handleNavCollision('instrumentos')
          }}
          >
          <StoneGate position={[0,7,-4]} map={painting.map1}/>

          </RigidBody >
          <RigidBody type="fixed" colliders="cuboid">
          <StoneGate position={[4,7,0]} rotation={[0,angleToRadians(90),0]} map={painting.map2}/>

          </RigidBody>                    

          </group>
              
            {/* Floor */}
            <RigidBody type="fixed" colliders="cuboid">
            <mesh  rotation={[-(angleToRadians(90)), 0, 0]} position={[0,0,0]} receiveShadow>
                    <planeGeometry args={[50, 50]}/>
                    <meshStandardMaterial {...pyramidTextures}/>
            </mesh> 
            </RigidBody>
            {/* Walls */}
            <RigidBody type="fixed" colliders="cuboid">
            <mesh position={[-25, 0, 0]} rotation={[0, (angleToRadians(90)), 0]}  receiveShadow>
                    <boxGeometry args={[50, 8, 1]} />
                    <meshStandardMaterial color="#F5DEB3"
                      {...wallTexture}
                        />
                </mesh>  
            </RigidBody>
            <RigidBody type="fixed" colliders="cuboid">
            <mesh position={[25, 0, 0]} rotation={[0, (angleToRadians(90)), 0]}  receiveShadow>
                    <boxGeometry args={[50, 8, 1]} />
                    <meshStandardMaterial color="#F5DEB3"
                      {...wallTexture}
                        />
                </mesh>  
            </RigidBody>   
            <RigidBody type="fixed" colliders="cuboid">
            <mesh position={[0, 0, 25]} rotation={[0, 0, 0]}  receiveShadow>
                    <boxGeometry args={[50, 8, 1]} />
                    <meshStandardMaterial color="#F5DEB3"
                      {...wallTexture}
                        />
                </mesh>  
            </RigidBody>               
            <RigidBody type="fixed" colliders="cuboid">
            <mesh position={[0, 0, -25]} rotation={[0, 0, 0]}  receiveShadow>
                    <boxGeometry args={[50, 8, 1]} />
                    <meshStandardMaterial color="#F5DEB3"
                      {...wallTexture}
                        />
                </mesh>  
            </RigidBody>                         

          </Physics>
        
        <PointerLockControls />

          {/* light */}
          <ambientLight args={["#ffffff", 0.25]}/>

          {/* Enviroments */}
          <Environment map={envMap} background/>             
        </>
    )
}