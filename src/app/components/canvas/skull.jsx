import { Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls,Preload, useGLTF } from "@react-three/drei";
import Loader from "../Loader";

import React from 'react'

const Skull = () => {

    const skull = useGLTF("./skull/scene.gltf")
  return (  

    <mesh>
         <hemisphereLight intensity={0.75} groundColor='black' />
      <spotLight
        position={[20, 35, 5]}
        angle={0.20}
        penumbra={1}
        intensity={0.5}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />


    <primitive
        object={skull.scene}
        scale={2}
        position={[0, -4, 0]}
        rotation-y={0}
        
        
    />

    </mesh>
    )
}

const SlullCanvas =()=>{

    return(
        <Canvas
        frameloop='demand'
        shadows
        dpr={[1, 2]}
        camera={{ fov:45, near:0.1, position: [25, 3, 5], fov:30 }}
        gl={{ preserveDrawingBuffer: true }}
             
        >
            <Suspense fallback={<Loader/>}>
            <OrbitControls 
                autoRotate
                enableZoom={false}
                maxPolarAngle={Math.PI/2}
                minPolarAngle={Math.PI/2}  
            />
            <Skull/>
            <Preload all/>
            </Suspense>
        </Canvas>
    )
}

export default SlullCanvas

