import {Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/island';

const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale= null;
    let screenPosition = [0,-6.5,-43];
    let rotation = [0.1,4.7,0]
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      // screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition, rotation  ];
  };

  // const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();


  return (
    <section className ="w-full h-screen relativee">
      <Canvas className="w-full h-screen relative"
      camera = {{ near : 0.1, far:1000 }}
      >
        <Suspense fallback={<Loader />}> 
            <directionalLight />
            <ambientLight />
            <pointLight />
            <spotLight />
            <hemisphereLight />

            <Island 
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation} />
        </Suspense>


      </Canvas>
    </section>
  )
}

export default Home