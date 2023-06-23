import { Html, useGLTF, CameraControls, Environment, KeyboardControls, PerspectiveCamera, PointerLockControls, useEnvironment, useTexture } from '@react-three/drei';
import React from 'react';
import { angleToRadians } from '../utils/angle';
import Fence from './Fence';
import Boat from './Boat';
import Player from './Player';
import { Physics, RigidBody } from '@react-three/rapier';
import BoatPlayer from './BoatPlayer';
import Tomato from './Tomato';
import Dirt from './Dirt';
import Corn from './Corn';
import Pumpkin from './Pumpkin';
import Pepper from './Pepper';
import { randInt } from 'three/src/math/MathUtils';

const Agricultura = () => {
  const envMap = useEnvironment({ files: "../../ambientes/industrial_sunset_puresky_1k.hdr" })

  const dirt_heigh = 2;

  // Texto de Tomates
  const [mostrarTextoTomates, setTextoTomates] = React.useState(false);
  const textoTomates = () => {
    setTextoTomates(!mostrarTextoTomates);
  };

  return (<>
    {/* Testing Camera */}
    {/* <PerspectiveCamera makeDefault position={[-10, 5, 0]} />
          <CameraControls/> */}
    <ambientLight args={["#ffffff", 0.25]} />

    {/* Camera */}
    <PointerLockControls />

    <Physics>
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "w", "W"] },
          { name: "backward", keys: ["ArrowDown", "s", "S"] },
          { name: "left", keys: ["ArrowLeft", "a", "A"] },
          { name: "right", keys: ["ArrowRight", "d", "D"] },
        ]}>
        <BoatPlayer position={[0, 1, 0]} scale={[9, 9, 9]} />
      </KeyboardControls>

      {/* floor */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh rotation={[-(angleToRadians(90)), 0, 0]} receiveShadow>
          <planeGeometry args={[120, 180]} />
          <meshStandardMaterial color="#54B5CA" metalness={1} roughness={0.2} />
        </mesh>
      </RigidBody>
      {/* Floatin Crop */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh rotation={[-(angleToRadians(90)), 0, 0]} position={[-30, 1, 0]} receiveShadow>
          <boxGeometry args={[30, 160]} />
          <meshStandardMaterial color="#C19A6B" />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" colliders="cuboid">

        <mesh rotation={[-(angleToRadians(90)), 0, 0]} position={[30, 1, 0]} receiveShadow>
          <boxGeometry args={[30, 160]} />
          <meshStandardMaterial color="#C19A6B" />
        </mesh>
      </RigidBody>

      {/* Boat */}
      {/* <Boat position={[0,1,0]} scale={[9,9,9]}/> */}
      {/*Left crops fences  */}
      <RigidBody type="fixed" colliders="cuboid">
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-44, 2, -45]} scale={[6, 6, 6]} receiveShadow />
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-44, 2, -36]} scale={[6, 6, 6]} receiveShadow />
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-44, 2, -18]} scale={[6, 6, 6]} receiveShadow />
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-44, 2, 0]} scale={[6, 6, 6]} receiveShadow />
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-44, 2, 18]} scale={[6, 6, 6]} receiveShadow />
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-44, 2, 36]} scale={[6, 6, 6]} receiveShadow />
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-44, 2, 54]} scale={[6, 6, 6]} receiveShadow />
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-44, 2, 72]} scale={[6, 6, 6]} receiveShadow />
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-44, 2, 90]} scale={[6, 6, 6]} receiveShadow />
      </RigidBody>

      <RigidBody type="fixed" colliders="cuboid">
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[15, 2, -45]} scale={[6, 6, 6]} receiveShadow />
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[15, 2, -36]} scale={[6, 6, 6]} receiveShadow />
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[15, 2, -18]} scale={[6, 6, 6]} receiveShadow />
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[15, 2, 0]} scale={[6, 6, 6]} receiveShadow />
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[15, 2, 18]} scale={[6, 6, 6]} receiveShadow />
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[15, 2, 36]} scale={[6, 6, 6]} receiveShadow />
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[15, 2, 54]} scale={[6, 6, 6]} receiveShadow />
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[15, 2, 72]} scale={[6, 6, 6]} receiveShadow />
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[15, 2, 90]} scale={[6, 6, 6]} receiveShadow />
      </RigidBody>

      <RigidBody type="fixed" colliders="cuboid">
        <Fence rotation={[0, 0, 0]} position={[-62, 2, 75]} scale={[8, 6, 6]} receiveShadow />
      </RigidBody>

      <RigidBody type="fixed" colliders="cuboid">
        <Fence rotation={[0, 0, 0]} position={[-62, 2, -75]} scale={[8, 6, 6]} receiveShadow />
      </RigidBody>

      {/* Tomato plants */}
      <group receiveShadow castShadow onClick={textoTomates}>

        <Html position={[-22, 2, -70]}>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "gray",
              display: mostrarTextoTomates ? "block" : "none",
            }}
          >
            <p
              style={{
                fontFamily: "Arial",
                color: "white",
                width: "200px",
                height: "auto",
              }}
            >
              Para unos el origen de la ocarina se remonta a la América
              Prehispánica.
            </p>
            <p
              style={{
                fontFamily: "Arial",
                color: "white",
                width: "200px",
                height: "auto",
              }}
            >
              Es un pequeño instrumento de viento sin llaves descendiente de
              primitivos silbatos hechos con barro o hueso.
            </p>
          </div>
        </Html>
        <Tomato rotation={[0, (angleToRadians(randInt(-90, 90))), 0]} position={[-22, 2, -70]} />
        <Tomato rotation={[0, (angleToRadians(randInt(-90, 90))), 0]} position={[-29, 2, -70]} />
        <Tomato rotation={[0, (angleToRadians(randInt(-90, 90))), 0]} position={[-36, 2, -70]} />
        <Dirt position={[-29, dirt_heigh, -70]} scale={[0.7, 0.2, 0.9]} rotation={[0, (angleToRadians(90)), 0]} />

        <Tomato rotation={[0, (angleToRadians(randInt(-90, 90))), 0]} position={[-22, 2, -63]} />
        <Tomato rotation={[0, (angleToRadians(randInt(-90, 90))), 0]} position={[-29, 2, -63]} />
        <Tomato rotation={[0, (angleToRadians(randInt(-90, 90))), 0]} position={[-36, 2, -63]} />
        <Dirt position={[-29, dirt_heigh, -63]} scale={[0.7, 0.2, 0.9]} rotation={[0, (angleToRadians(90)), 0]} />

        <Tomato rotation={[0, (angleToRadians(randInt(-90, 90))), 0]} position={[-22, 2, -56]} />
        <Tomato rotation={[0, (angleToRadians(randInt(-90, 90))), 0]} position={[-29, 2, -56]} />
        <Tomato rotation={[0, (angleToRadians(randInt(-90, 90))), 0]} position={[-36, 2, -56]} />
        <Dirt position={[-29, dirt_heigh, -56]} scale={[0.7, 0.2, 0.9]} rotation={[0, (angleToRadians(90)), 0]} />

        <Tomato rotation={[0, (angleToRadians(randInt(-90, 90))), 0]} position={[-22, 2, -49]} />
        <Tomato rotation={[0, (angleToRadians(randInt(-90, 90))), 0]} position={[-29, 2, -49]} />
        <Tomato rotation={[0, (angleToRadians(randInt(-90, 90))), 0]} position={[-36, 2, -49]} />
        <Dirt position={[-29, dirt_heigh, -49]} scale={[0.7, 0.2, 0.9]} rotation={[0, (angleToRadians(90)), 0]} />
      </group>

      {/* Corn plants */}
      <group receiveShadow castShadow>
        <Corn rotation={[0, (angleToRadians(randInt(0, 360))), 0]} position={[-22, 2, -35]} />
        <Corn rotation={[0, (angleToRadians(randInt(0, 360))), 0]} position={[-29, 2, -35]} />
        <Corn rotation={[0, (angleToRadians(randInt(0, 360))), 0]} position={[-36, 2, -35]} />
        <Dirt position={[-29, dirt_heigh, -35]} scale={[0.7, 0.1, 0.9]} rotation={[0, (angleToRadians(90)), 0]} />

        <Corn rotation={[0, (angleToRadians(randInt(0, 360))), 0]} position={[-22, 2, -28]} />
        <Corn rotation={[0, (angleToRadians(randInt(0, 360))), 0]} position={[-29, 2, -28]} />
        <Corn rotation={[0, (angleToRadians(randInt(0, 360))), 0]} position={[-36, 2, -28]} />
        <Dirt position={[-29, dirt_heigh, -28]} scale={[0.7, 0.1, 0.9]} rotation={[0, (angleToRadians(90)), 0]} />

        <Corn rotation={[0, (angleToRadians(randInt(0, 360))), 0]} position={[-22, 2, -20]} />
        <Corn rotation={[0, (angleToRadians(randInt(0, 360))), 0]} position={[-29, 2, -20]} />
        <Corn rotation={[0, (angleToRadians(randInt(0, 360))), 0]} position={[-36, 2, -20]} />
        <Dirt position={[-29, dirt_heigh, -20]} scale={[0.7, 0.1, 0.9]} rotation={[0, (angleToRadians(90)), 0]} />

        <Corn rotation={[0, (angleToRadians(randInt(0, 360))), 0]} position={[-22, 2, -12]} />
        <Corn rotation={[0, (angleToRadians(randInt(0, 360))), 0]} position={[-29, 2, -12]} />
        <Corn rotation={[0, (angleToRadians(randInt(0, 360))), 0]} position={[-36, 2, -12]} />
        <Dirt position={[-29, dirt_heigh, -12]} scale={[0.7, 0.1, 0.9]} rotation={[0, (angleToRadians(90)), 0]} />

        <Corn rotation={[0, (angleToRadians(randInt(0, 360))), 0]} position={[-22, 2, -4]} />
        <Corn rotation={[0, (angleToRadians(randInt(0, 360))), 0]} position={[-29, 2, -4]} />
        <Corn rotation={[0, (angleToRadians(randInt(0, 360))), 0]} position={[-36, 2, -4]} />
        <Dirt position={[-29, dirt_heigh, -4]} scale={[0.7, 0.1, 0.9]} rotation={[0, (angleToRadians(90)), 0]} />
      </group>

      {/* Pumpkin plants */}
      <group receiveShadow castShadow>

        <Pumpkin position={[-22, 2.5, 8]} rotation={[0, (angleToRadians(randInt(0, 360))), 0]} />
        <Pumpkin position={[-29, 2.5, 8]} rotation={[0, (angleToRadians(randInt(0, 360))), 0]} />
        <Pumpkin position={[-36, 2.5, 8]} rotation={[0, (angleToRadians(randInt(0, 360))), 0]} />
        <Dirt position={[-29, dirt_heigh, 8]} scale={[0.7, 0.1, 0.9]} rotation={[0, (angleToRadians(90)), 0]} />

        <Pumpkin position={[-22, 2.5, 18]} rotation={[0, (angleToRadians(randInt(0, 360))), 0]} />
        <Pumpkin position={[-29, 2.5, 18]} rotation={[0, (angleToRadians(randInt(0, 360))), 0]} />
        <Pumpkin position={[-36, 2.5, 18]} rotation={[0, (angleToRadians(randInt(0, 360))), 0]} />
        <Dirt position={[-29, dirt_heigh, 18]} scale={[0.7, 0.1, 0.9]} rotation={[0, (angleToRadians(90)), 0]} />

        <Pumpkin position={[-22, 2.5, 28]} rotation={[0, (angleToRadians(randInt(0, 360))), 0]} />
        <Pumpkin position={[-29, 2.5, 28]} rotation={[0, (angleToRadians(randInt(0, 360))), 0]} />
        <Pumpkin position={[-36, 2.5, 28]} rotation={[0, (angleToRadians(randInt(0, 360))), 0]} />
        <Dirt position={[-29, dirt_heigh, 28]} scale={[0.7, 0.1, 0.9]} rotation={[0, (angleToRadians(90)), 0]} />
      </group>

      {/* Pepper plants */}
      <group receiveShadow castShadow>
        <Pepper position={[-22, 2.5, 42]} rotation={[0, (angleToRadians(randInt(0, 360))), 0]} />
        <Pepper position={[-29, 2.5, 42]} rotation={[0, (angleToRadians(randInt(0, 360))), 0]} />
        <Pepper position={[-36, 2.5, 42]} rotation={[0, (angleToRadians(randInt(0, 360))), 0]} />
        <Dirt position={[-29, dirt_heigh, 42]} scale={[0.7, 0.1, 0.9]} rotation={[0, (angleToRadians(90)), 0]} />

        <Pepper position={[-22, 2.5, 52]} rotation={[0, (angleToRadians(randInt(0, 360))), 0]} />
        <Pepper position={[-29, 2.5, 52]} rotation={[0, (angleToRadians(randInt(0, 360))), 0]} />
        <Pepper position={[-36, 2.5, 52]} rotation={[0, (angleToRadians(randInt(0, 360))), 0]} />
        <Dirt position={[-29, dirt_heigh, 52]} scale={[0.7, 0.1, 0.9]} rotation={[0, (angleToRadians(90)), 0]} />

        <Pepper position={[-22, 2.5, 62]} rotation={[0, (angleToRadians(randInt(0, 360))), 0]} />
        <Pepper position={[-29, 2.5, 62]} rotation={[0, (angleToRadians(randInt(0, 360))), 0]} />
        <Pepper position={[-36, 2.5, 62]} rotation={[0, (angleToRadians(randInt(0, 360))), 0]} />
        <Dirt position={[-29, dirt_heigh, 62]} scale={[0.7, 0.1, 0.9]} rotation={[0, (angleToRadians(90)), 0]} />
      </group>

      {/*Right crops fences  */}
      <RigidBody type="fixed" colliders="cuboid">
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[44, 2, -45]} scale={[6, 6, 6]} receiveShadow />
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[44, 2, -36]} scale={[6, 6, 6]} receiveShadow />
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[44, 2, -18]} scale={[6, 6, 6]} receiveShadow />
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[44, 2, 0]} scale={[6, 6, 6]} receiveShadow />
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[44, 2, 18]} scale={[6, 6, 6]} receiveShadow />
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[44, 2, 36]} scale={[6, 6, 6]} receiveShadow />
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[44, 2, 54]} scale={[6, 6, 6]} receiveShadow />
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[44, 2, 72]} scale={[6, 6, 6]} receiveShadow />
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[44, 2, 90]} scale={[6, 6, 6]} receiveShadow />
      </RigidBody>
      <RigidBody type="fixed" colliders="cuboid">
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-15, 2, -45]} scale={[6, 6, 6]} receiveShadow />
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-15, 2, -36]} scale={[6, 6, 6]} receiveShadow />
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-15, 2, -18]} scale={[6, 6, 6]} receiveShadow />
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-15, 2, 0]} scale={[6, 6, 6]} receiveShadow />
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-15, 2, 18]} scale={[6, 6, 6]} receiveShadow />
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-15, 2, 36]} scale={[6, 6, 6]} receiveShadow />
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-15, 2, 54]} scale={[6, 6, 6]} receiveShadow />
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-15, 2, 72]} scale={[6, 6, 6]} receiveShadow />
        <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-15, 2, 90]} scale={[6, 6, 6]} receiveShadow />
      </RigidBody>

      <RigidBody type="fixed" colliders="cuboid">
        <Fence rotation={[0, 0, 0]} position={[-3, 2, 75]} scale={[8, 6, 6]} receiveShadow />
      </RigidBody>

      <RigidBody type="fixed" colliders="cuboid">
        <Fence rotation={[0, 0, 0]} position={[-3, 2, -75]} scale={[8, 6, 6]} receiveShadow />
      </RigidBody>
    </Physics>

    {/* Enviroments */}
    <Environment map={envMap} background />

  </>);
};

export default Agricultura;
