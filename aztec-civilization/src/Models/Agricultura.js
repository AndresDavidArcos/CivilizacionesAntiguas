import {
  Html,
  useGLTF,
  CameraControls,
  Environment,
  KeyboardControls,
  PerspectiveCamera,
  PointerLockControls,
  useEnvironment,
  useTexture,
} from "@react-three/drei";
import React, {useRef} from "react";
import { angleToRadians } from "../utils/angle";
import Fence from "./Fence";
import Boat from "./Boat";
import Player from "./Player";
import { Physics, RigidBody } from "@react-three/rapier";
import BoatPlayer from "./BoatPlayer";
import Tomato from "./Tomato";
import Dirt from "./Dirt";
import Corn from "./Corn";
import Pumpkin from "./Pumpkin";
import Pepper from "./Pepper";
import Cotton from "./Cottonplant";
import { randInt } from "three/src/math/MathUtils";
import { useFrame } from "react-three-fiber";

const Agricultura = () => {
  const envMap = useEnvironment({
    files: "../../ambientes/industrial_sunset_puresky_1k.hdr",
  });

  const dirt_heigh = 2;

  // Texto de Tomates
  const [mostrarTextoTomates, setTextoTomates] = React.useState(false);
  const textoTomates = () => {
    setTextoTomates(!mostrarTextoTomates);
  };

  // Texto de Maiz
  const [mostrarTextoMaiz, setTextoMaiz] = React.useState(false);
  const textoMaiz = () => {
    setTextoMaiz(!mostrarTextoMaiz);
  };

  // Texto de Calabazas
  const [mostrarTextoCalabazas, setTextoCalabazas] = React.useState(false);
  const textoCalabazas = () => {
    setTextoCalabazas(!mostrarTextoCalabazas);
  };

  // Texto de Chile
  const [mostrarTextoChile, setTextoChile] = React.useState(false);
  const textoChile = () => {
    setTextoChile(!mostrarTextoChile);
  };

  // Texto de Algodon
  const [mostrarTextoAlgodon, setTextoAlgodon] = React.useState(false);
  const textoAlgodon = () => {
    setTextoAlgodon(!mostrarTextoAlgodon);
  };

  const controlsRef = useRef();

  useFrame(() => {
    if (controlsRef.current.isLocked === true) {
      document.getElementById('volverCamaraAgri').style.display = 'none';
    }else{
      document.getElementById('volverCamaraAgri').style.display = 'block';
    }
  })

  return (
    <>
      {/* Testing Camera */}
      {/* <PerspectiveCamera makeDefault position={[-10, 5, 0]} />
          <CameraControls/> */}
      <ambientLight args={["#ffffff", 0.25]} />

      {/* Camera */}
      <PointerLockControls ref={controlsRef} selector="#volverCamaraAgri"/>

      <Physics>
        <KeyboardControls
          map={[
            { name: "forward", keys: ["ArrowUp", "w", "W"] },
            { name: "backward", keys: ["ArrowDown", "s", "S"] },
            { name: "left", keys: ["ArrowLeft", "a", "A"] },
            { name: "right", keys: ["ArrowRight", "d", "D"] },
          ]}
        >
          <BoatPlayer position={[0, 1, 0]} scale={[9, 9, 9]} />
        </KeyboardControls>

        {/* floor */}
        <RigidBody type="fixed" colliders="cuboid">
          <mesh rotation={[-angleToRadians(90), 0, 0]} receiveShadow>
            <planeGeometry args={[120, 180]} />
            <meshStandardMaterial
              color="#54B5CA"
              metalness={1}
              roughness={0.2}
            />
          </mesh>
        </RigidBody>
        {/* Floatin Crop */}
        <RigidBody type="fixed" colliders="cuboid">
          <mesh
            rotation={[-angleToRadians(90), 0, 0]}
            position={[-30, 1, 0]}
            receiveShadow
          >
            <boxGeometry args={[30, 160]} />
            <meshStandardMaterial color="#C19A6B" />
          </mesh>
        </RigidBody>
        <RigidBody type="fixed" colliders="cuboid">
          <mesh
            rotation={[-angleToRadians(90), 0, 0]}
            position={[30, 1, 0]}
            receiveShadow
          >
            <boxGeometry args={[30, 160]} />
            <meshStandardMaterial color="#C19A6B" />
          </mesh>
        </RigidBody>

        {/* Boat */}
        {/* <Boat position={[0,1,0]} scale={[9,9,9]}/> */}
        {/*Left crops fences  */}
        <RigidBody type="fixed" colliders="cuboid">
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[-44, 2, -45]}
            scale={[6, 6, 6]}
            receiveShadow
          />
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[-44, 2, -36]}
            scale={[6, 6, 6]}
            receiveShadow
          />
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[-44, 2, -18]}
            scale={[6, 6, 6]}
            receiveShadow
          />
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[-44, 2, 0]}
            scale={[6, 6, 6]}
            receiveShadow
          />
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[-44, 2, 18]}
            scale={[6, 6, 6]}
            receiveShadow
          />
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[-44, 2, 36]}
            scale={[6, 6, 6]}
            receiveShadow
          />
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[-44, 2, 54]}
            scale={[6, 6, 6]}
            receiveShadow
          />
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[-44, 2, 72]}
            scale={[6, 6, 6]}
            receiveShadow
          />
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[-44, 2, 90]}
            scale={[6, 6, 6]}
            receiveShadow
          />
        </RigidBody>

        <RigidBody type="fixed" colliders="cuboid">
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[15, 2, -45]}
            scale={[6, 6, 6]}
            receiveShadow
          />
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[15, 2, -36]}
            scale={[6, 6, 6]}
            receiveShadow
          />
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[15, 2, -18]}
            scale={[6, 6, 6]}
            receiveShadow
          />
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[15, 2, 0]}
            scale={[6, 6, 6]}
            receiveShadow
          />
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[15, 2, 18]}
            scale={[6, 6, 6]}
            receiveShadow
          />
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[15, 2, 36]}
            scale={[6, 6, 6]}
            receiveShadow
          />
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[15, 2, 54]}
            scale={[6, 6, 6]}
            receiveShadow
          />
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[15, 2, 72]}
            scale={[6, 6, 6]}
            receiveShadow
          />
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[15, 2, 90]}
            scale={[6, 6, 6]}
            receiveShadow
          />
        </RigidBody>

        <RigidBody type="fixed" colliders="cuboid">
          <Fence
            rotation={[0, 0, 0]}
            position={[-62, 2, 75]}
            scale={[8, 6, 6]}
            receiveShadow
          />
        </RigidBody>

        <RigidBody type="fixed" colliders="cuboid">
          <Fence
            rotation={[0, 0, 0]}
            position={[-62, 2, -75]}
            scale={[8, 6, 6]}
            receiveShadow
          />
        </RigidBody>

        {/* Tomato plants */}
        <group receiveShadow castShadow onClick={textoTomates}>
          <Html position={[-22, 10, -70]}>
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
                  padding: "5px",
                }}
              >
                Los aztecas cultivaban tomates de tamaño pequeño y forma
                redonda, similares a las cerezas.
              </p>
              <p
                style={{
                  fontFamily: "Arial",
                  color: "white",
                  width: "200px",
                  height: "auto",
                  padding: "5px",
                }}
              >
                Estos tomates destacaban por su sabor único y su resistencia a
                enfermedades, adaptándose bien al clima cálido y seco de la
                región.
              </p>
            </div>
          </Html>
          <Tomato rotation={[0, 45, 0]} position={[-22, 2, -70]} />
          <Tomato rotation={[0, 125, 0]} position={[-29, 2, -70]} />
          <Tomato rotation={[0, 250, 0]} position={[-36, 2, -70]} />
          <Dirt
            position={[-29, dirt_heigh, -70]}
            scale={[0.7, 0.2, 0.9]}
            rotation={[0, angleToRadians(90), 0]}
          />

          <Tomato rotation={[0, 250, 0]} position={[-22, 2, -63]} />
          <Tomato rotation={[0, 125, 0]} position={[-29, 2, -63]} />
          <Tomato rotation={[0, 45, 0]} position={[-36, 2, -63]} />
          <Dirt
            position={[-29, dirt_heigh, -63]}
            scale={[0.7, 0.2, 0.9]}
            rotation={[0, angleToRadians(90), 0]}
          />

          <Tomato rotation={[0, 125, 0]} position={[-22, 2, -56]} />
          <Tomato rotation={[0, 250, 0]} position={[-29, 2, -56]} />
          <Tomato rotation={[0, 45, 0]} position={[-36, 2, -56]} />
          <Dirt
            position={[-29, dirt_heigh, -56]}
            scale={[0.7, 0.2, 0.9]}
            rotation={[0, angleToRadians(90), 0]}
          />

          <Tomato rotation={[0, 125, 0]} position={[-22, 2, -49]} />
          <Tomato rotation={[0, 45, 0]} position={[-29, 2, -49]} />
          <Tomato rotation={[0, 250, 0]} position={[-36, 2, -49]} />
          <Dirt
            position={[-29, dirt_heigh, -49]}
            scale={[0.7, 0.2, 0.9]}
            rotation={[0, angleToRadians(90), 0]}
          />
        </group>

        {/* Corn plants */}
        <group receiveShadow castShadow onClick={textoMaiz}>
          <Html position={[-22, 10, -35]}>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "gray",
                display: mostrarTextoMaiz ? "block" : "none",
              }}
            >
              <p
                style={{
                  fontFamily: "Arial",
                  color: "white",
                  width: "200px",
                  height: "auto",
                  padding: "5px",
                }}
              >
                Los aztecas eran expertos agricultores y cultivaban una variedad
                de maíz que desempeñaba un papel fundamental en su cultura y
                subsistencia.
              </p>
              <p
                style={{
                  fontFamily: "Arial",
                  color: "white",
                  width: "200px",
                  height: "auto",
                  padding: "5px",
                }}
              >
                El maíz que cultivaban era de gran importancia tanto en su
                alimentación diaria como en sus rituales y creencias.
              </p>
            </div>
          </Html>
          <Corn rotation={[0, 125, 0]} position={[-29, 2, -35]} />
          <Corn rotation={[0, 45, 0]} position={[-22, 2, -35]} />
          <Corn rotation={[0, 250, 0]} position={[-36, 2, -35]} />
          <Dirt
            position={[-29, dirt_heigh, -35]}
            scale={[0.7, 0.1, 0.9]}
            rotation={[0, angleToRadians(90), 0]}
          />

          <Corn rotation={[0, 45, 0]} position={[-22, 2, -28]} />
          <Corn rotation={[0, 125, 0]} position={[-29, 2, -28]} />
          <Corn rotation={[0, 250, 0]} position={[-36, 2, -28]} />
          <Dirt
            position={[-29, dirt_heigh, -28]}
            scale={[0.7, 0.1, 0.9]}
            rotation={[0, angleToRadians(90), 0]}
          />

          <Corn rotation={[0, 45, 0]} position={[-22, 2, -20]} />
          <Corn rotation={[0, 125, 0]} position={[-29, 2, -20]} />
          <Corn rotation={[0, 250, 0]} position={[-36, 2, -20]} />
          <Dirt
            position={[-29, dirt_heigh, -20]}
            scale={[0.7, 0.1, 0.9]}
            rotation={[0, angleToRadians(90), 0]}
          />

          <Corn rotation={[0, 45, 0]} position={[-22, 2, -12]} />
          <Corn rotation={[0, 125, 0]} position={[-29, 2, -12]} />
          <Corn rotation={[0, 250, 0]} position={[-36, 2, -12]} />
          <Dirt
            position={[-29, dirt_heigh, -12]}
            scale={[0.7, 0.1, 0.9]}
            rotation={[0, angleToRadians(90), 0]}
          />

          <Corn rotation={[0, 45, 0]} position={[-22, 2, -4]} />
          <Corn rotation={[0, 125, 0]} position={[-29, 2, -4]} />
          <Corn rotation={[0, 250, 0]} position={[-36, 2, -4]} />
          <Dirt
            position={[-29, dirt_heigh, -4]}
            scale={[0.7, 0.1, 0.9]}
            rotation={[0, angleToRadians(90), 0]}
          />
        </group>

        {/* Pumpkin plants */}
        <group receiveShadow castShadow onClick={textoCalabazas}>
          <Html position={[-22, 10, 8]}>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "gray",
                display: mostrarTextoCalabazas ? "block" : "none",
              }}
            >
              <p
                style={{
                  fontFamily: "Arial",
                  color: "white",
                  width: "200px",
                  height: "auto",
                  padding: "5px",
                }}
              >
                Las calabazas eran un cultivo importante para los aztecas, ya
                que desempeñaban un papel vital en su alimentación y en su vida
                cotidiana.
              </p>
              <p
                style={{
                  fontFamily: "Arial",
                  color: "white",
                  width: "200px",
                  height: "auto",
                  padding: "5px",
                }}
              >
                Cultivaban diferentes variedades de calabazas, que iban desde
                calabazas pequeñas hasta calabazas grandes y de forma irregular.
              </p>
            </div>
          </Html>
          <Pumpkin position={[-22, 2.5, 8]} rotation={[0, 45, 0]} />
          <Pumpkin position={[-29, 2.5, 8]} rotation={[0, 125, 0]} />
          <Pumpkin position={[-36, 2.5, 8]} rotation={[0, 250, 0]} />
          <Dirt
            position={[-29, dirt_heigh, 8]}
            scale={[0.7, 0.1, 0.9]}
            rotation={[0, angleToRadians(90), 0]}
          />

          <Pumpkin position={[-22, 2.5, 18]} rotation={[0, 45, 0]} />
          <Pumpkin position={[-29, 2.5, 18]} rotation={[0, 125, 0]} />
          <Pumpkin position={[-36, 2.5, 18]} rotation={[0, 250, 0]} />
          <Dirt
            position={[-29, dirt_heigh, 18]}
            scale={[0.7, 0.1, 0.9]}
            rotation={[0, angleToRadians(90), 0]}
          />

          <Pumpkin position={[-22, 2.5, 28]} rotation={[0, 45, 0]} />
          <Pumpkin position={[-29, 2.5, 28]} rotation={[0, 125, 0]} />
          <Pumpkin position={[-36, 2.5, 28]} rotation={[0, 250, 0]} />
          <Dirt
            position={[-29, dirt_heigh, 28]}
            scale={[0.7, 0.1, 0.9]}
            rotation={[0, angleToRadians(90), 0]}
          />
        </group>

        {/* Pepper plants */}
        <group receiveShadow castShadow onClick={textoChile}>
          <Html position={[-22, 10, 42]}>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "gray",
                display: mostrarTextoChile ? "block" : "none",
              }}
            >
              <p
                style={{
                  fontFamily: "Arial",
                  color: "white",
                  width: "200px",
                  height: "auto",
                  padding: "5px",
                }}
              >
                El chile, conocido como uno de los ingredientes icónicos de la
                cocina mexicana, fue cultivado y apreciado por los aztecas.
              </p>
              <p
                style={{
                  fontFamily: "Arial",
                  color: "white",
                  width: "200px",
                  height: "auto",
                  padding: "5px",
                }}
              >
                Cultivaban una amplia variedad de chiles, desde los suaves hasta
                los picantes, y los utilizaban tanto en su dieta diaria como en
                sus rituales y medicina tradicional.
              </p>
            </div>
          </Html>
          <Pepper position={[-22, 2.5, 42]} rotation={[0, 45, 0]} />
          <Pepper position={[-29, 2.5, 42]} rotation={[0, 125, 0]} />
          <Pepper position={[-36, 2.5, 42]} rotation={[0, 250, 0]} />
          <Dirt
            position={[-29, dirt_heigh, 42]}
            scale={[0.7, 0.1, 0.9]}
            rotation={[0, angleToRadians(90), 0]}
          />

          <Pepper position={[-22, 2.5, 47]} rotation={[0, 45, 0]} />
          <Pepper position={[-29, 2.5, 47]} rotation={[0, 125, 0]} />
          <Pepper position={[-36, 2.5, 47]} rotation={[0, 250, 0]} />

          <Pepper position={[-22, 2.5, 52]} rotation={[0, 45, 0]} />
          <Pepper position={[-29, 2.5, 52]} rotation={[0, 125, 0]} />
          <Pepper position={[-36, 2.5, 52]} rotation={[0, 250, 0]} />
          <Dirt
            position={[-29, dirt_heigh, 52]}
            scale={[0.7, 0.1, 0.9]}
            rotation={[0, angleToRadians(90), 0]}
          />

          <Pepper position={[-22, 2.5, 57]} rotation={[0, 45, 0]} />
          <Pepper position={[-29, 2.5, 57]} rotation={[0, 125, 0]} />
          <Pepper position={[-36, 2.5, 57]} rotation={[0, 250, 0]} />

          <Pepper position={[-22, 2.5, 62]} rotation={[0, 45, 0]} />
          <Pepper position={[-29, 2.5, 62]} rotation={[0, 125, 0]} />
          <Pepper position={[-36, 2.5, 62]} rotation={[0, 250, 0]} />
          <Dirt
            position={[-29, dirt_heigh, 62]}
            scale={[0.7, 0.1, 0.9]}
            rotation={[0, angleToRadians(90), 0]}
          />
        </group>

        {/*Right crops fences  */}
        <RigidBody type="fixed" colliders="cuboid">
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[44, 2, -45]}
            scale={[6, 6, 6]}
            receiveShadow
          />
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[44, 2, -36]}
            scale={[6, 6, 6]}
            receiveShadow
          />
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[44, 2, -18]}
            scale={[6, 6, 6]}
            receiveShadow
          />
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[44, 2, 0]}
            scale={[6, 6, 6]}
            receiveShadow
          />
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[44, 2, 18]}
            scale={[6, 6, 6]}
            receiveShadow
          />
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[44, 2, 36]}
            scale={[6, 6, 6]}
            receiveShadow
          />
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[44, 2, 54]}
            scale={[6, 6, 6]}
            receiveShadow
          />
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[44, 2, 72]}
            scale={[6, 6, 6]}
            receiveShadow
          />
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[44, 2, 90]}
            scale={[6, 6, 6]}
            receiveShadow
          />
        </RigidBody>
        <RigidBody type="fixed" colliders="cuboid">
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[-15, 2, -45]}
            scale={[6, 6, 6]}
            receiveShadow
          />
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[-15, 2, -36]}
            scale={[6, 6, 6]}
            receiveShadow
          />
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[-15, 2, -18]}
            scale={[6, 6, 6]}
            receiveShadow
          />
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[-15, 2, 0]}
            scale={[6, 6, 6]}
            receiveShadow
          />
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[-15, 2, 18]}
            scale={[6, 6, 6]}
            receiveShadow
          />
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[-15, 2, 36]}
            scale={[6, 6, 6]}
            receiveShadow
          />
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[-15, 2, 54]}
            scale={[6, 6, 6]}
            receiveShadow
          />
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[-15, 2, 72]}
            scale={[6, 6, 6]}
            receiveShadow
          />
          <Fence
            rotation={[0, angleToRadians(90), 0]}
            position={[-15, 2, 90]}
            scale={[6, 6, 6]}
            receiveShadow
          />
        </RigidBody>

        <RigidBody type="fixed" colliders="cuboid">
          <Fence
            rotation={[0, 0, 0]}
            position={[-3, 2, 75]}
            scale={[8, 6, 6]}
            receiveShadow
          />
        </RigidBody>

        <RigidBody type="fixed" colliders="cuboid">
          <Fence
            rotation={[0, 0, 0]}
            position={[-3, 2, -75]}
            scale={[8, 6, 6]}
            receiveShadow
          />
        </RigidBody>

        {/* Algodon plants */}
        <group receiveShadow castShadow onClick={textoAlgodon}>
          <Html position={[22, 10, -70]}>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "gray",
                display: mostrarTextoAlgodon ? "block" : "none",
              }}
            >
              <p
                style={{
                  fontFamily: "Arial",
                  color: "white",
                  width: "200px",
                  height: "auto",
                  padding: "5px",
                }}
              >
                El algodón era un cultivo importante para los aztecas, quienes
                lo cultivaban y utilizaban para diversas finalidades.
              </p>
              <p
                style={{
                  fontFamily: "Arial",
                  color: "white",
                  width: "200px",
                  height: "auto",
                  padding: "5px",
                }}
              >
                El algodón cultivado por los aztecas era de alta calidad y se
                utilizaba principalmente para la producción de telas y prendas
                de vestir.
              </p>
            </div>
          </Html>
          <Cotton rotation={[0, 45, 0]} position={[22, 2, -70]} />
          <Cotton rotation={[0, 125, 0]} position={[29, 2, -70]} />
          <Cotton rotation={[0, 250, 0]} position={[36, 2, -70]} />
          <Dirt
            position={[29, dirt_heigh, -70]}
            scale={[0.7, 0.2, 0.9]}
            rotation={[0, angleToRadians(90), 0]}
          />

          <Cotton rotation={[0, 250, 0]} position={[22, 2, -63]} />
          <Cotton rotation={[0, 125, 0]} position={[29, 2, -63]} />
          <Cotton rotation={[0, 45, 0]} position={[36, 2, -63]} />
          <Dirt
            position={[29, dirt_heigh, -63]}
            scale={[0.7, 0.2, 0.9]}
            rotation={[0, angleToRadians(90), 0]}
          />

          <Cotton rotation={[0, 125, 0]} position={[22, 2, -56]} />
          <Cotton rotation={[0, 250, 0]} position={[29, 2, -56]} />
          <Cotton rotation={[0, 45, 0]} position={[36, 2, -56]} />
          <Dirt
            position={[29, dirt_heigh, -56]}
            scale={[0.7, 0.2, 0.9]}
            rotation={[0, angleToRadians(90), 0]}
          />

          <Cotton rotation={[0, 125, 0]} position={[22, 2, -49]} />
          <Cotton rotation={[0, 45, 0]} position={[29, 2, -49]} />
          <Cotton rotation={[0, 250, 0]} position={[36, 2, -49]} />
          <Dirt
            position={[29, dirt_heigh, -49]}
            scale={[0.7, 0.2, 0.9]}
            rotation={[0, angleToRadians(90), 0]}
          />
        </group>

        {/* Corn plants */}
        <group receiveShadow castShadow onClick={textoMaiz}>
          <Html position={[22, 10, -35]}>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "gray",
                display: mostrarTextoMaiz ? "block" : "none",
              }}
            >
              <p
                style={{
                  fontFamily: "Arial",
                  color: "white",
                  width: "200px",
                  height: "auto",
                  padding: "5px",
                }}
              >
                Los aztecas eran expertos agricultores y cultivaban una variedad
                de maíz que desempeñaba un papel fundamental en su cultura y
                subsistencia.
              </p>
              <p
                style={{
                  fontFamily: "Arial",
                  color: "white",
                  width: "200px",
                  height: "auto",
                  padding: "5px",
                }}
              >
                El maíz que cultivaban era de gran importancia tanto en su
                alimentación diaria como en sus rituales y creencias.
              </p>
            </div>
          </Html>
          <Corn rotation={[0, 125, 0]} position={[29, 2, -35]} />
          <Corn rotation={[0, 45, 0]} position={[22, 2, -35]} />
          <Corn rotation={[0, 250, 0]} position={[36, 2, -35]} />
          <Dirt
            position={[29, dirt_heigh, -35]}
            scale={[0.7, 0.1, 0.9]}
            rotation={[0, angleToRadians(90), 0]}
          />

          <Corn rotation={[0, 45, 0]} position={[22, 2, -28]} />
          <Corn rotation={[0, 125, 0]} position={[29, 2, -28]} />
          <Corn rotation={[0, 250, 0]} position={[36, 2, -28]} />
          <Dirt
            position={[29, dirt_heigh, -28]}
            scale={[0.7, 0.1, 0.9]}
            rotation={[0, angleToRadians(90), 0]}
          />

          <Corn rotation={[0, 45, 0]} position={[22, 2, -20]} />
          <Corn rotation={[0, 125, 0]} position={[29, 2, -20]} />
          <Corn rotation={[0, 250, 0]} position={[36, 2, -20]} />
          <Dirt
            position={[29, dirt_heigh, -20]}
            scale={[0.7, 0.1, 0.9]}
            rotation={[0, angleToRadians(90), 0]}
          />

          <Corn rotation={[0, 45, 0]} position={[22, 2, -12]} />
          <Corn rotation={[0, 125, 0]} position={[29, 2, -12]} />
          <Corn rotation={[0, 250, 0]} position={[36, 2, -12]} />
          <Dirt
            position={[29, dirt_heigh, -12]}
            scale={[0.7, 0.1, 0.9]}
            rotation={[0, angleToRadians(90), 0]}
          />

          <Corn rotation={[0, 45, 0]} position={[22, 2, -4]} />
          <Corn rotation={[0, 125, 0]} position={[29, 2, -4]} />
          <Corn rotation={[0, 250, 0]} position={[36, 2, -4]} />
          <Dirt
            position={[29, dirt_heigh, -4]}
            scale={[0.7, 0.1, 0.9]}
            rotation={[0, angleToRadians(90), 0]}
          />
        </group>

        {/* Pumpkin plants */}
        <group receiveShadow castShadow onClick={textoCalabazas}>
          <Html position={[22, 10, 8]}>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "gray",
                display: mostrarTextoCalabazas ? "block" : "none",
              }}
            >
              <p
                style={{
                  fontFamily: "Arial",
                  color: "white",
                  width: "200px",
                  height: "auto",
                  padding: "5px",
                }}
              >
                Las calabazas eran un cultivo importante para los aztecas, ya
                que desempeñaban un papel vital en su alimentación y en su vida
                cotidiana.
              </p>
              <p
                style={{
                  fontFamily: "Arial",
                  color: "white",
                  width: "200px",
                  height: "auto",
                  padding: "5px",
                }}
              >
                Cultivaban diferentes variedades de calabazas, que iban desde
                calabazas pequeñas hasta calabazas grandes y de forma irregular.
              </p>
            </div>
          </Html>
          <Pumpkin position={[22, 2.5, 8]} rotation={[0, 45, 0]} />
          <Pumpkin position={[29, 2.5, 8]} rotation={[0, 125, 0]} />
          <Pumpkin position={[36, 2.5, 8]} rotation={[0, 250, 0]} />
          <Dirt
            position={[29, dirt_heigh, 8]}
            scale={[0.7, 0.1, 0.9]}
            rotation={[0, angleToRadians(90), 0]}
          />

          <Pumpkin position={[22, 2.5, 18]} rotation={[0, 45, 0]} />
          <Pumpkin position={[29, 2.5, 18]} rotation={[0, 125, 0]} />
          <Pumpkin position={[36, 2.5, 18]} rotation={[0, 250, 0]} />
          <Dirt
            position={[29, dirt_heigh, 18]}
            scale={[0.7, 0.1, 0.9]}
            rotation={[0, angleToRadians(90), 0]}
          />

          <Pumpkin position={[22, 2.5, 28]} rotation={[0, 45, 0]} />
          <Pumpkin position={[29, 2.5, 28]} rotation={[0, 125, 0]} />
          <Pumpkin position={[36, 2.5, 28]} rotation={[0, 250, 0]} />
          <Dirt
            position={[29, dirt_heigh, 28]}
            scale={[0.7, 0.1, 0.9]}
            rotation={[0, angleToRadians(90), 0]}
          />
        </group>

        {/* Pepper plants */}
        <group receiveShadow castShadow onClick={textoChile}>
          <Html position={[22, 10, 42]}>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "gray",
                display: mostrarTextoChile ? "block" : "none",
              }}
            >
              <p
                style={{
                  fontFamily: "Arial",
                  color: "white",
                  width: "200px",
                  height: "auto",
                  padding: "5px",
                }}
              >
                El chile, conocido como uno de los ingredientes icónicos de la
                cocina mexicana, fue cultivado y apreciado por los aztecas.
              </p>
              <p
                style={{
                  fontFamily: "Arial",
                  color: "white",
                  width: "200px",
                  height: "auto",
                  padding: "5px",
                }}
              >
                Cultivaban una amplia variedad de chiles, desde los suaves hasta
                los picantes, y los utilizaban tanto en su dieta diaria como en
                sus rituales y medicina tradicional.
              </p>
            </div>
          </Html>
          <Pepper position={[22, 2.5, 42]} rotation={[0, 45, 0]} />
          <Pepper position={[29, 2.5, 42]} rotation={[0, 125, 0]} />
          <Pepper position={[36, 2.5, 42]} rotation={[0, 250, 0]} />
          <Dirt
            position={[29, dirt_heigh, 42]}
            scale={[0.7, 0.1, 0.9]}
            rotation={[0, angleToRadians(90), 0]}
          />

          <Pepper position={[22, 2.5, 47]} rotation={[0, 45, 0]} />
          <Pepper position={[29, 2.5, 47]} rotation={[0, 125, 0]} />
          <Pepper position={[36, 2.5, 47]} rotation={[0, 250, 0]} />

          <Pepper position={[22, 2.5, 52]} rotation={[0, 45, 0]} />
          <Pepper position={[29, 2.5, 52]} rotation={[0, 125, 0]} />
          <Pepper position={[36, 2.5, 52]} rotation={[0, 250, 0]} />
          <Dirt
            position={[29, dirt_heigh, 52]}
            scale={[0.7, 0.1, 0.9]}
            rotation={[0, angleToRadians(90), 0]}
          />

          <Pepper position={[22, 2.5, 57]} rotation={[0, 45, 0]} />
          <Pepper position={[29, 2.5, 57]} rotation={[0, 125, 0]} />
          <Pepper position={[36, 2.5, 57]} rotation={[0, 250, 0]} />

          <Pepper position={[22, 2.5, 62]} rotation={[0, 45, 0]} />
          <Pepper position={[29, 2.5, 62]} rotation={[0, 125, 0]} />
          <Pepper position={[36, 2.5, 62]} rotation={[0, 250, 0]} />
          <Dirt
            position={[29, dirt_heigh, 62]}
            scale={[0.7, 0.1, 0.9]}
            rotation={[0, angleToRadians(90), 0]}
          />
        </group>
      </Physics>

      {/* Enviroments */}
      <Environment map={envMap} background />
    </>
  );
};

export default Agricultura;
