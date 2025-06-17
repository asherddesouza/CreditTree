import { CatmullRomCurve3, Vector3 } from "three";

export default function TreeStage3() {
  return (
    <>
      <group
        onClick={(event) => {
          event.stopPropagation();
        }}
        position-y={-4}
      >
        <group>
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0, 0),
                  new Vector3(0, 4.5, 0),
                  new Vector3(0, 10, 0.5),
                ]),
                20,
                0.3,
                20,
              ]}
            />
            <meshBasicMaterial color="#6F4E2B" />
          </mesh>

          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 3, 0),
                  new Vector3(0, 4, 1),
                  new Vector3(0, 5, 3),
                ]),
                20,
                0.3,
                20,
              ]}
            />
            <meshBasicMaterial color="#6F4E2B" />
          </mesh>

          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 4, 0),
                  new Vector3(0, 5, -1),
                  new Vector3(1, 6, -3),
                ]),
                20,
                0.3,
                20,
              ]}
            />
            <meshBasicMaterial color="#6F4E2B" />
          </mesh>

          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 5, 0),
                  new Vector3(2, 6, 1),
                  new Vector3(3, 7, 2),
                ]),
                20,
                0.3,
                20,
              ]}
            />
            <meshBasicMaterial color="#6F4E2B" />
          </mesh>

          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 6, 0),
                  new Vector3(2, 7, -1),
                  new Vector3(3, 8, -2),
                ]),
                20,
                0.3,
                20,
              ]}
            />
            <meshBasicMaterial color="#6F4E2B" />
          </mesh>
          <mesh position-y={7}>
            <sphereGeometry args={[0.3, 32, 16]} />
            <meshBasicMaterial color="#6F4E2B" />
          </mesh>

          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 6, 0),
                  new Vector3(-2, 7, -1),
                  new Vector3(-3, 8, -3),
                ]),
                20,
                0.3,
                20,
              ]}
            />
            <meshBasicMaterial color="#6F4E2B" />
          </mesh>

          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 7, 0),
                  new Vector3(-2, 8, 2),
                  new Vector3(-3, 9, 3),
                ]),
                20,
                0.3,
                20,
              ]}
            />
            <meshBasicMaterial color="#6F4E2B" />
          </mesh>

          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 4, 0),
                  new Vector3(-4, 6, 0),
                ]),
                20,
                0.3,
                20,
              ]}
            />
            <meshBasicMaterial color="#6F4E2B" />
          </mesh>
        </group>

        <group position={[-3, 8.5, 2.5]} scale={2}>
          <mesh>
            <sphereGeometry args={[1, 32, 16]} />
            <meshBasicMaterial color="#578742" />
          </mesh>
        </group>

        <group position={[-3, 8, -3]} scale={2.2}>
          <mesh>
            <sphereGeometry args={[1, 32, 16]} />
            <meshBasicMaterial color="#71A15C" />
          </mesh>
        </group>

        <group position={[3, 7, 2]} scale={2}>
          <mesh>
            <sphereGeometry args={[1, 32, 16]} />
            <meshBasicMaterial color="#71A15C" />
          </mesh>
        </group>

        <group position={[-4, 6, 0]} scale={2}>
          <mesh>
            <sphereGeometry args={[1, 32, 16]} />
            <meshBasicMaterial color="#71A15C" />
          </mesh>
        </group>

        <group position={[3, 8, -2]} scale={2}>
          <mesh>
            <sphereGeometry args={[1, 32, 16]} />
            <meshBasicMaterial color="#71A15C" />
          </mesh>
        </group>

        <group position={[1, 6, -3]} scale={2}>
          <mesh>
            <sphereGeometry args={[1, 32, 16]} />
            <meshBasicMaterial color="#578742" />
          </mesh>
        </group>

        <group position={[0, 5, 3]} scale={2}>
          <mesh>
            <sphereGeometry args={[1, 32, 16]} />
            <meshBasicMaterial color="#578742" />
          </mesh>
        </group>

        <group position={[0, 10, 0.5]} scale={2.5}>
          <mesh>
            <sphereGeometry args={[1, 32, 16]} />
            <meshBasicMaterial color="#578742" />
          </mesh>
        </group>
      </group>
    </>
  );
}
