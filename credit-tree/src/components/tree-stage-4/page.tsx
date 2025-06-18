import { CatmullRomCurve3, Vector3 } from "three";

export default function TreeStage4() {
  return (
    <>
      <group
        onClick={(event) => {
          event.stopPropagation();
        }}
        position-y={-4}
      >
        <group>
          <mesh position-y={20}>
            <cylinderGeometry args={[3.7, 2.7, 5]} />
            <meshBasicMaterial color="#6F4E2B" />
          </mesh>
          <mesh>
            <cylinderGeometry args={[2.7, 2.5, 35]} />
            <meshBasicMaterial color="#6F4E2B" />
          </mesh>
          <mesh>
            <cylinderGeometry args={[2, 7, 15]} />
            <meshBasicMaterial color="#6F4E2B" />
          </mesh>
          <mesh position={[0, 24, 0]}>
            <cylinderGeometry args={[1, 1, 8]} />
            <meshBasicMaterial color="#6F4E2B" />
          </mesh>
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 27, -14),
                  new Vector3(0, 25, -12),
                  new Vector3(0, 24, 0),
                  new Vector3(0, 25, 12),
                  new Vector3(0, 27, 14),
                ]),
                20,
                1.5,
                20,
              ]}
            />
            <meshBasicMaterial color="#6F4E2B" />
          </mesh>
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(-14, 27, 0),
                  new Vector3(-12, 25, 0),
                  new Vector3(0, 24, 0),
                  new Vector3(12, 25, 0),
                  new Vector3(14, 27, 0),
                ]),
                20,
                1.5,
                20,
              ]}
            />
            <meshBasicMaterial color="#6F4E2B" />
          </mesh>
        </group>

        <group position-y={35}>
          <mesh position-y={7}>
            <sphereGeometry args={[10, 32, 16]} />
            <meshToonMaterial color="#578742" />
          </mesh>
          <mesh position={[-15, -3, 0]}>
            <sphereGeometry args={[6, 32, 16]} />
            <meshToonMaterial color="#578742" />
          </mesh>
          <mesh position={[15, -3, 0]}>
            <sphereGeometry args={[6, 32, 16]} />
            <meshToonMaterial color="#578742" />
          </mesh>
          <mesh position={[0, -3, 15]}>
            <sphereGeometry args={[6, 32, 16]} />
            <meshToonMaterial color="#578742" />
          </mesh>
          <mesh position={[0, -3, -15]}>
            <sphereGeometry args={[6, 32, 16]} />
            <meshToonMaterial color="#578742" />
          </mesh>
          <mesh position={[0, -1, -7]}>
            <sphereGeometry args={[4.8, 32, 16]} />
            <meshToonMaterial color="#578742" />
          </mesh>
          <mesh position={[0, -1, 7]}>
            <sphereGeometry args={[4.7, 32, 16]} />
            <meshToonMaterial color="#578742" />
          </mesh>
          <mesh position={[-7, -1, 0]}>
            <sphereGeometry args={[5.2, 32, 16]} />
            <meshToonMaterial color="#578742" />
          </mesh>
          <mesh position={[7, -1, 0]}>
            <sphereGeometry args={[4.9, 32, 16]} />
            <meshToonMaterial color="#578742" />
          </mesh>
          <mesh position={[7, -2, 7]}>
            <sphereGeometry args={[9, 32, 16]} />
            <meshToonMaterial color="#578742" />
          </mesh>
          <mesh position={[-7, -2, 7]}>
            <sphereGeometry args={[9, 32, 16]} />
            <meshToonMaterial color="#578742" />
          </mesh>
          <mesh position={[7, -2, -7]}>
            <sphereGeometry args={[9, 32, 16]} />
            <meshToonMaterial color="#578742" />
          </mesh>
          <mesh position={[-7, -2, -7]}>
            <sphereGeometry args={[9, 32, 16]} />
            <meshToonMaterial color="#578742" />
          </mesh>
        </group>
      </group>
    </>
  );
}
