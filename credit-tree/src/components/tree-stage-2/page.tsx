import { CatmullRomCurve3, Vector3 } from "three";
import LeafType1 from "../leaf-type-1/page";

export default function TreeStage2() {
  return (
    <>
      <group
        onClick={(event) => {
          event.stopPropagation();
        }}
        position-y={-4}
      >
        <group>
          <mesh position-y={5.5} scale={0.1}>
            <sphereGeometry args={[1, 32, 16]} />
            <meshBasicMaterial color="#634500" />
          </mesh>
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 0, 0),
                  new Vector3(0, 5.5, 0),
                ]),
                20,
                0.1,
                20,
              ]}
            />
            <meshBasicMaterial color="#634500" />
          </mesh>
          <mesh position={[-2, 3, 0.3]} scale={0.1}>
            <sphereGeometry args={[1, 32, 16]} />
            <meshBasicMaterial color="#634500" />
          </mesh>
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 1.5, 0),
                  new Vector3(-2, 3, 0.3),
                ]),
                20,
                0.1,
                20,
              ]}
            />
            <meshBasicMaterial color="#634500" />
          </mesh>
          <mesh position={[2, 4.8, -0.25]} scale={0.1}>
            <sphereGeometry args={[1, 32, 16]} />
            <meshBasicMaterial color="#634500" />
          </mesh>
          <mesh>
            <tubeGeometry
              args={[
                new CatmullRomCurve3([
                  new Vector3(0, 3.8, 0),
                  new Vector3(1.7, 4.1, 0),
                  new Vector3(2, 4.8, -0.25),
                ]),
                20,
                0.1,
                20,
              ]}
            />
            <meshBasicMaterial color="#634500" />
          </mesh>
        </group>

        <mesh position={[0.6, 3.2, 0]} rotation-y={Math.PI / 2} rotation-x={7}>
          <LeafType1 />
        </mesh>

        <mesh
          position={[-0.6, 4.1, 0]}
          rotation-y={-Math.PI / 2}
          rotation-x={2}
          rotation-z={-0.5}
        >
          <LeafType1 />
        </mesh>

        <mesh
          position={[-2.5, 3.2, 0.25]}
          rotation-y={-2}
          rotation-x={Math.PI / 2}
          rotation-z={-1.2}
        >
          <LeafType1 />
        </mesh>
        <mesh
          position={[-2.2, 2.8, 0.25]}
          rotation-y={-Math.PI / 2}
          rotation-x={Math.PI / 2}
          rotation-z={-2}
        >
          <LeafType1 />
        </mesh>
        <mesh
          position={[-2.2, 3.4, 0.25]}
          rotation-y={3.7}
          rotation-x={Math.PI / 2}
          rotation-z={-2}
        >
          <LeafType1 />
        </mesh>
        <mesh
          position={[0, 4.8, -0.5]}
          rotation-y={0}
          rotation-x={3}
          rotation-z={0}
        >
          <LeafType1 />
        </mesh>
        <mesh
          position={[2, 4.45, 0.05]}
          rotation-y={0}
          rotation-x={1}
          rotation-z={0}
        >
          <LeafType1 />
        </mesh>
        <mesh
          position={[2.5, 4.8, -0.03]}
          rotation-y={-5}
          rotation-x={0}
          rotation-z={1}
        >
          <LeafType1 />
        </mesh>
        <mesh
          position={[1.8, 4.8, -0.7]}
          rotation-y={10}
          rotation-x={0}
          rotation-z={1}
        >
          <LeafType1 />
        </mesh>
        <mesh
          position={[2, 5.3, -0.3]}
          rotation-y={0}
          rotation-x={-Math.PI / 2}
          rotation-z={0}
        >
          <LeafType1 />
        </mesh>
        <mesh
          position={[0.3, 6, 0]}
          rotation-y={0.5}
          rotation-x={-Math.PI / 2}
          rotation-z={-1}
        >
          <LeafType1 />
        </mesh>
        <mesh
          position={[-0.3, 6, 0]}
          rotation-y={-0.5}
          rotation-x={-Math.PI / 2}
          rotation-z={0}
        >
          <LeafType1 />
        </mesh>
        <mesh
          position={[-0.5, 5.4, 0]}
          rotation-y={-1.5}
          rotation-x={-Math.PI / 2}
          rotation-z={1}
        >
          <LeafType1 />
        </mesh>
        <mesh
          position={[0.6, 5.4, 0]}
          rotation-y={1.5}
          rotation-x={Math.PI / 2}
          rotation-z={3}
        >
          <LeafType1 />
        </mesh>
      </group>
    </>
  );
}
