import { CameraControls, Environment, PerspectiveCamera, useEnvironment, useTexture } from '@react-three/drei';
import React from 'react';
import { angleToRadians } from '../utils/angle';
import Fence from './Fence';
import Boat from './Boat';

const Agricultura = () => {
  const envMap = useEnvironment({ files: "../../ambientes/industrial_sunset_puresky_1k.hdr" })

  return (<>
            {/* Camera */}
          <PerspectiveCamera makeDefault position={[-10, 5, 0]} />
          <CameraControls/>
          <ambientLight args={["#ffffff", 0.25]}/>

            {/* floor */}
            <mesh rotation={[-(angleToRadians(90)), 0, 0]} receiveShadow>
                    <planeGeometry args={[120, 180]} />
                    <meshStandardMaterial color="#54B5CA"  metalness={1} roughness={0.1}/>
                </mesh>

            {/* Floatin Crop */}
                <mesh rotation={[-(angleToRadians(90)), 0, 0]} position={[-30,1,0]} receiveShadow>
                    <boxGeometry args={[30, 160]} />
                    <meshStandardMaterial color="#C19A6B" />
                </mesh>

                <mesh rotation={[-(angleToRadians(90)), 0, 0]} position={[30,1,0]} receiveShadow>
                    <boxGeometry args={[30, 160]} />
                    <meshStandardMaterial color="#C19A6B" />
                </mesh> 

                {/* Boat */}
                <Boat position={[0,1,0]} scale={[9,9,9]}/>
                  {/*Left crops fences  */}
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-44,2,-45]} scale={[6,6,6]} receiveShadow/>
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-44,2,-36]} scale={[6,6,6]} receiveShadow/>
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-44,2,-18]} scale={[6,6,6]} receiveShadow/>
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-44,2,0]} scale={[6,6,6]} receiveShadow/>
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-44,2,18]} scale={[6,6,6]} receiveShadow/>
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-44,2,36]} scale={[6,6,6]} receiveShadow/>
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-44,2,54]} scale={[6,6,6]} receiveShadow/>
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-44,2,72]} scale={[6,6,6]} receiveShadow/>
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-44,2,90]} scale={[6,6,6]} receiveShadow/>

                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-15,2,-45]} scale={[6,6,6]} receiveShadow/>
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-15,2,-36]} scale={[6,6,6]} receiveShadow/>
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-15,2,-18]} scale={[6,6,6]} receiveShadow/>
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-15,2,0]} scale={[6,6,6]} receiveShadow/>
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-15,2,18]} scale={[6,6,6]} receiveShadow/>
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-15,2,36]} scale={[6,6,6]} receiveShadow/>
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-15,2,54]} scale={[6,6,6]} receiveShadow/>
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-15,2,72]} scale={[6,6,6]} receiveShadow/>
                <Fence rotation={[0, (angleToRadians(90)), 0]} position={[-15,2,90]} scale={[6,6,6]} receiveShadow/>

                <Fence rotation={[0, 0, 0]} position={[-62,2,75]} scale={[8,6,6]} receiveShadow/>
                <Fence rotation={[0, 0, 0]} position={[-62,2,-75]} scale={[8,6,6]} receiveShadow/>

                {/*Right crops fences  */}

      {/* Enviroments */}
      <Environment map={envMap} background />                             
  </>);
};

export default Agricultura;
