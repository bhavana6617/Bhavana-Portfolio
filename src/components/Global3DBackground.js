
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Earth from "./canvas/Earth";
import Stars from "./canvas/Stars";

export const Global3DBackground = () => {
  return (
    <div className="global-3d-background">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[5, 5, 5]} intensity={2} />

        <Stars count={1800} />

        <Suspense fallback={null}>
          <Earth />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
};
