import React, { Suspense } from "react"
import CanvasLoader from "@/components/EstruturaPagina/Loader"
import { Canvas } from "@react-three/fiber"
import { Decal, OrbitControls, Float, Preload, useTexture } from "@react-three/drei"

function StacksBallPrimitiveComponent({images}){
    const [decalMapFront] = useTexture([images.srcFront.src])
    const [decalMapBack] = useTexture([images.srcBack.src])
    const rotationX = 2 * Math.PI 
    return(
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.35}/>
            <directionalLight position={[0,0,0.5]}/>
            <directionalLight position={[0,0,-0.5]}/>
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color='#928e88'
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[rotationX, 0, 6.25]}
                    scale={1}
                    map={decalMapFront}
                    flatShading
                />
                <Decal
                    position={[0, 0, -1]}
                    rotation={[rotationX, 0, 6.25]}
                    scale={1}
                    map={decalMapBack}
                    flatShading
                />
            </mesh>
        </Float>
    )
}

export default function StacksBallCanvasComponent({images}){
    return (
        <Canvas
          style={{width:"150px", height:"150px"}}
          frameloop='demand'
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false} />
            <StacksBallPrimitiveComponent images={images} />
          </Suspense>
    
          <Preload all />
        </Canvas>
      );
}
