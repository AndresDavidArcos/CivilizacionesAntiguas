import { CameraControls, Environment, Float, Html, PerspectiveCamera, Text3D, useEnvironment, useTexture} from "@react-three/drei";
import { angleToRadians } from "../utils/angle";
import { useEffect, useRef } from "react";
import AztecPyramid from "./AztecPyramid";
import * as dat from 'dat.gui'
import { StoneGate } from "./StoneGate";
import gsap from "gsap";

export default function SelectionMenu(){
  // Animation
  const floor= useRef(null)
  const camera = useRef(null)
  useEffect(() => {
      if (camera.current) {
        // Timeline
        const timeline = gsap.timeline({ paused: true });

        // x-axis motion
        timeline.to(camera.current.position, {
            y: 15,
            duration: 6,
            ease: "power3.inOut"
        });

        // Play
        timeline.play(); 
      }
  }, [floor.current])

    const tPathI = '../../imagenes/'
    const painting = useTexture({
      map: tPathI+"agricultura.jpg",
      map1: tPathI+"guerreros-aztecas-ataviados-con-sus-armas-y-vestimenta-tipicas_df905ca0_1280x720.jpg",
      map2: tPathI+"plaza-scaled.jpg"
    })
    const envMap = useEnvironment({files: "../../ambientes/industrial_sunset_puresky_1k.hdr"})

    const tPathP = '../../texturas/pyramid/';
    const pyramidTextures = useTexture({
      map: tPathP+'broken_wall_diff_1k.jpg',
      aoMap: tPathP+'broken_wall_ao_1k.jpg',
      displacementMap: tPathP+'broken_wall_disp_1k.png',
      normalMap: tPathP+"broken_wall_nor_gl_1k.png",
      roughnessMap: tPathP+"broken_wall_rough_1k.png",
    })
    return (
        <>
          {/* Camera */}
          <PerspectiveCamera ref={camera} makeDefault position={[-20, 4, 0]} />
          <CameraControls  minPolarAngle={angleToRadians(60)} maxPolarAngle={angleToRadians(80)} />    

          {/* light */}
          <ambientLight args={["#ffffff", 0.25]}/>

          {/* Enviroments */}
          <Environment map={envMap} background/>

          {/* Models */}
          <group>
          <AztecPyramid rotation={[0,-3.1,0]}/>
          <StoneGate position={[0,7,4]} map={painting.map}/>
          <StoneGate position={[0,7,-4]} map={painting.map1}/>
          <StoneGate position={[4,7,0]} rotation={[0,angleToRadians(90),0]} map={painting.map2}/>

          </group>

            {/* Floor */}
            <mesh ref={floor} rotation={[-(angleToRadians(90)), 0, 0]} position={[0,1,0]} receiveShadow>
                    <planeGeometry args={[40, 40]}/>
                    <meshStandardMaterial {...pyramidTextures}/>
            </mesh>          
        </>
    )
}
