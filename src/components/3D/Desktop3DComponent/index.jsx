import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "@/components/EstruturaPagina/Loader";

const ComputerMeshPrimitive = ({ isLess560px }) => {
  const computer = useGLTF("assets/3d/desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isLess560px ? .6 : .8}
        position={[0, -1.15, -1]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const Desktop3DCanvasComponent = () => {

  const [isLess560px, setIsLess560px] = useState(false);
  useEffect(() => {
    createListenerToWidth("560px")
  }, []);
  function createListenerToWidth(maxWidthValue){
      // Add a listener for changes to the screen size
      const mediaQuery = window.matchMedia(`(max-width: ${maxWidthValue})`);

      // Set the initial value of the `isMobile` state variable
      setIsLess560px(verifyIfIsLessThan560px(mediaQuery));

      // Add the callback function as a listener for changes to the media query
      mediaQuery.addEventListener("change", handleMediaQueryChange);

      // Remove the listener when the component is unmounted
      return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      };
  }
  const verifyIfIsLessThan560px = (mediaQuery)=>{
    return mediaQuery.matches
  }
  const handleMediaQueryChange = (event) => {
    setIsLess560px(verifyIfIsLessThan560px(event));
  };

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{
        maxWidth:"600px", width:"100%", minWidth:"250px",
        minHeight:"380px", height:"380px",
        display:"flex", justifyContent:"center", alingItems:"center",
        cursor:"grab"
      }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={10}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ComputerMeshPrimitive isLess560px={isLess560px}/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default Desktop3DCanvasComponent