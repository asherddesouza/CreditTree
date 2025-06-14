import { CatmullRomCurve3, Vector3 } from "three";

const roundLeafPath = new CatmullRomCurve3([
  new Vector3(0, 0, -0.7),
  new Vector3(0, 0, 0.7),
]);

export default function LeafType2() {
  return (
    <>
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
    </>
  );
}
