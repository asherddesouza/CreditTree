import { CatmullRomLine } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MaxEquation } from "three";

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
            lineWidth={7}
          />
          <meshStandardMaterial color="#632e12" />
        </mesh>
        <group
          scale-x={0.5}
          position={[0, -2, 1.27]}
          rotation-z={0.5}
          rotation-x={Math.PI}
        >
          <mesh>
            <coneGeometry args={[1, 0.005, 32]} />
            <meshStandardMaterial color="#53713A" />
          </mesh>
          <CatmullRomLine
            points={[
              [0, 0, -0.8],
              [0, 0, 0.8],
            ]}
            color="#3B701B"
            lineWidth={3}
          />
          <CatmullRomLine
            points={[
              [0, 0, 0.7],
              [0.6, 0, 0.5],
            ]}
            color="#3B701B"
            lineWidth={3}
          />
          <CatmullRomLine
            points={[
              [0, 0, 0.4],
              [0.6, 0, 0.2],
            ]}
            color="#3B701B"
            lineWidth={3}
          />
          <CatmullRomLine
            points={[
              [0, 0, 0.1],
              [0.6, 0, -0.1],
            ]}
            color="#3B701B"
            lineWidth={3}
          />
          <CatmullRomLine
            points={[
              [0, 0, -0.2],
              [0.6, 0, -0.4],
            ]}
            color="#3B701B"
            lineWidth={3}
          />
          <CatmullRomLine
            points={[
              [0, 0, 0.7],
              [-0.6, 0, 0.5],
            ]}
            color="#3B701B"
            lineWidth={3}
          />

          <CatmullRomLine
            points={[
              [0, 0, 0.4],
              [-0.6, 0, 0.2],
            ]}
            color="#3B701B"
            lineWidth={3}
          />
          <CatmullRomLine
            points={[
              [0, 0, 0.1],
              [-0.6, 0, -0.1],
            ]}
            color="#3B701B"
            lineWidth={3}
          />
          <CatmullRomLine
            points={[
              [0, 0, -0.2],
              [-0.6, 0, -0.4],
            ]}
            color="#3B701B"
            lineWidth={3}
          />
        </group>

        <group
          scale-x={0.5}
          position={[0, -1.8, -0.83]}
          rotation-z={-0.5}
          rotation-x={-0.2}
        >
          <mesh>
            <coneGeometry args={[1, 0.005, 32]} />
            <meshStandardMaterial color="#53713A" />
          </mesh>
          <CatmullRomLine
            points={[
              [0, 0, -0.8],
              [0, 0, 0.8],
            ]}
            color="#3B701B"
            lineWidth={3}
          />
          <CatmullRomLine
            points={[
              [0, 0, 0.7],
              [0.6, 0, 0.5],
            ]}
            color="#3B701B"
            lineWidth={3}
          />
          <CatmullRomLine
            points={[
              [0, 0, 0.4],
              [0.6, 0, 0.2],
            ]}
            color="#3B701B"
            lineWidth={3}
          />
          <CatmullRomLine
            points={[
              [0, 0, 0.1],
              [0.6, 0, -0.1],
            ]}
            color="#3B701B"
            lineWidth={3}
          />
          <CatmullRomLine
            points={[
              [0, 0, -0.2],
              [0.6, 0, -0.4],
            ]}
            color="#3B701B"
            lineWidth={3}
          />
          <CatmullRomLine
            points={[
              [0, 0, 0.7],
              [-0.6, 0, 0.5],
            ]}
            color="#3B701B"
            lineWidth={3}
          />

          <CatmullRomLine
            points={[
              [0, 0, 0.4],
              [-0.6, 0, 0.2],
            ]}
            color="#3B701B"
            lineWidth={3}
          />
          <CatmullRomLine
            points={[
              [0, 0, 0.1],
              [-0.6, 0, -0.1],
            ]}
            color="#3B701B"
            lineWidth={3}
          />
          <CatmullRomLine
            points={[
              [0, 0, -0.2],
              [-0.6, 0, -0.4],
            ]}
            color="#3B701B"
            lineWidth={3}
          />
        </group>

        <mesh
          scale-x={2}
          position={[0, -1, -0.05]}
          rotation-z={-2}
          rotation-y={1.7}
        >
          <sphereGeometry args={[0.1, 32, 16]} />
          <meshBasicMaterial color="#5E8340" />
        </mesh>

        <group position={[0, -1.3, 0.6]} rotation-z={1}>
          <CatmullRomLine
            points={[
              [0, 0, -0.5],

              [0, 0, 0.25],
              [0, 0, 0.3],
              [-0.2, 0.01, 1.8],
            ]}
            color="#53713A"
            lineWidth={7}
          />
          <CatmullRomLine
            points={[
              [0, 0.01, -0.15],
              [0.2, 0.01, 0.1],
            ]}
            color="#53713A"
            lineWidth={5}
          />
          <CatmullRomLine
            points={[
              [0, 0.01, -0.15],
              [-0.2, 0.01, 0.1],
            ]}
            color="#53713A"
            lineWidth={5}
          />
          <CatmullRomLine
            points={[
              [0, 0.01, 0.2],
              [0.2, 0.01, 0.8],
            ]}
            color="#53713A"
            lineWidth={5}
          />
          <CatmullRomLine
            points={[
              [0, 0.01, 0.2],
              [-0.5, 0.01, 1],
            ]}
            color="#53713A"
            lineWidth={5}
          />
          <CatmullRomLine
            points={[
              [-0.05, 0.01, 0.7],
              [-0.45, 0.01, 1.65],
            ]}
            color="#53713A"
            lineWidth={5}
          />
          <CatmullRomLine
            points={[
              [-0.05, 0.01, 0.7],
              [0.2, 0.01, 1.5],
            ]}
            color="#53713A"
            lineWidth={5}
          />
          <mesh
            position={[-0.1, 0, 0]}
            scale-z={0.9}
            scale-x={0.6}
            rotation-y={-0.5}
          >
            <coneGeometry args={[0.3, 0.01, 32]} />
            <meshStandardMaterial color="#41572E" />
          </mesh>
          <mesh
            position={[0.1, 0, 0]}
            scale-z={0.9}
            scale-x={0.6}
            rotation-y={0.5}
          >
            <coneGeometry args={[0.3, 0.01, 32]} />
            <meshStandardMaterial color="#41572E" />
          </mesh>
          <mesh
            position={[0.1, 0, 0.5]}
            scale-z={1.5}
            scale-x={0.6}
            rotation-y={0.2}
          >
            <coneGeometry args={[0.3, 0.01, 32]} />
            <meshStandardMaterial color="#41572E" />
          </mesh>
          <mesh
            position={[-0.1, 0, 1]}
            scale-z={3}
            scale-x={0.7}
            rotation-y={-0.1}
          >
            <coneGeometry args={[0.3, 0.01, 32]} />
            <meshStandardMaterial color="#41572E" />
          </mesh>
          <mesh
            position={[0.1, 0, 1.2]}
            scale-z={1.5}
            scale-x={0.6}
            rotation-y={0.2}
          >
            <coneGeometry args={[0.3, 0.01, 32]} />
            <meshStandardMaterial color="#41572E" />
          </mesh>
          <mesh
            position={[-0.2, 0, 1.2]}
            scale-z={2}
            scale-x={0.7}
            rotation-y={-0.5}
          >
            <coneGeometry args={[0.3, 0.01, 32]} />
            <meshStandardMaterial color="#41572E" />
          </mesh>
          <mesh
            position={[-0.3, 0, 0.7]}
            scale-z={1.8}
            scale-x={0.6}
            rotation-y={-0.6}
          >
            <coneGeometry args={[0.3, 0.01, 32]} />
            <meshStandardMaterial color="#41572E" />
          </mesh>
        </group>

        <group
          position={[0, -1.1, -0.6]}
          rotation-y={Math.PI}
          rotation-z={-1.5}
        >
          <CatmullRomLine
            points={[
              [0, 0, -0.5],

              [0, 0, 0.25],
              [0, 0, 0.3],
              [-0.2, 0.01, 1.8],
            ]}
            color="#53713A"
            lineWidth={7}
          />
          <CatmullRomLine
            points={[
              [0, 0.01, -0.15],
              [0.2, 0.01, 0.1],
            ]}
            color="#53713A"
            lineWidth={5}
          />
          <CatmullRomLine
            points={[
              [0, 0.01, -0.15],
              [-0.2, 0.01, 0.1],
            ]}
            color="#53713A"
            lineWidth={5}
          />
          <CatmullRomLine
            points={[
              [0, 0.01, 0.2],
              [0.2, 0.01, 0.8],
            ]}
            color="#53713A"
            lineWidth={5}
          />
          <CatmullRomLine
            points={[
              [0, 0.01, 0.2],
              [-0.5, 0.01, 1],
            ]}
            color="#53713A"
            lineWidth={5}
          />
          <CatmullRomLine
            points={[
              [-0.05, 0.01, 0.7],
              [-0.45, 0.01, 1.65],
            ]}
            color="#53713A"
            lineWidth={5}
          />
          <CatmullRomLine
            points={[
              [-0.05, 0.01, 0.7],
              [0.2, 0.01, 1.5],
            ]}
            color="#53713A"
            lineWidth={5}
          />
          <mesh
            position={[-0.1, 0, 0]}
            scale-z={0.9}
            scale-x={0.6}
            rotation-y={-0.5}
          >
            <coneGeometry args={[0.3, 0.01, 32]} />
            <meshStandardMaterial color="#41572E" />
          </mesh>
          <mesh
            position={[0.1, 0, 0]}
            scale-z={0.9}
            scale-x={0.6}
            rotation-y={0.5}
          >
            <coneGeometry args={[0.3, 0.01, 32]} />
            <meshStandardMaterial color="#41572E" />
          </mesh>
          <mesh
            position={[0.1, 0, 0.5]}
            scale-z={1.5}
            scale-x={0.6}
            rotation-y={0.2}
          >
            <coneGeometry args={[0.3, 0.01, 32]} />
            <meshStandardMaterial color="#41572E" />
          </mesh>
          <mesh
            position={[-0.1, 0, 1]}
            scale-z={3}
            scale-x={0.7}
            rotation-y={-0.1}
          >
            <coneGeometry args={[0.3, 0.01, 32]} />
            <meshStandardMaterial color="#41572E" />
          </mesh>
          <mesh
            position={[0.1, 0, 1.2]}
            scale-z={1.5}
            scale-x={0.6}
            rotation-y={0.2}
          >
            <coneGeometry args={[0.3, 0.01, 32]} />
            <meshStandardMaterial color="#41572E" />
          </mesh>
          <mesh
            position={[-0.2, 0, 1.2]}
            scale-z={2}
            scale-x={0.7}
            rotation-y={-0.5}
          >
            <coneGeometry args={[0.3, 0.01, 32]} />
            <meshStandardMaterial color="#41572E" />
          </mesh>
          <mesh
            position={[-0.3, 0, 0.7]}
            scale-z={1.8}
            scale-x={0.6}
            rotation-y={-0.6}
          >
            <coneGeometry args={[0.3, 0.01, 32]} />
            <meshStandardMaterial color="#41572E" />
          </mesh>
        </group>
      </group>
    </>
  );
}
