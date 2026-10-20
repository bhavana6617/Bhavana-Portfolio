
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Earth() {
  const earthRef = useRef();
  const { scene } = useGLTF("/planet/scene.gltf");

  useFrame((_, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <primitive
      ref={earthRef}
      object={scene}
      scale={2.5}
      position={[0, -0.2, 0]}
    />
  );
}

useGLTF.preload("/planet/scene.gltf");
