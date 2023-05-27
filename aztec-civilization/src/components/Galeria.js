
import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { MeshStandardMaterial } from 'three';

export default function Galeria(props) {

  const { nodes, materials } = useGLTF("../../modelos/the_picture_gallery.glb");
  return (

    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} receiveShadow />
      <mesh position={[0, 2, 0]} receiveShadow>
        <boxGeometry args={[2.5, 3.6, 0.1]} />
        <meshStandardMaterial color="#F5DEB3"
          map={props.map}
        />
      </mesh>
    </group>


    // <mesh
    //   castShadow
    //   receiveShadow
    //   geometry={nodes.Object_2.geometry}
    //   material={materials["161122_HWY_Galleri_Material_u1_v1"]}
    // />


    //   <mesh 

    //   <group {...props} dispose={null}>
    //     <group
    //       position={[-0.04, -3.06, 4.06]}
    //       rotation={[3.14, 0, 0.01]}
    //       scale={0.03}
    //     >
    //       <group position={[-6.02, -7.15, -12.62]}>
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Object_2.geometry}
    //           material={materials["161122_HWY_Galleri_Material_u1_v1"]}
    //         />
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Object_3.geometry}
    //           material={materials["161122_HWY_Galleri_Material_u1_v1"]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Object_4.geometry}
    //           material={materials["161122_HWY_Galleri_Material_u1_v1"]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Object_5.geometry}
    //           material={materials["161122_HWY_Galleri_Material_u1_v1"]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Object_6.geometry}
    //           material={materials["161122_HWY_Galleri_Material_u1_v1"]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Object_7.geometry}
    //           material={materials["161122_HWY_Galleri_Material_u1_v1"]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Object_8.geometry}
    //           material={materials["161122_HWY_Galleri_Material_u1_v1"]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Object_9.geometry}
    //           material={materials["161122_HWY_Galleri_Material_u1_v1"]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Object_10.geometry}
    //           material={materials["161122_HWY_Galleri_Material_u1_v1"]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Object_11.geometry}
    //           material={materials["161122_HWY_Galleri_Material_u1_v1"]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Object_12.geometry}
    //           material={materials["161122_HWY_Galleri_Material_u1_v1"]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Object_13.geometry}
    //           material={materials["161122_HWY_Galleri_Material_u1_v1"]}
    // /> 
    //       </group>
    //     </group>
    //   </group>



  );
}


useGLTF.preload("../../modelos/the_picture_gallery.glb");
