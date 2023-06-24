import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Dirt(props) {
    const { nodes, materials } = useGLTF('../../modelos/large_earth_pile.glb')
    return (
        <group {...props} dispose={null}>
            <group rotation={[-1.569, 0.041, -0.803]}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                        <mesh geometry={nodes.Model_material0_0.geometry} material={materials.material0} />
                        <mesh geometry={nodes.Model_material1_0.geometry} material={materials.material1} />
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('../../modelos/large_earth_pile.glb')
