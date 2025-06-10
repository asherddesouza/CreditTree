import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Globe() {
  const colorMap = useLoader(TextureLoader, "./textures/ground.png");

  return (
    <>
      <mesh position-y={-30} scale={26} rotation={[0, 0, 0]}>
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
