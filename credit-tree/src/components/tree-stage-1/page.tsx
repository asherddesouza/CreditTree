import { CatmullRomLine } from "@react-three/drei";

export default function TreeStage1() {
  return (
    <>
      <group
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <mesh position-y={-4}>
          <CatmullRomLine
            points={[
              [0, 0, 0],
              [0.3, 1, 0],
              [0, 2, 0.25],
              [0, 3, 0],
            ]}
            color="#53713A"
            lineWidth={10}
          />
          <meshStandardMaterial color="#632e12" />
        </mesh>
        <mesh scale-x={0.5} position={[0, -2, 1.3]} rotation-z={0.5}>
          <coneGeometry args={[1, 0.005, 32]} />
          <meshStandardMaterial color="#53713A" />
        </mesh>
        <mesh scale-x={0.5} position={[0, -1.7, -0.85]} rotation-z={-0.5}>
          <coneGeometry args={[1, 0.005, 32]} />
          <meshStandardMaterial color="#53713A" />
        </mesh>
        <mesh scale-y={1.5} position={[0, -1, 0]} rotation-z={-0.2}>
          <sphereGeometry args={[0.08, 32, 16]} />
          <meshBasicMaterial color="#5E8340" />
        </mesh>
      </group>
    </>
  );
}
