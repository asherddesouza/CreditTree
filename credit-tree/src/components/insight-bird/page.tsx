import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useCursor, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

export default function InsightBird() {
  const birdRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  // todo
  // create a prop to be passed to the component to control the type of bird that's rendered
  // based on this, change the colour and have different hairs for each bird type

  useCursor(hovered, "pointer");

  // useFrame((state, delta) => {
  //   birdRef.current ? (birdRef.current.rotation.y -= delta * 0.5) : null;
  // });

  return (
    <>
      <group
        ref={birdRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <group>
          <mesh rotation={[0, Math.PI / 2, 0]} position-x={0.5} receiveShadow>
            <sphereGeometry args={[0.5, 32, 32, 0, Math.PI]} />
            <meshNormalMaterial />
            <meshStandardMaterial color="maroon" />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.3, 0.5, 1, 32]} />
            <meshNormalMaterial />
            <meshStandardMaterial color="maroon" />
          </mesh>
          <mesh rotation={[0, -Math.PI / 2, 0]} position-x={-0.5} receiveShadow>
            <sphereGeometry args={[0.3, 32, 32, 0, Math.PI]} />
            <meshNormalMaterial />
            <meshStandardMaterial color="maroon" />
          </mesh>
          <RoundedBox
            args={[0.5, 0.1, 0.3]}
            position-x={-0.8}
            position-y={0.1}
            rotation={[0, 0, -7]}
            radius={0.02}
            smoothness={4}
          >
            <meshNormalMaterial />
            <meshStandardMaterial color="maroon" />
          </RoundedBox>
        </group>

        <RoundedBox args={[1, 0.1, 2]}>
          <meshNormalMaterial />
          <meshStandardMaterial color="maroon" />
        </RoundedBox>

        <group position-x={1}>
          <RoundedBox
            position-y={0.05}
            args={[0.7, 0.05, 0.3]}
            radius={0.02}
            smoothness={4}
          >
            <meshStandardMaterial color="red" />
          </RoundedBox>

          <RoundedBox
            rotation-z={50}
            args={[0.7, 0.05, 0.3]}
            radius={0.02}
            smoothness={4}
          >
            <meshStandardMaterial color="red" />
          </RoundedBox>
        </group>

        <group position-x={0.87} position-y={0.2}>
          <mesh position-z={0.2}>
            <sphereGeometry args={[0.1]} />
            <meshStandardMaterial color="white" />
          </mesh>
          <mesh position-z={-0.2}>
            <sphereGeometry args={[0.1]} />
            <meshStandardMaterial color="white" />
          </mesh>
          <mesh position-z={0.2} position-x={0.06}>
            <sphereGeometry args={[0.05]} />
            <meshStandardMaterial color="black" />
          </mesh>
          <mesh position-z={-0.2} position-x={0.06}>
            <sphereGeometry args={[0.05]} />
            <meshStandardMaterial color="black" />
          </mesh>
        </group>
      </group>
    </>
  );
}
