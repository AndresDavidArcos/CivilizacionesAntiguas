/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 stoneGate.glb
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { MeshStandardMaterial } from 'three';
import { angleToRadians } from '../utils/angle';

export function StoneGate(props) {
  const tPathS = '../../texturas/acientStone/';
  const stoneGateTextures = useTexture({
    map: tPathS+'Stonegate_None_BaseColor.1001.png',
    emmisiveMap: tPathS+'Stonegate_None_Emissive.1001.png',
    displacementMap: tPathS+'Stonegate_None_Emissive.1001.png',
    metallicMap: tPathS+'Stonegate_None_Emissive.1001.png',
    normalMap: tPathS+"Stonegate_None_Emissive.1001.png",
    roughnessMap: tPathS+"Stonegate_None_Emissive.1001.png",
  })

  const { nodes, materials } = useGLTF('../../modelos/stoneGate.glb')
  const material = new MeshStandardMaterial({...stoneGateTextures});  
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Stone_gate.geometry} material={material} receiveShadow/>
      <mesh position={[0, 2, 0]} receiveShadow>
                    <boxGeometry args={[2.5, 3.6, 0.1]} />
                    <meshStandardMaterial color="#F5DEB3"
                      map={props.map}
                        />
                </mesh>  
    </group>
  )
}

useGLTF.preload('../../modelos/stoneGate.glb')
