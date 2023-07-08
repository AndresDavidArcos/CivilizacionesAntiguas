import { Physics, RigidBody } from "@react-three/rapier";
import Galeria from "./Galeria";
import { KeyboardControls, PointerLockControls } from "@react-three/drei";
import Player from "./Player";
import { useFrame } from "react-three-fiber";
import { useRef } from "react";

export default function GaleriaNavigation(){

    const controlsRef = useRef();

    useFrame(() => {
      if (controlsRef.current.isLocked === true) {
        document.getElementById('volverCamaraInstrumentos').style.display = 'none';
      }else{
        document.getElementById('volverCamaraInstrumentos').style.display = 'block';
      }
    })

    return (
        <>
      <Physics>
        <KeyboardControls
          map={[
            { name: "forward", keys: ["ArrowUp", "w", "W"] },
            { name: "backward", keys: ["ArrowDown", "s", "S"] },
            { name: "left", keys: ["ArrowLeft", "a", "A"] },
            { name: "right", keys: ["ArrowRight", "d", "D"] },
            { name: "jump", keys: ["Space"] },
          ]}>
          <Player position={[0, 3, 0]}/>
        </KeyboardControls>
        <RigidBody type="fixed" colliders="trimesh">
        <Galeria/>
        </RigidBody>
        </Physics>
        <PointerLockControls ref={controlsRef} selector="#volverCamaraInstrumentos"/>

        </>
    )
}