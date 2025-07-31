"use client";

import styles from "./page.module.css";
import {
  OrbitControls,
  Sky,
  Environment,
  Cloud,
  Clouds,
  Html,
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
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Image from "next/image";
import Link from "next/link";
import InsightMessage from "@/components/insight-message/page";
import { InsightMessageProps } from "@/components/insight-message/page";
import { useState } from "react";

interface TreeProps {
  creditScore: number;
  insights: any[];
}

interface CameraSettingsProps {
  fov: number;
  near: number;
  far: number;
  position: [number, number, number];
}

export function TreeStage(creditScore: number): number {
  if (creditScore <= 200) {
    return 1;
  } else if (creditScore <= 400) {
    return 2;
  } else if (creditScore <= 600) {
    return 3;
  } else if (creditScore <= 800) {
    return 4;
  } else {
    return 5;
  }
}

export function CameraSettings(creditScore: number): CameraSettingsProps {
  if (creditScore <= 200) {
    return {
      fov: 45,
      near: 0.1,
      far: 400,
      position: [-30, 0, 20],
    };
  } else if (creditScore <= 400) {
    return {
      fov: 45,
      near: 0.1,
      far: 400,
      position: [-30, 0, 20],
    };
  } else if (creditScore <= 600) {
    return {
      fov: 45,
      near: 0.1,
      far: 400,
      position: [-30, 0, 30],
    };
  } else if (creditScore <= 800) {
    return {
      fov: 45,
      near: 0.1,
      far: 400,
      position: [-30, 60, 160],
    };
  } else
    return {
      fov: 45,
      near: 0.1,
      far: 400,
      position: [-30, 80, 250],
    };
}

export function BirdScale(creditScore: number): number {
  if (creditScore <= 200) {
    return 0.8;
  } else if (creditScore <= 400) {
    return 1;
  } else if (creditScore <= 600) {
    return 1.2;
  } else if (creditScore <= 800) {
    return 2.5;
  } else {
    return 3;
  }
}

export default function CreditTree({ creditScore, insights }: TreeProps) {
  let treeStage = TreeStage(creditScore);
  let cameraSettings = CameraSettings(creditScore);
  let birdScale = BirdScale(creditScore);

  const [selectedInsight, setSelectedInsight] =
    useState<InsightMessageProps | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  // then, make them move around the tree
  // then, add the clouds things so that we know if an insight has been clicked or not
  // then, add onClicks to the birds which display modals
  // once an insight is dismissed, remove the clouds

  function handleBirdClicked(insight: InsightMessageProps) {
    setSelectedInsight(insight);
    setModalVisible(true);
  }

  const insightBirds = insights.map((insight, index) => {
    return (
      <mesh
        position={[10, index * 3, 0]}
        key={index}
        scale={birdScale}
        onClick={() => handleBirdClicked(insight)}
      >
        <InsightBird insight={insight} />
      </mesh>
    );
  });

  const showInsightModal = (insight: InsightMessageProps | null) => {
    if (insight !== null) {
      return (
        <Html fullscreen>
          <InsightMessage
            title={insight.title}
            date={insight.date}
            numberChange={insight.numberChange}
            infoCard={insight.infoCard}
            description={insight.description}
            birdColour={insight.birdColour}
            setModalVisible={setModalVisible}
            modalVisible={modalVisible}
          />
        </Html>
      );
    }
    return null;
  };

  return (
    <>
      <Canvas
        camera={{
          fov: cameraSettings.fov,
          near: cameraSettings.near,
          far: cameraSettings.far,
          position: cameraSettings.position,
        }}
      >
        <Html fullscreen>
          <Link className={styles.topRightOverlay} href="/profile">
            <button className={styles.profileButton}>
              <Image
                className={styles.profileIcon}
                src="/resources/profile.png"
                width={35}
                height={50}
                alt="profile"
              />
            </button>
          </Link>

          {/* <>
            <InsightMessage
              title="Your credit limit has increased!"
              date="May 2025"
              numberChange={{
                from: "£300",
                to: "£800",
                sentiment: "positive",
              }}
              infoCard={{
                iconUrl: "/resources/credit-card.png",
                name: "Capital One",
                number: "0645 4534 4354 0543",
                type: "Credit Card",
              }}
              description="Keep it up!"
              birdColour="pink"
            />
          </> */}
        </Html>

        {modalVisible && showInsightModal(selectedInsight)}

        <Perf position="top-left" />

        <EffectComposer>
          <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
        </EffectComposer>

        <Environment
          files="./textures/autumn_field_puresky_4k.hdr"
          background
        />

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

        {insightBirds}

        {treeStage === 1 ? <TreeStage1 /> : null}
        {treeStage === 2 ? <TreeStage2 /> : null}
        {treeStage === 3 ? <TreeStage3 /> : null}
        {treeStage === 4 ? <TreeStage4 /> : null}
        {treeStage === 5 ? <TreeStage5 /> : null}

        <Globe />
      </Canvas>
    </>
  );
}
