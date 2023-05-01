import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

const CreditCard = () => {
  const creditCard = useGLTF('assets/3d/credit_card_white/scene.gltf');

  return (
    <primitive
      object={creditCard.scene}
      scale={1.5}
      position={[0, -2, 0]}
      rotation={[0, 2.8, 0]}
    />
  );
};

useGLTF.preload('assets/3d/credit_card_white/scene.gltf');

const CreditCardComponent = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} enableDamping={false}/>
        <ambientLight intensity={0.8} />
        <spotLight position={[-3, 2, 1]} intensity={0.5} penumbra={1} />
        <CreditCard />
      </Suspense>
    </Canvas>
  );
};

export default CreditCardComponent;