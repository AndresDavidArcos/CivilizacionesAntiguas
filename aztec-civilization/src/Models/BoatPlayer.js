import * as THREE from "three";
import * as RAPIER from "@dimforge/rapier3d-compat";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { RigidBody, useRapier } from "@react-three/rapier";
import Boat from "./Boat";
import { angleToRadians } from "../utils/angle";

const SPEED = 13;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();

export default function BoatPlayer(props, { lerp = THREE.MathUtils.lerp }) {
  const ref = useRef();
  const [boatRotation, setBoatRotation] = useState(angleToRadians(-40));

  const [, get] = useKeyboardControls();
  useFrame((state) => {
    const { forward, backward, left, right } = get();
    const velocity = ref.current.linvel();

    // Update camera position
    const [x, y, z] = ref.current.translation();
    state.camera.position.set(x, y + 11, z + 2); // Adjust camera position here
    // Movement
    frontVector.set(0, 0, backward - forward);
    sideVector.set(left - right, 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(state.camera.rotation);
    ref.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z });
  });

  return (
    <>
      <RigidBody
        ref={ref}
        colliders={"cuboid"}
        mass={1}
        type="dynamic"
        position={props.position}
        enabledRotations={[false, false, false]}
      >
        <Boat
          position={[0, 1, 0]}
          scale={[9, 9, 9]}
          rotation={[0, boatRotation, 0]}
        />
      </RigidBody>
    </>
  );
}
