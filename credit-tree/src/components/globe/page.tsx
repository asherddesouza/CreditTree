import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Globe() {
  const colorMap = useLoader(TextureLoader, "./textures/ground.png");

  return (
    <>
      <mesh position-y={-14} scale={10} rotation={[0, 0, 0]}>
        <sphereGeometry />
        <meshStandardMaterial color="white" map={colorMap} />
      </mesh>
    </>
  );
}
