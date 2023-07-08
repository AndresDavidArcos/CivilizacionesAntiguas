import React from "react";
import {
  useGLTF,
  Html,
} from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { angleToRadians } from "../utils/angle";
import { Environment, KeyboardControls, PointerLockControls, useEnvironment, useTexture } from "@react-three/drei";
import { MeshStandardMaterial, RepeatWrapping } from "three";

export default function Arte(props) {

  const { nodes, materials } = useGLTF("../../modelos/arte_azteca_simplificado.glb");

  const tPathP = '../../texturas/arteEnv/';
  const floorTextures = useTexture({
    map: tPathP + 'Stylized_Stone_Floor_005_basecolor.jpg',
    aoMap: tPathP + 'Stylized_Stone_Floor_005_ao.jpg',
    displacementMap: tPathP + 'Stylized_Stone_Floor_005_height.png',
    normalMap: tPathP + "Stylized_Stone_Floor_005_normal.jpg",
    roughnessMap: tPathP + "Stylized_Stone_Floor_005_roughness.jpg",
  })
  
  const tPathQ = '../../texturas/pyramid/stoneBrick/';
  const pyramidTextures = useTexture({
    map: tPathQ+'stone_brick_wall_001_diff_1k.png',
    aoMap: tPathQ+'stone_brick_wall_001_ao_1k.png',
    displacementMap: tPathQ+'stone_brick_wall_001_disp_1k.png',
    normalMap: tPathQ+"stone_brick_wall_001_disp_1k.png",
    roughnessMap: tPathQ+"stone_brick_wall_001_rough_1k.png",
  })
  const pyramidMaterial = new MeshStandardMaterial({...pyramidTextures});
  pyramidMaterial.map.wrapS = RepeatWrapping;
  pyramidMaterial.map.wrapT = RepeatWrapping;
  pyramidMaterial.map.repeat.set(4, 4);

  const envMap = useEnvironment({ files: "../../ambientes/industrial_sunset_puresky_1k.hdr" })

  const [mostrarTextoPiramide, setTextoPiramide] = React.useState(false);
  const textoPiramide = () => {
    setTextoPiramide(!mostrarTextoPiramide);
  };

  const [mostrarTextoAnillo, setTextoAnillo] = React.useState(false);
  const textoAnillo = () => {
    setTextoAnillo(!mostrarTextoAnillo);
  };

  const [mostrarTextoEscultura, setTextoEscultura] = React.useState(false);
  const textoEscultura = () => {
    setTextoEscultura(!mostrarTextoEscultura);
  };

  const [mostrarTextoMascara, setTextoMascara] = React.useState(false);
  const textoMascara = () => {
    setTextoMascara(!mostrarTextoMascara);
  };

  const [mostrarTextoCubo, setTextoCubo] = React.useState(false);
  const textoCubo = () => {
    setTextoCubo(!mostrarTextoCubo);
  };

  return (
    <>

    <Physics>
    
    {/* Floor */}
    <mesh  rotation={[-(angleToRadians(90)), 0, 0]} position={[0,0,0]} receiveShadow>
      <planeGeometry args={[50, 50]}/>
      <meshStandardMaterial {...floorTextures}/>
    </mesh>
    <mesh  rotation={[-(angleToRadians(90)), 0, 0]} position={[-50,0,0]} receiveShadow>
      <planeGeometry args={[50, 50]}/>
      <meshStandardMaterial {...floorTextures}/>
    </mesh>
    <mesh  rotation={[-(angleToRadians(90)), 0, 0]} position={[0,0,50]} receiveShadow>
      <planeGeometry args={[50, 50]}/>
      <meshStandardMaterial {...floorTextures}/>
    </mesh>
    <mesh  rotation={[-(angleToRadians(90)), 0, 0]} position={[-50,0,50]} receiveShadow>
      <planeGeometry args={[50, 50]}/>
      <meshStandardMaterial {...floorTextures}/>
    </mesh>
    <mesh  rotation={[-(angleToRadians(90)), 0, 0]} position={[0,0,-50]} receiveShadow>
      <planeGeometry args={[50, 50]}/>
      <meshStandardMaterial {...floorTextures}/>
    </mesh>
    <mesh  rotation={[-(angleToRadians(90)), 0, 0]} position={[-50,0,-50]} receiveShadow>
      <planeGeometry args={[50, 50]}/>
      <meshStandardMaterial {...floorTextures}/>
    </mesh>
    
    <group {...props} dispose={null}>
      <group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.obj_0.geometry}
        material={pyramidMaterial}
        position={[-38.594, 0, 35.061]}
        rotation={[0, -0.472, 0]}
        scale={0.489}
        onPointerEnter={textoPiramide}
        onPointerLeave={textoPiramide}
      />
      <Html>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "gray",
            display: mostrarTextoPiramide ? "block" : "none",
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
            Estructura piramidal muy típica de la cultura azteca.
          </p>
        </div>
      </Html>
      </group>
      <group
        position={[-6.944, 1.078, -3.389]}
        rotation={[-Math.PI / 2, -0.008, -3.056]}
        scale={0.029}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial001.geometry}
            material={materials["02___Default"]}
            onPointerEnter={textoAnillo}
            onPointerLeave={textoAnillo}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.DefaultMaterial}
            onPointerEnter={textoAnillo}
            onPointerLeave={textoAnillo}
          />
          <Html>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "gray",
                display: mostrarTextoAnillo ? "block" : "none",
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
                Anillo de oro con el calendario solar azteca tallado en el.
              </p>
            </div>
          </Html>
        </group>
      </group>
      <group
        position={[0.878, 0.047, -7.594]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.045}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Malla.geometry}
          material={materials.lambert3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Malla_1.geometry}
          material={materials.lambert2}
          onPointerEnter={textoCubo}
          onPointerLeave={textoCubo}
        />
        <Html position={[-5, 250, -10]}>
          <div
            style={{
              position: "absolute",
              top: "0%",
              left: "0%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "gray",
              display: mostrarTextoCubo ? "block" : "none",
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
              Cubo de piedra con dioses aztecas tallados en sus caras.
            </p>
          </div>
        </Html>
      </group>
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Dragon_azteque.geometry}
          material={nodes.Dragon_azteque.material}
          position={[0.758, 3.992, 3.809]}
          rotation={[1.692, 0.026, 0.942]}
          scale={0.015}
          onPointerEnter={textoEscultura}
          onPointerLeave={textoEscultura}
        />
        <Html>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "gray",
              display: mostrarTextoEscultura ? "block" : "none",
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
              Escultura de Quetzalcóatl, un dios muy importante para la cultura azteca.
            </p>
          </div>
        </Html>
      </group>
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.uploads_files_2362153_MexicanSkull.geometry}
          material={nodes.uploads_files_2362153_MexicanSkull.material}
          position={[28.054, 0, 26.947]}
          onPointerEnter={textoMascara}
          onPointerLeave={textoMascara}
        />
        <Html>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "gray",
              display: mostrarTextoMascara ? "block" : "none",
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
              Mascara de un cuāuhpipiltin o también llamados guerreros águilas, quienes conformaban  las élites guerreras del antiguo Imperio Azteca.
            </p>
          </div>
        </Html>
      </group>
      <group
        position={[-6.796, 0, -3.594]}
        rotation={[0, 0, 0]}
        scale={0.015}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial002.geometry}
          material={materials.Base}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
    
    </Physics>

    {/* light */}
    <ambientLight args={["#ffffff", 0.25]} />

    {/* Enviroments */}
    <Environment map={envMap} background />
    </>
  );
}

useGLTF.preload("../../modelos/arte_Azteca.glb");