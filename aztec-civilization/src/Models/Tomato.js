/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 fence.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { angleToRadians } from '../utils/angle';

export default function Tomato(props) {
    const { nodes, materials } = useGLTF('../../modelos/tomato_plant.glb')

    return (
        < group {...props} dispose={null} >
            <mesh geometry={nodes.Object_2.geometry} material={materials['lambert4SG']} position={[0, 0, 0]} scale={[0.05, 0.05, 0.05]} rotation={[(angleToRadians(-90)), 0, 0]} />
        </group >
    )
}

useGLTF.preload('../../modelos/tomato_plant.glb')
