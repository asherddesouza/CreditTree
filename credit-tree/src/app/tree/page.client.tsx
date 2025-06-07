import styles from "./page.module.css";
import { OrbitControls, Sky } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { ToneMapping, EffectComposer } from "@react-three/postprocessing";
import { ToneMappingMode } from "postprocessing";
import { useRef, useState } from "react";
import TreeStage1 from "@/components/tree-stage-1/page";
import InsightBird from "@/components/insight-bird/page";

export default function Environment() {
  return (
    <>
      <EffectComposer>
        <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
      </EffectComposer>

      <Perf position="top-left" />

      <Sky />

      <OrbitControls makeDefault enablePan={false} maxPolarAngle={1.6} />

      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <InsightBird />

      <TreeStage1 />

      <mesh position-y={-14} scale={10}>
        <sphereGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
