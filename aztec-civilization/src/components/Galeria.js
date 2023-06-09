import React, { useRef } from "react";
import {
  useGLTF,
  KeyboardControls, Html
} from "@react-three/drei";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function Galeria(props) {

  const { nodes, materials } = useGLTF("../../modelos/galeria_de_instrumentos.glb");

  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
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
        <group
          position={[-2.11, 1.19, 2.92]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.06}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials["material_0.002"]}
          />
        </group>
        <group
          position={[2.03, 1.15, 2.94]}
          rotation={[2.28, 0.07, -0.18]}
          scale={0.39}
        >
          <group position={[-0.42, -0.41, -0.47]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_2001.geometry}
              material={materials["material_0.003"]}
            />
          </group>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.uploads_files_629209_aztec.geometry}
          material={nodes.uploads_files_629209_aztec.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Цилиндр001.geometry}
          material={nodes.Цилиндр001.material}
          position={[-0.11, 0.31, 2.92]}
          rotation={[-Math.PI, 0.19, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Цилиндр002.geometry}
          material={nodes.Цилиндр002.material}
          position={[0.33, 0.08, 3]}
          rotation={[-Math.PI, 0.19, -Math.PI]}
          scale={0.95}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Цилиндр004.geometry}
          material={nodes.Цилиндр004.material}
          position={[-0.5, 0.39, 2.85]}
          rotation={[-Math.PI, 0.19, -Math.PI]}
          scale={0.93}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Retopo_Цилиндр005.geometry}
          material={nodes.Retopo_Цилиндр005.material}
          position={[-0.24, 0.33, 3.13]}
          rotation={[1.32, 1.24, 0]}
          scale={0.92}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Куб.geometry}
          material={nodes.Куб.material}
          position={[-0.12, 0.62, 2.92]}
          rotation={[Math.PI, -0.34, Math.PI]}
          scale={1.08}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Цилиндр017.geometry}
          material={nodes.Цилиндр017.material}
          position={[0.32, 0.35, 2.97]}
          rotation={[Math.PI, -1.55, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Цилиндр.geometry}
          material={nodes.Цилиндр.material}
          position={[-0.45, 0.43, 2.82]}
          rotation={[-Math.PI, 0.84, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Куб001.geometry}
          material={nodes.Куб001.material}
          position={[-0.49, 0.44, 2.85]}
          rotation={[-Math.PI, 0.19, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Куб002.geometry}
          material={nodes.Куб002.material}
          position={[-0.56, 0.44, 2.91]}
          rotation={[-Math.PI, 0.19, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Цилиндр006.geometry}
          material={nodes.Цилиндр006.material}
          position={[-0.2, 0.62, 2.77]}
          rotation={[-2.85, 0.23, -3.09]}
          scale={0.02}
        />
      </group>
      <Html>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/imagenes/ayuda.png"}
            alt="Imagen"
            style={{
              width: "30px",
              height: "30px",
              position: "fixed",
              top: "-400px",
              left: "-700px",
            }}
            onClick={handleOpen}
          />

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="instrucciones">
              <Typography id="modal-modal-title" variant="h5" component="h2">
                Intrucciones
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Puede explorar la habitación manteniendo presionado el click
                izquierdo y deslizando el mouse.
              </Typography>
              <Button
                variant="contained"
                size="small"
                className="boton"
                style={{
                  position: "absolute",
                  top: "137px",
                  left: "50px",
                  background: "red",
                }}
                onClick={() => setOpen(false)}
              >
                Cerrar
              </Button>
            </Box>
          </Modal>
        </div>
      </Html>
    </>
  );
}

useGLTF.preload("../../modelos/galeria_de_instrumentos.glb");
