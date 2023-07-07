import { Physics, RigidBody } from "@react-three/rapier";
import Arte from "./Arte";
import { KeyboardControls, PointerLockControls } from "@react-three/drei";
import Player from "./Player";

export default function ArteNavigation(){
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
        <Arte/>
        </RigidBody>
        </Physics>
        <PointerLockControls />

        </>
    )
}