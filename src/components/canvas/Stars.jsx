
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";


export default function Stars({ count = 1800 }) {
  const pointsRef = useRef();

  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      values[i * 3] = (Math.random() - 0.5) * 30;
      values[i * 3 + 1] = (Math.random() - 0.5) * 20;
      values[i * 3 + 2] = (Math.random() - 0.5) * 15 - 5;
    }

    return values;
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.008;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#d8c9ff"
        size={0.035}
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
