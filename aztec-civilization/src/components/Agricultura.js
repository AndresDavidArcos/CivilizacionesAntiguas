import { CameraControls, Environment, KeyboardControls, PerspectiveCamera, PointerLockControls, useEnvironment, useTexture } from '@react-three/drei';
import React from 'react';
import { angleToRadians } from '../utils/angle';
import Fence from './Fence';
import Boat from './Boat';
import Player from './Player';
import { Physics, RigidBody } from '@react-three/rapier';
import BoatPlayer from './BoatPlayer';

const Agricultura = () => {
  const envMap = useEnvironment({ files: "../../ambientes/industrial_sunset_puresky_1k.hdr" })

  return (<>
            {/* Testing Camera */}
          {/* <PerspectiveCamera makeDefault position={[-10, 5, 0]} />
          <CameraControls/> */}
          <ambientLight args={["#ffffff", 0.25]}/>

    {/* Camera */}
    <PointerLockControls />

      <Physics>
        <KeyboardControls
          map={[
            { name: "forward", keys: ["ArrowUp", "w", "W"] },
            { name: "backward", keys: ["ArrowDown", "s", "S"] },
            { name: "left", keys: ["ArrowLeft", "a", "A"] },
            { name: "right", keys: ["ArrowRight", "d", "D"] },
          ]}>
          <BoatPlayer position={[0,1,0]} scale={[9,9,9]}/>
        </KeyboardControls>

            {/* floor */}
            <RigidBody type="fixed" colliders="cuboid">
            <mesh rotation={[-(angleToRadians(90)), 0, 0]} receiveShadow>
                    <planeGeometry args={[120, 180]} />
                    <meshStandardMaterial color="#54B5CA"  metalness={1} roughness={0.2}/>
                </mesh>
            </RigidBody>
            {/* Floatin Crop */}
            <RigidBody type="fixed" colliders="cuboid">
                <mesh rotation={[-(angleToRadians(90)), 0, 0]} position={[-30,1,0]} receiveShadow>
                    <boxGeometry args={[30, 160]} />
                    <meshStandardMaterial color="#C19A6B" />
                </mesh>
            </RigidBody>
              <RigidBody type="fixed" colliders="cuboid">

                <mesh rotation={[-(angleToRadians(90)), 0, 0]} position={[30,1,0]} receiveShadow>
                    <boxGeometry args={[30, 160]} />
                    <meshStandardMaterial color="#C19A6B" />
                </mesh> 
                </RigidBody>

                {/* Boat */}
                {/* <Boat position={[0,1,0]} scale={[9,9,9]}/> */}
                  {/*Left crops fences  */}
                <RigidBody type="fixed" colliders="cuboid">                  
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-44,2,-45]} scale={[6,6,6]} receiveShadow/>
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-44,2,-36]} scale={[6,6,6]} receiveShadow/>
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-44,2,-18]} scale={[6,6,6]} receiveShadow/>
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-44,2,0]} scale={[6,6,6]} receiveShadow/>
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-44,2,18]} scale={[6,6,6]} receiveShadow/>
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-44,2,36]} scale={[6,6,6]} receiveShadow/>
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-44,2,54]} scale={[6,6,6]} receiveShadow/>
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-44,2,72]} scale={[6,6,6]} receiveShadow/>
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-44,2,90]} scale={[6,6,6]} receiveShadow/>
                </RigidBody>

                <RigidBody type="fixed" colliders="cuboid">
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[15,2,-45]} scale={[6,6,6]} receiveShadow/>
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[15,2,-36]} scale={[6,6,6]} receiveShadow/>
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[15,2,-18]} scale={[6,6,6]} receiveShadow/>
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[15,2,0]} scale={[6,6,6]} receiveShadow/>
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[15,2,18]} scale={[6,6,6]} receiveShadow/>
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[15,2,36]} scale={[6,6,6]} receiveShadow/>
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[15,2,54]} scale={[6,6,6]} receiveShadow/>
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[15,2,72]} scale={[6,6,6]} receiveShadow/>
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[15,2,90]} scale={[6,6,6]} receiveShadow/>
                </RigidBody>

                <RigidBody type="fixed" colliders="cuboid">                  
                <Fence rotation={[0, 0, 0]} position={[-62,2,75]} scale={[8,6,6]} receiveShadow/>
                </RigidBody>

                <RigidBody type="fixed" colliders="cuboid">                  
                <Fence rotation={[0, 0, 0]} position={[-62,2,-75]} scale={[8,6,6]} receiveShadow/>
                </RigidBody>

                {/*Right crops fences  */}
                <RigidBody type="fixed" colliders="cuboid">
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[44, 2, -45]} scale={[6, 6, 6]} receiveShadow />
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[44, 2, -36]} scale={[6, 6, 6]} receiveShadow />
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[44, 2, -18]} scale={[6, 6, 6]} receiveShadow />
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[44, 2, 0]} scale={[6, 6, 6]} receiveShadow />
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[44, 2, 18]} scale={[6, 6, 6]} receiveShadow />
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[44, 2, 36]} scale={[6, 6, 6]} receiveShadow />
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[44, 2, 54]} scale={[6, 6, 6]} receiveShadow />
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[44, 2, 72]} scale={[6, 6, 6]} receiveShadow />
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[44, 2, 90]} scale={[6, 6, 6]} receiveShadow />
              </RigidBody>
              <RigidBody type="fixed" colliders="cuboid">
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-15, 2, -45]} scale={[6, 6, 6]} receiveShadow />
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-15, 2, -36]} scale={[6, 6, 6]} receiveShadow />
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-15, 2, -18]} scale={[6, 6, 6]} receiveShadow />
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-15, 2, 0]} scale={[6, 6, 6]} receiveShadow />
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-15, 2, 18]} scale={[6, 6, 6]} receiveShadow />
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-15, 2, 36]} scale={[6, 6, 6]} receiveShadow />
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-15, 2, 54]} scale={[6, 6, 6]} receiveShadow />
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-15, 2, 72]} scale={[6, 6, 6]} receiveShadow />
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-15, 2, 90]} scale={[6, 6, 6]} receiveShadow />
              </RigidBody>

              <RigidBody type="fixed" colliders="cuboid">                  
                <Fence rotation={[0, 0, 0]} position={[-3,2,75]} scale={[8,6,6]} receiveShadow/>
                </RigidBody>

                <RigidBody type="fixed" colliders="cuboid">                  
                <Fence rotation={[0, 0, 0]} position={[-3,2,-75]} scale={[8,6,6]} receiveShadow/>
                </RigidBody>
                </Physics>

      {/* Enviroments */}
      <Environment map={envMap} background />     

  </>);
};

export default Agricultura;
