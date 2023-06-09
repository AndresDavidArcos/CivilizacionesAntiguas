/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 aztecPyramid.glb
*/

import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { MeshStandardMaterial, RepeatWrapping } from "three";

export default function AztecPyramid(props) {
  const { nodes, materials } = useGLTF('../../modelos/aztecPyramid.glb')
  const tPathP = '../../texturas/pyramid/patteredBrick/';
  const patteredBrick = useTexture({
    map: tPathP+'patterned_brick_wall_02_diff_1k.png',
    aoMap: tPathP+'patterned_brick_wall_02_ao_1k.jpg',
    displacementMap: tPathP+'patterned_brick_wall_02_disp_1k.png',
    normalMap: tPathP+"patterned_brick_wall_02_nor_gl_1k.png",
    roughnessMap: tPathP+"patterned_brick_wall_02_rough_1k.png",
  })
  const tPathQ = '../../texturas/pyramid/stoneBrick/';
  const stoneBrick = useTexture({
    map: tPathQ+'stone_brick_wall_001_diff_1k.png',
    aoMap: tPathQ+'stone_brick_wall_001_ao_1k.png',
    displacementMap: tPathQ+'stone_brick_wall_001_disp_1k.png',
    normalMap: tPathQ+"stone_brick_wall_001_disp_1k.png",
    roughnessMap: tPathQ+"stone_brick_wall_001_rough_1k.png",
  })

  const wallMaterial = new MeshStandardMaterial({...patteredBrick});
  wallMaterial.map.wrapS = RepeatWrapping;
  wallMaterial.map.wrapT = RepeatWrapping;
  wallMaterial.map.repeat.set(2, 2); 
  
  const floorMaterial = new MeshStandardMaterial({...stoneBrick});
  floorMaterial.map.wrapS = RepeatWrapping;
  floorMaterial.map.wrapT = RepeatWrapping;
  floorMaterial.map.repeat.set(4, 4); 

  return (
    <group {...props} dispose={null}>
      <group position={[4.63, 6.63, 0]} rotation={[0, -Math.PI / 2, 0]} scale={[1.3, 0.1, 0.16]}>
        <mesh geometry={nodes.Cube042.geometry} material={floorMaterial} />
        <mesh geometry={nodes.Cube042_1.geometry} material={materials['Brownish.001']} />
        <mesh geometry={nodes.Cube042_2.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cube042_3.geometry} material={floorMaterial} />
        <mesh geometry={nodes.Cube042_4.geometry} material={materials['Material.002']} />
      </group>
    </group>
  )
}

useGLTF.preload('../../modelos/aztecPyramid.glb')
