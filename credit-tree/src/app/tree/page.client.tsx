import styles from "./page.module.css";
import { OrbitControls, Sky } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { ToneMapping, EffectComposer } from "@react-three/postprocessing";
import { ToneMappingMode } from "postprocessing";
import { useRef, useState } from "react";
import TreeStage1 from "@/components/tree-stage-1/page";
import InsightBird from "@/components/insight-bird/page";
import Globe from "@/components/globe/page";

export default function Environment() {
  return (
    <>
      <EffectComposer>
        <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
      </EffectComposer>

      <Perf position="top-left" />

      <Sky sunPosition={[0, 5, 20]} inclination={0} azimuth={0.25} />

      <OrbitControls makeDefault enablePan={false} maxPolarAngle={1.6} />

      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      {/* <InsightBird /> */}

      {/* <TreeStage1 /> */}

      <Globe />
    </>
  );
}
