import { CatmullRomLine } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { CatmullRomCurve3, Vector3 } from "three";

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
          <mesh>
            <tubeGeometry args={[roundLeafPath, 20, 0.02, 20]} />
            <meshBasicMaterial color="#3B701B" />
          </mesh>
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0, 0.55),
                  new Vector3(0.2, 0, 0.35),
                ]),
                20,
                0.02,
                20,
              ]}
            />

            <meshBasicMaterial color="#53713A" />
          </mesh>

          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0, 0.3),
                  new Vector3(0.2, 0, 0.1),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#53713A" />
          </mesh>

          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0, 0.05),
                  new Vector3(0.2, 0, -0.15),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#53713A" />
          </mesh>

          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0, -0.2),
                  new Vector3(0.2, 0, -0.4),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#53713A" />
          </mesh>
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0, -0.45),
                  new Vector3(0.2, 0, -0.65),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#53713A" />
          </mesh>
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0, 0.55),
                  new Vector3(-0.2, 0, 0.35),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#53713A" />
          </mesh>
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0, 0.3),
                  new Vector3(-0.2, 0, 0.1),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#53713A" />
          </mesh>

          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0, 0.05),
                  new Vector3(-0.2, 0, -0.15),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#53713A" />
          </mesh>

          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0, -0.2),
                  new Vector3(-0.2, 0, -0.4),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#53713A" />
          </mesh>

          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0, -0.45),
                  new Vector3(-0.2, 0, -0.65),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#53713A" />
          </mesh>
        </group>

        <group position={[0, -1.8, -0.7]} rotation-z={-0.5} rotation-x={-0.2}>
          <mesh scale-x={0.5} scale-z={0.8}>
            <coneGeometry args={[1, 0.005, 32]} />
            <meshBasicMaterial color="#3E9771" />
          </mesh>
          <mesh>
            <tubeGeometry args={[roundLeafPath, 20, 0.02, 20]} />
            <meshBasicMaterial color="#3B701B" />
          </mesh>
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0, 0.55),
                  new Vector3(0.2, 0, 0.35),
                ]),
                20,
                0.02,
                20,
              ]}
            />

            <meshBasicMaterial color="#53713A" />
          </mesh>

          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0, 0.3),
                  new Vector3(0.2, 0, 0.1),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#53713A" />
          </mesh>

          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0, 0.05),
                  new Vector3(0.2, 0, -0.15),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#53713A" />
          </mesh>

          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0, -0.2),
                  new Vector3(0.2, 0, -0.4),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#53713A" />
          </mesh>
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0, -0.45),
                  new Vector3(0.2, 0, -0.65),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#53713A" />
          </mesh>
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0, 0.55),
                  new Vector3(-0.2, 0, 0.35),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#53713A" />
          </mesh>
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0, 0.3),
                  new Vector3(-0.2, 0, 0.1),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#53713A" />
          </mesh>

          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0, 0.05),
                  new Vector3(-0.2, 0, -0.15),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#53713A" />
          </mesh>

          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0, -0.2),
                  new Vector3(-0.2, 0, -0.4),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#53713A" />
          </mesh>

          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0, -0.45),
                  new Vector3(-0.2, 0, -0.65),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#53713A" />
          </mesh>
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
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0, -0.5),
                  new Vector3(0, 0, 0.25),
                  new Vector3(0, 0, 0.3),
                  new Vector3(-0.2, 0.01, 1.8),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#41572E" />
          </mesh>
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0.01, -0.15),
                  new Vector3(0.2, 0.01, 0.1),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#41572E" />
          </mesh>
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0.01, -0.15),
                  new Vector3(-0.2, 0.01, 0.1),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#41572E" />
          </mesh>
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0.01, 0.2),
                  new Vector3(0.2, 0.01, 0.8),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#41572E" />
          </mesh>
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0.01, 0.2),
                  new Vector3(-0.5, 0.01, 1),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#41572E" />
          </mesh>
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(-0.05, 0.01, 0.7),
                  new Vector3(-0.45, 0.01, 1.65),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#41572E" />
          </mesh>
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(-0.05, 0.01, 0.7),
                  new Vector3(0.2, 0.01, 1.5),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#41572E" />
          </mesh>
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
          position={[0, -1.2, -0.4]}
          rotation-y={Math.PI}
          rotation-z={-1.5}
        >
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0, -0.5),
                  new Vector3(0, 0, 0.25),
                  new Vector3(0, 0, 0.3),
                  new Vector3(-0.2, 0.01, 1.8),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#41572E" />
          </mesh>
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0.01, -0.15),
                  new Vector3(0.2, 0.01, 0.1),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#41572E" />
          </mesh>
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0.01, -0.15),
                  new Vector3(-0.2, 0.01, 0.1),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#41572E" />
          </mesh>
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0.01, 0.2),
                  new Vector3(0.2, 0.01, 0.8),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#41572E" />
          </mesh>
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0.01, 0.2),
                  new Vector3(-0.5, 0.01, 1),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#41572E" />
          </mesh>
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(-0.05, 0.01, 0.7),
                  new Vector3(-0.45, 0.01, 1.65),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#41572E" />
          </mesh>
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(-0.05, 0.01, 0.7),
                  new Vector3(0.2, 0.01, 1.5),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#41572E" />
          </mesh>
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

        <group position={[0, -0.7, 0.5]} rotation-z={2} rotation-x={-0.5}>
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0, -0.5),
                  new Vector3(0, 0, 0.25),
                  new Vector3(0, 0, 0.3),
                  new Vector3(-0.2, 0.01, 1.8),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#41572E" />
          </mesh>
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0.01, -0.15),
                  new Vector3(0.2, 0.01, 0.1),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#41572E" />
          </mesh>
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0.01, -0.15),
                  new Vector3(-0.2, 0.01, 0.1),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#41572E" />
          </mesh>
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0.01, 0.2),
                  new Vector3(0.2, 0.01, 0.8),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#41572E" />
          </mesh>
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0.01, 0.2),
                  new Vector3(-0.5, 0.01, 1),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#41572E" />
          </mesh>
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(-0.05, 0.01, 0.7),
                  new Vector3(-0.45, 0.01, 1.65),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#41572E" />
          </mesh>
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(-0.05, 0.01, 0.7),
                  new Vector3(0.2, 0.01, 1.5),
                ]),
                20,
                0.02,
                20,
              ]}
            />
            <meshBasicMaterial color="#41572E" />
          </mesh>
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
