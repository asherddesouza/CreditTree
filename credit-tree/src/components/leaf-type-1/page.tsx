import { CatmullRomCurve3, Vector3 } from "three";

export default function LeafType1() {
  return (
    <>
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
      <mesh position={[0.1, 0, 0]} scale-z={0.9} scale-x={0.6} rotation-y={0.5}>
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
      <mesh position={[-0.1, 0, 1]} scale-z={3} scale-x={0.7} rotation-y={-0.1}>
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
    </>
  );
}
