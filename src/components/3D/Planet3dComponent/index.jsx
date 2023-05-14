import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "@/components/EstruturaPagina/Loader";

function PlanetPrimitiveComponent(){
    const planet3DObject = useGLTF("assets/3d/planet/scene.gltf")
    return(
        <primitive object={planet3DObject.scene} scale={2.5} position-y={0} position-x={0}/>
    )
}

export default function PlanetCanvas3DComponent(){
    useEffect(()=>{
        const isCSR = process.browser? "CSR -- Planet3D":"SSR  -- Planet3D"
        console.log(isCSR)        
    },[])

    return(
        <Canvas
            style={{
                width:"400px",
                height:"400px",
                cursor:"grab"
            }}
            shadows
            frameloop="demand"
            dpr={[1,2]}
            gl={{preserveDrawingBuffer: true}}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6]
            }}
        >
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls
                    autoRotate
                    autoRotateSpeed={80}
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <PlanetPrimitiveComponent/>
                <Preload all/>
            </Suspense>
        </Canvas>
    )
}