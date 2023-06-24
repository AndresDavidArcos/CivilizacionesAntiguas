import React from "react";
import {
  useGLTF,
  Html,
} from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { angleToRadians } from "../utils/angle";
import { Environment, KeyboardControls, PointerLockControls, useEnvironment, useTexture } from "@react-three/drei";

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
  
  const envMap = useEnvironment({ files: "../../ambientes/industrial_sunset_puresky_1k.hdr" })

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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.obj_0.geometry}
        material={materials.color_12237498}
        position={[-38.594, 0, 35.061]}
        rotation={[0, -0.472, 0]}
        scale={0.489}
      />
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
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.DefaultMaterial}
          />
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
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dragon_azteque.geometry}
        material={nodes.Dragon_azteque.material}
        position={[0.758, 3.992, 3.809]}
        rotation={[1.692, 0.026, 0.942]}
        scale={0.015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.uploads_files_2362153_MexicanSkull.geometry}
        material={nodes.uploads_files_2362153_MexicanSkull.material}
        position={[28.054, 0, 26.947]}
      />
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