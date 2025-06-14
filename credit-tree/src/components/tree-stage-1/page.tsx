import { CatmullRomLine } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { CatmullRomCurve3, Vector3 } from "three";
import LeafType1 from "../leaf-type-1/page";
import LeafType2 from "../leaf-type-2/page";

export default function TreeStage1() {
  const stalkPath = new CatmullRomCurve3([
    new Vector3(0, 0, 0),
    new Vector3(0.3, 1, 0),
    new Vector3(0, 2, 0.25),
    new Vector3(0, 3, 0),
  ]);
  const roundLeafPath = new CatmullRomCurve3([
    new Vector3(0, 0, -0.7),
    new Vector3(0, 0, 0.7),
  ]);

  return (
    <>
      <group
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <mesh position-y={-4}>
          <tubeGeometry args={[stalkPath, 20, 0.1, 20]} />
          <meshBasicMaterial color="#53713A" />
        </mesh>

        <group position={[0, -2, 1.15]} rotation-z={0.5} rotation-x={Math.PI}>
          <mesh scale-x={0.45} scale-z={0.8}>
            <coneGeometry args={[1, 0.005, 32]} />
            <meshBasicMaterial color="#239C68" />
          </mesh>
          <LeafType2 />
        </group>

        <group position={[0, -1.8, -0.7]} rotation-z={-0.5} rotation-x={-0.2}>
          <mesh scale-x={0.5} scale-z={0.8}>
            <coneGeometry args={[1, 0.005, 32]} />
            <meshBasicMaterial color="#3E9771" />
          </mesh>
          <LeafType2 />
        </group>

        <mesh
          scale-x={2.5}
          scale-y={1.2}
          position={[0, -1, 0]}
          rotation-z={-2}
          rotation-y={1.7}
        >
          <sphereGeometry args={[0.1, 32, 16]} />
          <meshBasicMaterial color="#5C7F3E" />
        </mesh>

        <group position={[0, -1.3, 0.6]} rotation-z={1}>
          <LeafType1 />
        </group>

        <group
          position={[0, -1.2, -0.4]}
          rotation-y={Math.PI}
          rotation-z={-1.5}
        >
          <LeafType1 />
        </group>

        <group position={[0, -0.7, 0.5]} rotation-z={2} rotation-x={-0.5}>
          <LeafType1 />
        </group>
      </group>
    </>
  );
}
