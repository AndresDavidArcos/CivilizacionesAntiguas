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

  const { nodes, materials } = useGLTF("../../modelos/galeria_de_instrumentos1.glb");

  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [mostrarTextoMaraca, setTextoMaraca] = React.useState(false);
  const textoMaraca = () => {
    setTextoMaraca(!mostrarTextoMaraca);
  };

  const [mostrarTextoPercusion, setTextoPercusion] = React.useState(false);
  const textoPercusion = () => {
    setTextoPercusion(!mostrarTextoPercusion);
  };

  const [mostrarTextoFlauta, setTextoFlauta] = React.useState(false);
  const textoFlauta = () => {
    setTextoFlauta(!mostrarTextoFlauta);
  };

  const [mostrarTextoFlautaDePan, setTextoFlautaDePan] = React.useState(false);
  const textoFlautaDePan = () => {
    setTextoFlautaDePan(!mostrarTextoFlautaDePan);
  };

  const [mostrarTextoFlautaRara, setTextoFlautaRara] = React.useState(false);
  const textoFlautaRara = () => {
    setTextoFlautaRara(!mostrarTextoFlautaRara);
  };

  const [mostrarTextoOcarina, setTextoOcarina] = React.useState(false);
  const textoOcarina = () => {
    setTextoOcarina(!mostrarTextoOcarina);
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
      <group position={[-2.11, 1.56, 2.92]} rotation={[-Math.PI / 2, 0, 0]} scale={0.06}>
        <mesh //maraca rara
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials["material_0.002"]}
        onClick={textoFlautaRara}
        />
        <Html>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'gray', display: mostrarTextoFlautaRara ? 'block' : 'none' }}>
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
          <mesh //ocarina
            castShadow
            receiveShadow
            geometry={nodes.Object_2001.geometry}
            material={materials["material_0.003"]}
            onClick={textoOcarina}
          />
          <Html>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'gray', display: mostrarTextoOcarina ? 'block' : 'none' }}>
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
        onClick={textoPercusion}
      />
      <mesh //tambor peque
        castShadow
        receiveShadow
        geometry={nodes.Цилиндр002.geometry}
        material={nodes.Цилиндр002.material}
        position={[2.12, 1.4968, 1.06]}
        rotation={[Math.PI, -1.45, Math.PI]}
        scale={0.95}
        onClick={textoPercusion}
      />
      <mesh //tambor mediano
        castShadow
        receiveShadow
        geometry={nodes.Цилиндр004.geometry}
        material={nodes.Цилиндр004.material}
        position={[1.82, 0.4, 0.65]}
        rotation={[Math.PI, -1.45, Math.PI]}
        scale={0.93}
        onClick={textoPercusion}
      />
      <Html position={[1.88, 1.414, 1.27]}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'gray', display: mostrarTextoPercusion ? 'block' : 'none' }}>
            <p style={{ fontFamily: 'Arial', color: 'white' }}>Algunos tambores de la civilización azteca son: El Teponaztli, el Huehuetl y el Chicahuaztli</p>
          </div>
        </Html>

      <mesh //flauta de pan
        castShadow
        receiveShadow
        geometry={nodes.Цилиндр017.geometry}
        material={materials.Material}
        position={[1.84, 1.414, 2.66]}
        rotation={[Math.PI, -1.55, Math.PI]}
        onClick={textoFlautaDePan}
      />
      <Html position={[1.74, 1.414, 2.66]}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'gray', display: mostrarTextoFlautaDePan ? 'block' : 'none' }}>
            <p style={{ fontFamily: 'Arial', color: 'white' }}>La antara es una especie de flauta de Pan, hecha con cañas de carrizo dispuestas en escalera, adecuadamente afinadas y aseguradas por convenientes amarras de hilo.</p>
          </div>
        </Html>

      <mesh //flauta
        castShadow
        receiveShadow
        geometry={nodes.Цилиндр.geometry}
        material={nodes.Цилиндр.material}
        position={[-5.8, -0.464507, -6.44]}
        rotation={[-Math.PI, 0.84, -Math.PI]}
        scale={3}
        onClick={textoFlauta}
      />
      <Html position={[2.1, 1.414, 2.66]}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'gray', display: mostrarTextoFlauta ? 'block' : 'none' }}>
            <p style={{ fontFamily: 'Arial', color: 'white' }}>Un tlapitzalli es un instrumento musical conocido por las culturas de Mesoamérica, particularmente los aztecas. Por lo general tiene forma de flauta. Generalmente está hecho de barro o madera, decorado con motivos naturales o dibujos de las deidades aztecas.</p>
          </div>
        </Html>

      <mesh //maraca
        castShadow
        receiveShadow
        geometry={nodes.Куб001.geometry}
        material={nodes.Куб001.material}
        position={[-0.49, 0.794, 2.85]}
        rotation={[-Math.PI, 0.19, -Math.PI]}
        onClick={textoMaraca}
      />
      <mesh //maraca
        castShadow
        receiveShadow
        geometry={nodes.Куб002.geometry}
        material={nodes.Куб002.material}
        position={[-0.56, 0.794, 2.91]}
        rotation={[-Math.PI, 0.19, -Math.PI]}
        onClick={textoMaraca}
      />
      <Html position={[-2, 1.3, 2.8]}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'gray', display: mostrarTextoMaraca ? 'block' : 'none' }}>
            <p style={{ fontFamily: 'Arial', color: 'white' }}>La maraca o chac-chac es un instrumento tradicional de música étnica en México, América Latina y los caribes. Par coloridas sonajas ornamentadas hechas de calabazas, conocidas porque aun se conservan a día de hoy.</p>
          </div>
        </Html>

      <mesh //palo
        castShadow
        receiveShadow
        geometry={nodes.Цилиндр006.geometry}
        material={nodes.Цилиндр006.material}
        position={[2.04, 0.682, 0.731]}
        rotation={[-2.83, 0.43, 3.13]}
        scale={0.02}
        onClick={textoPercusion}
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

useGLTF.preload("../../modelos/galeria_de_instrumentos1.glb");