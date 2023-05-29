import {useRef, Suspense, useState} from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Preload } from "@react-three/drei"
import * as random  from "maath/random";


function StarsPointsComponent(props){

    const pointsRef = useRef();
    const [ pointsPositions ] = useState(() => random.inSphere(new Float32Array(5001), { radius: 1.25 })); 

    useFrame((state, delta) => {
        pointsRef.current.rotation.x -= delta / 10;
        pointsRef.current.rotation.y -= delta / 15;
    })

    return(
        <group rotation={[0, 0, Math.PI / 4]} >
            <Points ref={pointsRef}  positions={pointsPositions} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color='#f272c8'
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    )
}

export default function StarsCanvasComponent(){
    return(
        <Canvas camera={{position:[0,0,1]}}>
            <Suspense fallback={null}>
                <StarsPointsComponent />
            </Suspense>
            <Preload all/>
        </Canvas>     
    )
}


