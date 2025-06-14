import styles from "./page.module.css";
import { OrbitControls, Sky, Environment } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { ToneMapping, EffectComposer } from "@react-three/postprocessing";
import { ToneMappingMode } from "postprocessing";
import TreeStage1 from "@/components/tree-stage-1/page";
import TreeStage2 from "@/components/tree-stage-2/page";
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

      <OrbitControls
        makeDefault
        enablePan={false}
        maxPolarAngle={1.6}
        maxDistance={200}
      />

      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={4} />

      {/* <InsightBird birdType={"green"} /> */}

      <TreeStage1 />
      {/* <TreeStage2 /> */}

      <Globe />
    </>
  );
}
