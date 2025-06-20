import styles from "./page.module.css";
import {
  OrbitControls,
  Sky,
  Environment,
  Cloud,
  Clouds,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { ToneMapping, EffectComposer } from "@react-three/postprocessing";
import { ToneMappingMode } from "postprocessing";
import TreeStage1 from "@/components/tree-stage-1/page";
import TreeStage2 from "@/components/tree-stage-2/page";
import TreeStage3 from "@/components/tree-stage-3/page";
import TreeStage4 from "@/components/tree-stage-4/page";
import TreeStage5 from "@/components/tree-stage-5/page";
import InsightBird from "@/components/insight-bird/page";
import Globe from "@/components/globe/page";
import * as THREE from "three";

export default function CreditTree() {
  return (
    <>
      <EffectComposer>
        <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
      </EffectComposer>

      <Perf position="top-left" />

      <Environment files="./textures/autumn_field_puresky_4k.hdr" background />

      {/* <Clouds material={THREE.MeshBasicMaterial}>
        <Cloud segments={40} bounds={[10, 2, 2]} volume={10} color="orange" />
        <Cloud seed={1} scale={2} volume={5} color="hotpink" fade={100} />
      </Clouds> */}

      <OrbitControls
        makeDefault
        enablePan={false}
        maxPolarAngle={1.6}
        maxDistance={270}
      />

      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={4} />

      {/* <InsightBird birdType={"green"} /> */}

      {/* <TreeStage1 /> */}
      {/* <TreeStage2 /> */}
      {/* <TreeStage3 /> */}
      {/* <TreeStage4 /> */}
      <TreeStage5 />

      <Globe />
    </>
  );
}
