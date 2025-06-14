"use client";

import { Canvas, useThree } from "@react-three/fiber";
import CreditTree from "./page.client";

export default function Scene() {
  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 400,
        position: [-30, 0, 20],
      }}
    >
      <CreditTree />
    </Canvas>
  );
}
