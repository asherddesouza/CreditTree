import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useCursor } from "@react-three/drei";
import * as THREE from "three";

export default function InsightBird() {
  const birdRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useCursor(hovered, "pointer");

  useFrame((state, delta) => {
    birdRef.current ? (birdRef.current.rotation.y -= delta * 0.5) : null;
  });

  return (
    <>
      <group
        ref={birdRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <mesh position-z={4}>
          <boxGeometry args={[1, 0.15, 2]} />
          <meshStandardMaterial color="yellow" />
        </mesh>
        <mesh position-x={-1} position-z={4} rotation={[0, 0, Math.PI / 2]}>
          <coneGeometry args={[0.25, 1.2, 32]} />
          <meshStandardMaterial color="red" />
        </mesh>
        <mesh rotation={[0, 0, -Math.PI / 2]} position-z={4} receiveShadow>
          <capsuleGeometry args={[0.5, 1, 32]} />
          <meshStandardMaterial color="yellow" />
        </mesh>
      </group>
    </>
  );
}
