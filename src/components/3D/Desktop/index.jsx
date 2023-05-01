import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

const DesktopOBJ = ({isMobile}) => {
  const creditCard = useGLTF('assets/3d/desktop_pc/scene.gltf');

  return (
    <primitive
      object={creditCard.scene}
      scale={isMobile ? 0.7 : 0.8}
      position={isMobile ? [0, -3, -3.2] : [2.5, -2.25, -2.5]}
      rotation={[0, -1.5, 0]}
    />
  );
};

useGLTF.preload('assets/3d/desktop_pc/scene.gltf');

const Desktop = () => {
  return (
    <Canvas style={{maxHeight:"400px", maxWidth:"400px",minHeight:"140px",minWidth:"280px",height:"100%"}}>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.8} />
        <spotLight position={[-20, 50, 0]} intensity={0.5} penumbra={1} />
        <DesktopOBJ />
      </Suspense>
    </Canvas>
  );
};

export default Desktop;