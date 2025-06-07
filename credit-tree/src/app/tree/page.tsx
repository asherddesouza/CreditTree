"use client";

import { Canvas, useThree } from "@react-three/fiber";
import Environment from "./page.client";

export default function Scene() {
  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 10, 17],
      }}
    >
      <Environment />
    </Canvas>
  );
}
