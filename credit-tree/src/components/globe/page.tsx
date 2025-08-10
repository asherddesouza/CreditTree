import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader, Mesh } from "three";

export default function Globe({
  meshRef,
}: {
  meshRef?: React.RefObject<Mesh>;
}) {
  const colorMap = useLoader(TextureLoader, "./textures/ground.png");

  return (
    <>
      <mesh
        ref={meshRef}
        position-y={-30}
        scale={26}
        rotation={[0, 0, 0]}
        name="globe"
      >
        <sphereGeometry />
        <meshStandardMaterial
          color="#CECECE"
          map={colorMap}
          wireframe={false}
          roughness={9}
        />
      </mesh>
    </>
  );
}
