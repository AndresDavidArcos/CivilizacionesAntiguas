import AztecPyramid from "./AztecPyramid";
import AncientGate from "./AncientGate";
import Player from "./Player";
import { Physics, RigidBody } from "@react-three/rapier";
import { useNavigate } from "react-router-dom";
import { Html, useGLTF, CameraControls, Environment, KeyboardControls, PerspectiveCamera, PointerLockControls, useEnvironment, useTexture } from '@react-three/drei';
import { angleToRadians } from "../utils/angle";
import { useUserData } from "../contexts/user";
import Guarda from "./Huey_tlatoani";
import { React, useEffect, useRef, useState } from 'react';
import { useMenuSelectionData } from '../contexts/menuSelection';

export default function SelectionMenu() {

  const controlsRef = useRef();
  const { pointerLocked, setPointerLocked} = useMenuSelectionData()
  const { user } = useUserData();
  console.log("Este es el usuario donde tiene los aciertos y los fallos que ha tenido en una evaluacion: ", user)
  const tPathI = '../../imagenes/'
  const painting = useTexture({
    map: tPathI + "agricultura.jpg",
    map1: tPathI + "guerreros-aztecas-ataviados-con-sus-armas-y-vestimenta-tipicas_df905ca0_1280x720.jpg",
    map2: tPathI + "plaza-scaled.jpg"
  })
  const envMap = useEnvironment({ files: "../../ambientes/industrial_sunset_puresky_1k.hdr" })

  const tPathP = '../../texturas/pyramid/';
  const pyramidTextures = useTexture({
    map: tPathP + 'broken_wall_diff_1k.jpg',
    aoMap: tPathP + 'broken_wall_ao_1k.jpg',
    displacementMap: tPathP + 'broken_wall_disp_1k.png',
    normalMap: tPathP + "broken_wall_nor_gl_1k.png",
    roughnessMap: tPathP + "broken_wall_rough_1k.png",
  })

  const tPathX = '../../texturas/defenseWall/';
  const wallTexture = useTexture({
    map: tPathX + 'defense_wall_diff_2k.png',
    aoMap: tPathX + 'defense_wall_ao_2k.png',
    displacementMap: tPathX + 'defense_wall_disp_2k.png',
    normalMap: tPathX + "defense_wall_nor_gl_2k.png",
    roughnessMap: tPathX + "defense_wall_rough_2k.png",
  })
  const navigator = useNavigate()
  const handleNavCollision = (topic) => {
    switch (topic) {
      case 'agricultura':
        navigator('/agricultura-info')
        break;
      case 'instrumentos':
        navigator('/arte-instrumentos')
        break;
      case 'arquitectura':
        navigator('/arquitectura')
        break;
      default:
        break;
    }
  }

  const mostrarPreguntas = () => {
    setPointerLocked(false);
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('topicos').style.display = 'flex';
    document.getElementById('pregunta').style.display = 'none';
    document.getElementById('resultado').style.display = 'none';
  };

  const activarPointer = () => {
    setPointerLocked(true);
  }


  useEffect(() => {
    console.log(pointerLocked)
  }, [pointerLocked])

  document.addEventListener("keyup", function(e) {
    if (e.key == "Escape") {
      activarPointer();
    }
  });
  


  return (
    <>
      {/* Camera */}
      <Physics>
        <KeyboardControls
          map={[
            { name: "forward", keys: ["ArrowUp", "w", "W"] },
            { name: "backward", keys: ["ArrowDown", "s", "S"] },
            { name: "left", keys: ["ArrowLeft", "a", "A"] },
            { name: "right", keys: ["ArrowRight", "d", "D"] },
            { name: "jump", keys: ["Space"] },
          ]}>
          <Player position={[-11, 5, 0]} />
        </KeyboardControls>
        {/* Models */}

        {/* Guarda */}
        <group receiveShadow castShadow onClick={mostrarPreguntas}>
          <RigidBody type="fixed" colliders="cuboid">
            <Guarda position={[-3.5, 6.5, 3.5]} rotation={[0, angleToRadians(200), 0]} scale={0.25} />
          </RigidBody>
        </group>


        <group position={[0, -0.5, 0]}>
          <RigidBody type="fixed" colliders="hull">
            <AztecPyramid rotation={[0, -3.1, 0]} />
          </RigidBody>
          <RigidBody
            type="fixed"
            colliders="cuboid"
            onCollisionEnter={({ manifold, target, other }) => {
              console.log("Collision at world position ", manifold.solverContactPoint(0));
              handleNavCollision('agricultura');
            }}
          >
            <group>
            <AncientGate position={[1, 7, 4]} scale={[0.05, 0.05, 0.05]} rotation={[angleToRadians(90), 0, angleToRadians(180)]} map={painting.map} />
            <Html position={[1, 15, 4]}>
            <div
              style={{
                fontFamily: 'Mexcellent',
                color: '#ff9900', 
                fontSize: '40px', 
                background: '#000000', 
                padding: '10px', 
                borderRadius: '5px', 
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', 
                textAlign: 'center',
              }}
            >
              AGRICULTURA
            </div>
          </Html>
            </group>
          </RigidBody>
          <RigidBody
            type="fixed"
            colliders="cuboid"
            onCollisionEnter={({ manifold, target, other }) => {
              console.log("Collision at world position ", manifold.solverContactPoint(0));
              handleNavCollision('instrumentos');
            }}
          >
            <group>
            <AncientGate position={[-3, 7, -4]} scale={[0.05, 0.05, 0.05]} rotation={[angleToRadians(90), 0, 0]} map={painting.map1} />
            <Html position={[-3, 13, -4]}>
            <div
              style={{
                fontFamily: 'Mexcellent',
                color: '#ff9900', 
                fontSize: '40px', 
                background: '#000000', 
                padding: '10px', 
                borderRadius: '5px', 
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', 
                textAlign: 'center',
              }}
            >
              INSTRUMENTOS
            </div>
          </Html>
            </group>
          </RigidBody>
          <RigidBody
            type="fixed"
            colliders="cuboid"
            onCollisionEnter={({ manifold, target, other }) => {
              console.log("Collision at world position ", manifold.solverContactPoint(0));
              handleNavCollision('arquitectura');
            }}
          > 
          <group>
            <AncientGate position={[4, 7, -2]} rotation={[angleToRadians(90), 0, angleToRadians(90)]} scale={[0.05, 0.05, 0.05]} map={painting.map2} />
            <Html position={[4, 14, -3]}>
            <div
              style={{
                fontFamily: 'Mexcellent',
                color: '#ff9900', 
                fontSize: '40px', 
                background: '#000000', 
                padding: '10px', 
                borderRadius: '5px', 
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', 
                textAlign: 'center',
              }}
            >
              ARQUITECTURA
            </div>
          </Html>
            </group>
          </RigidBody>
        </group>

        {/* Floor */}
        <RigidBody type="fixed" colliders="cuboid">
          <mesh rotation={[-(angleToRadians(90)), 0, 0]} position={[0, 0, 0]} receiveShadow>
            <planeGeometry args={[50, 50]} />
            <meshStandardMaterial {...pyramidTextures} />
          </mesh>
        </RigidBody>
        {/* Walls */}
        <RigidBody type="fixed" colliders="cuboid">
          <mesh position={[-25, 0, 0]} rotation={[0, (angleToRadians(90)), 0]} receiveShadow>
            <boxGeometry args={[50, 8, 1]} />
            <meshStandardMaterial color="#F5DEB3"
              {...wallTexture}
            />
          </mesh>
        </RigidBody>
        <RigidBody type="fixed" colliders="cuboid">
          <mesh position={[25, 0, 0]} rotation={[0, (angleToRadians(90)), 0]} receiveShadow>
            <boxGeometry args={[50, 8, 1]} />
            <meshStandardMaterial color="#F5DEB3"
              {...wallTexture}
            />
          </mesh>
        </RigidBody>
        <RigidBody type="fixed" colliders="cuboid">
          <mesh position={[0, 0, 25]} rotation={[0, 0, 0]} receiveShadow>
            <boxGeometry args={[50, 8, 1]} />
            <meshStandardMaterial color="#F5DEB3"
              {...wallTexture}
            />
          </mesh>
        </RigidBody>
        <RigidBody type="fixed" colliders="cuboid">
          <mesh position={[0, 0, -25]} rotation={[0, 0, 0]} receiveShadow>
            <boxGeometry args={[50, 8, 1]} />
            <meshStandardMaterial color="#F5DEB3"
              {...wallTexture}
            />
          </mesh>
        </RigidBody>


        {/* Floor */}
        <RigidBody type="fixed" colliders="cuboid">
          <mesh rotation={[-(angleToRadians(90)), 0, 0]} position={[0, 0, 0]} receiveShadow>
            <planeGeometry args={[50, 50]} />
            <meshStandardMaterial {...pyramidTextures} />
          </mesh>
        </RigidBody>
        {/* Walls */}
        <RigidBody type="fixed" colliders="cuboid">
          <mesh position={[-25, 0, 0]} rotation={[0, (angleToRadians(90)), 0]} receiveShadow>
            <boxGeometry args={[50, 8, 1]} />
            <meshStandardMaterial color="#F5DEB3"
              {...wallTexture}
            />
          </mesh>
        </RigidBody>
        <RigidBody type="fixed" colliders="cuboid">
          <mesh position={[25, 0, 0]} rotation={[0, (angleToRadians(90)), 0]} receiveShadow>
            <boxGeometry args={[50, 8, 1]} />
            <meshStandardMaterial color="#F5DEB3"
              {...wallTexture}
            />
          </mesh>
        </RigidBody>
        <RigidBody type="fixed" colliders="cuboid">
          <mesh position={[0, 0, 25]} rotation={[0, 0, 0]} receiveShadow>
            <boxGeometry args={[50, 8, 1]} />
            <meshStandardMaterial color="#F5DEB3"
              {...wallTexture}
            />
          </mesh>
        </RigidBody>
        <RigidBody type="fixed" colliders="cuboid">
          <mesh position={[0, 0, -25]} rotation={[0, 0, 0]} receiveShadow>
            <boxGeometry args={[50, 8, 1]} />
            <meshStandardMaterial color="#F5DEB3"
              {...wallTexture}
            />
          </mesh>
        </RigidBody>


      </Physics>

      {pointerLocked && <PointerLockControls ref={controlsRef} />}

      {/* light */}
      <ambientLight args={["#ffffff", 0.25]} />

      {/* Enviroments */}
      <Environment map={envMap} background />
    </>
  )
}