import { CatmullRomCurve3, Vector3 } from "three";

export default function TreeStage5() {
  return (
    <>
      <group
        onClick={(event) => {
          event.stopPropagation();
        }}
        position-y={-4}
      >
        <group>
          <group>
            <mesh>
              <cylinderGeometry args={[5, 6, 60]} />
              <meshBasicMaterial color="#6F4E2B" />
            </mesh>
            <mesh>
              <cylinderGeometry args={[2, 10, 15]} />
              <meshBasicMaterial color="#6F4E2B" />
            </mesh>
          </group>

          <group position-y={30}>
            <mesh>
              <tubeGeometry
                args={[
                  new CatmullRomCurve3([
                    new Vector3(0, 10, -30),
                    new Vector3(0, 6, -25),
                    new Vector3(0, 3, -20),
                    new Vector3(0, 2, -14),
                    new Vector3(0, 1, 0),
                    new Vector3(0, 2, 14),
                    new Vector3(0, 3, 20),
                    new Vector3(0, 6, 25),
                    new Vector3(0, 10, 30),
                  ]),
                  20,
                  2.5,
                  20,
                ]}
              />
              <meshBasicMaterial color="#6F4E2B" />
            </mesh>
            <mesh>
              <tubeGeometry
                args={[
                  new CatmullRomCurve3([
                    new Vector3(-30, 10, 0),
                    new Vector3(-25, 6, 0),
                    new Vector3(-20, 3, 0),
                    new Vector3(-14, 2, 0),
                    new Vector3(0, 1, 0),
                    new Vector3(14, 2, 0),
                    new Vector3(20, 3, 0),
                    new Vector3(25, 6, 0),
                    new Vector3(30, 10, 0),
                  ]),
                  20,
                  2.5,
                  20,
                ]}
              />
              <meshBasicMaterial color="#6F4E2B" />
            </mesh>
          </group>
        </group>

        <group position-y={55} scale={2}>
          <mesh position-y={7}>
            <sphereGeometry args={[10, 32, 16]} />
            <meshToonMaterial color="#396353" />
          </mesh>
          <mesh position={[-15, -3, 0]}>
            <sphereGeometry args={[6, 32, 16]} />
            <meshToonMaterial color="#396353" />
          </mesh>
          <mesh position={[15, -3, 0]}>
            <sphereGeometry args={[6, 32, 16]} />
            <meshToonMaterial color="#396353" />
          </mesh>
          <mesh position={[0, -3, 15]}>
            <sphereGeometry args={[6, 32, 16]} />
            <meshToonMaterial color="#396353" />
          </mesh>
          <mesh position={[0, -3, -15]}>
            <sphereGeometry args={[6, 32, 16]} />
            <meshToonMaterial color="#396353" />
          </mesh>
          <mesh position={[0, -1, -7]}>
            <sphereGeometry args={[4.8, 32, 16]} />
            <meshToonMaterial color="#396353" />
          </mesh>
          <mesh position={[0, -1, 7]}>
            <sphereGeometry args={[4.7, 32, 16]} />
            <meshToonMaterial color="#396353" />
          </mesh>
          <mesh position={[-7, -1, 0]}>
            <sphereGeometry args={[5.2, 32, 16]} />
            <meshToonMaterial color="#396353" />
          </mesh>
          <mesh position={[7, -1, 0]}>
            <sphereGeometry args={[4.9, 32, 16]} />
            <meshToonMaterial color="#396353" />
          </mesh>
          <mesh position={[7, -2, 7]}>
            <sphereGeometry args={[9, 32, 16]} />
            <meshToonMaterial color="#396353" />
          </mesh>
          <mesh position={[-7, -2, 7]}>
            <sphereGeometry args={[9, 32, 16]} />
            <meshToonMaterial color="#396353" />
          </mesh>
          <mesh position={[7, -2, -7]}>
            <sphereGeometry args={[9, 32, 16]} />
            <meshToonMaterial color="#396353" />
          </mesh>
          <mesh position={[-7, -2, -7]}>
            <sphereGeometry args={[9, 32, 16]} />
            <meshToonMaterial color="#396353" />
          </mesh>
        </group>
      </group>
    </>
  );
}
