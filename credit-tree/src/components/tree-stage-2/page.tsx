import { CatmullRomCurve3, Vector3 } from "three";
import LeafType1 from "../leaf-type-1/page";

export default function TreeStage2() {
  return (
    <>
      <group position={[0, -0.7, 0.5]} rotation-z={1} rotation-x={-0.5}>
        <LeafType1 />
      </group>
    </>
  );
}
