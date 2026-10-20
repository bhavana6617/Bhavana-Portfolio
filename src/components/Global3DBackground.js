
import { Canvas } from "@react-three/fiber";
import Stars from "./canvas/Stars";

export const Global3DBackground = () => {
  return (
    <div className="global-3d-background">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <Stars count={1800} />
      </Canvas>
    </div>
  );
};
