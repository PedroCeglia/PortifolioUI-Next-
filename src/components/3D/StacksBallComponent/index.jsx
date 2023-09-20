import React, { Suspense } from "react"
import CanvasLoader from "@/components/EstruturaPagina/Loader"
import { Canvas } from "@react-three/fiber"
import { Decal, OrbitControls, Float, Preload, useTexture } from "@react-three/drei"

export default function StacksBallCanvasComponent({images}){
    return (
        <Canvas
          frameloop='demand'
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={100}/>
            <StacksBallFloatComponent images={images} />
          </Suspense>
    
          <Preload all />
        </Canvas>
      );
}

export function StacksBallFloatComponent({images}){
    return(
        <Float            
            style={{width:"150px", height:"150px", cursor:"grab"}}
            speed={1}
            rotationIntensity={1} 
            floatIntensity={2}
        >
            <ambientLight intensity={0.35}/>
            <directionalLight position={[0,0,-0.5]}/>

            <StacksBallMeshComponent images={images} />
        </Float>
    )
}

function StacksBallMeshComponent({images}){
    const [decalMapFront] = useTexture([images.srcFront.src])
    const [decalMapBack] = useTexture([images.srcBack.src])
    const rotationX = 2 * Math.PI 
    const randomPositionRotateX = Math.random()
    return(
        <mesh rotateX={randomPositionRotateX} castShadow receiveShadow scale={2.75}>
            <icosahedronGeometry args={[1, 1]} />
            <meshStandardMaterial
                color='#eeebe6'
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
    )
}

