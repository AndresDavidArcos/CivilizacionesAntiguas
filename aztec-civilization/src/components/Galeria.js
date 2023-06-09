import React, { useRef } from "react";
import { Html, useGLTF } from "@react-three/drei";

export default function Galeria(props) {
  const { nodes, materials } = useGLTF("../../modelos/galeria_de_instrumentos1.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-0.14, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2003.geometry}
          material={materials.material}
        />
      </group>
      <group
        position={[-2.1, 0, 2.93]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.02}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial002.geometry}
              material={materials.Base}
            />
          </group>
        </group>
      </group>
      <group
        position={[2.02, 0, 2.91]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.02}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial004.geometry}
              material={materials["Base.002"]}
            />
          </group>
        </group>
      </group>
      <group position={[-2.11, 1.56, 2.92]} rotation={[-Math.PI / 2, 0, 0]} scale={0.06}>
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials["material_0.002"]}
        />
        <Html>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <p style={{ fontFamily: 'Arial', color: 'white' }}>Tiene un mango de madera decorado con cuerdas de algodón de colores con 14 ayoyotes (sonajeros de madera).</p>
          </div>
        </Html>
      </group>
      <group
        position={[1.8, 1.519, 2.94]}
        rotation={[2.187, 0.07, -0.18]}
        scale={0.39}
      >
        <group position={[-0.42, -0.41, -0.47]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2001.geometry}
            material={materials["material_0.003"]}
          />
          <Html>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <p style={{ fontFamily: 'Arial', color: 'white' }}>Para unos el origen de la ocarina se remonta a la América Prehispánica.</p>
              <p style={{ fontFamily: 'Arial', color: 'white' }}>Es un pequeño instrumento de viento sin llaves descendiente de primitivos silbatos hechos con barro o hueso.</p>
            </div>
          </Html>
        </group>
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}
        position={[-0.66, 0, -0.4]}
         scale={0.02}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh //columna
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial.geometry}
              material={materials["Base.001"]}
            />
          </group>
        </group>
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} 
        position={[0.7, 0, -0.4]}
        scale={0.02}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group 
            rotation={[-Math.PI / 2, 0, 0]}
            >
            <mesh //pilar de cuerdas
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial001.geometry}
              material={materials["Base.003"]}
            />
          </group>
        </group>
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh //circulo dorado
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial003.geometry}
            material={materials["DefaultMaterial.001"]}
          />
        </group>
      </group>
      <mesh //circulo central en la pared
        castShadow
        receiveShadow
        geometry={nodes.uploads_files_629209_aztec.geometry}
        material={nodes.uploads_files_629209_aztec.material}
        position={[-1.49, 1.46, 4.21]}
        scale={0.02}
      />
      <mesh //tambor grande
        castShadow
        receiveShadow
        geometry={nodes.Цилиндр001.geometry}
        material={nodes.Цилиндр001.material}
        position={[2.05, 0.32, 1.75]}
        rotation={[Math.PI, -1.45*3, Math.PI]}
      />
      <mesh //tambor peque
        castShadow
        receiveShadow
        geometry={nodes.Цилиндр002.geometry}
        material={nodes.Цилиндр002.material}
        position={[2.12, 1.4968, 1.06]}
        rotation={[Math.PI, -1.45, Math.PI]}
        scale={0.95}
      />
      <mesh //tambor mediano
        castShadow
        receiveShadow
        geometry={nodes.Цилиндр004.geometry}
        material={nodes.Цилиндр004.material}
        position={[1.82, 0.4, 0.65]}
        rotation={[Math.PI, -1.45, Math.PI]}
        scale={0.93}
      />
      <mesh //arpa
        castShadow
        receiveShadow
        geometry={nodes.Retopo_Цилиндр005.geometry}
        material={nodes.Retopo_Цилиндр005.material}
        position={[-2.1, 1.414, 1.1]}
        rotation={[0, 1.24, 0]}
        scale={0.92}
      />
      <Html position={[-2.1, 1.514, 1.1]}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <p style={{ fontFamily: 'Arial', color: 'white' }}>ARPA</p>
          </div>
        </Html>
      <mesh //xilofono
        castShadow
        receiveShadow
        geometry={nodes.Куб.geometry}
        material={nodes.Куб.material}
        position={[1.88, 1.414, 1.27]}
        rotation={[0, -1.17, 0]}
        scale={1.08}
      />
      <Html position={[1.88, 1.414, 1.27]}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <p style={{ fontFamily: 'Arial', color: 'white' }}>PERCUSIÓN</p>
          </div>
        </Html>
      <mesh //viento
        castShadow
        receiveShadow
        geometry={nodes.Цилиндр017.geometry}
        material={materials.Material}
        position={[1.84, 1.414, 2.66]}
        rotation={[Math.PI, -1.55, Math.PI]}
      />
      <mesh //flauta
        castShadow
        receiveShadow
        geometry={nodes.Цилиндр.geometry}
        material={nodes.Цилиндр.material}
        position={[-5.8, -0.464507, -6.44]}
        rotation={[-Math.PI, 0.84, -Math.PI]}
        scale={3}
      />
      <mesh //maraca
        castShadow
        receiveShadow
        geometry={nodes.Куб001.geometry}
        material={nodes.Куб001.material}
        position={[-0.49, 0.794, 2.85]}
        rotation={[-Math.PI, 0.19, -Math.PI]}
      />
      <mesh //maraca
        castShadow
        receiveShadow
        geometry={nodes.Куб002.geometry}
        material={nodes.Куб002.material}
        position={[-0.56, 0.794, 2.91]}
        rotation={[-Math.PI, 0.19, -Math.PI]}
      />
      <mesh //palo
        castShadow
        receiveShadow
        geometry={nodes.Цилиндр006.geometry}
        material={nodes.Цилиндр006.material}
        position={[2.04, 0.682, 0.731]}
        rotation={[-2.83, 0.43, 3.13]}
        scale={0.02}
      />
    </group>
  );
}


useGLTF.preload("../../modelos/galeria_de_instrumentos1.glb");
