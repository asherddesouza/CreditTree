"use client";

import styles from "./page.module.css";
import { OrbitControls, Environment, Html } from "@react-three/drei";
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
import Link from "next/link";
import InsightMessage from "@/components/insight-message/page";
import { InsightMessageProps } from "@/components/insight-message/page";
import InfoMessage from "@/components/info-message/page";
import { useState, useMemo, useCallback } from "react";

interface TreeProps {
  creditScore: number;
  insights: any[];
  profileImage: number;
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

export function BirdYPositionRange(creditScore: number): number {
  if (creditScore <= 200) {
    return Math.random() * (2 - 1) + 1;
  } else if (creditScore <= 400) {
    return Math.random() * (2 - 1) + 1;
  } else if (creditScore <= 600) {
    return Math.random() * (3 - 1) + 1;
  } else if (creditScore <= 800) {
    return Math.random() * (9 - 8) + 8;
  } else {
    return Math.random() * (15 - 10) + 10;
  }
}

export function BirdMinDistance(creditScore: number): number {
  if (creditScore <= 200) {
    return 3;
  } else if (creditScore <= 400) {
    return 3.5;
  } else if (creditScore <= 600) {
    return 4;
  } else if (creditScore <= 800) {
    return 12;
  } else {
    return 20;
  }
}

export function ProfileColour(profileImage: number): string {
  switch (profileImage) {
    case 0:
      return "grey";
    case 1:
      return "red";
    case 2:
      return "green";
    case 3:
      return "blue";
    case 4:
      return "orange";
    case 5:
      return "yellow";
    case 6:
      return "turquoise";
    case 7:
      return "purple";
    case 8:
      return "pink";
    case 9:
      return "black";
    default:
      return "grey";
  }
}

export default function CreditTree({
  creditScore,
  insights,
  profileImage,
}: TreeProps) {
  const treeStage = TreeStage(creditScore);
  const cameraSettings = CameraSettings(creditScore);
  const birdScale = BirdScale(creditScore);
  const birdYDistance = BirdYPositionRange(creditScore);
  const minDistance = BirdMinDistance(creditScore);
  const radius = minDistance;
  const profileColour = ProfileColour(profileImage);

  const [selectedInsight, setSelectedInsight] =
    useState<InsightMessageProps | null>(null);

  const [insightModalVisible, setInsightModalVisible] = useState(false);
  const [infoModalVisible, setInfoModalVisible] = useState(false);

  const handleBirdClicked = useCallback((insight: InsightMessageProps) => {
    setSelectedInsight(insight);
    setInsightModalVisible(true);
  }, []);

  const handleInfoIconClicked = () => {
    infoModalVisible ? setInfoModalVisible(false) : setInfoModalVisible(true);
  };

  const insightBirds = useMemo(() => {
    return insights.map((insight, index) => {
      const angle = (index / insights.length) * 2 * Math.PI;
      const x =
        Math.cos(angle) * radius + Math.sign(Math.cos(angle)) * minDistance;
      const z =
        Math.sin(angle) * radius + Math.sign(Math.sin(angle)) * minDistance;

      return (
        <mesh
          position={[x, index * birdYDistance, z]}
          rotation-y={Math.random() * Math.PI * 2}
          key={index}
          scale={birdScale}
          onClick={(event) => {
            event.stopPropagation();
            handleBirdClicked(insight);
          }}
        >
          <InsightBird insight={insight} />
        </mesh>
      );
    });
  }, []);

  const showInsightModal = (insight: InsightMessageProps | null) => {
    if (insight !== null) {
      return (
        <InsightMessage
          title={insight.title}
          date={insight.date}
          numberChange={insight.numberChange}
          infoCard={insight.infoCard}
          description={insight.description}
          birdColour={insight.birdColour}
          setModalVisible={setInsightModalVisible}
          modalVisible={insightModalVisible}
        />
      );
    }
    return null;
  };

  const showInfoModal = () => {
    return (
      <InfoMessage
        setModalVisible={setInfoModalVisible}
        modalVisible={infoModalVisible}
      />
    );
  };

  return (
    <div className={styles.canvasContainer}>
      <Canvas
        camera={{
          fov: cameraSettings.fov,
          near: cameraSettings.near,
          far: cameraSettings.far,
          position: cameraSettings.position,
        }}
      >
        <Html fullscreen>
          {insightModalVisible && showInsightModal(selectedInsight)}
          {infoModalVisible && showInfoModal()}

          <div className={styles.helpIconPosition}>
            <button
              className={`${styles.helpIcon}`}
              onClick={handleInfoIconClicked}
            >
              <img
                src="/resources/help.png"
                alt="Help"
                height={100}
                width={100}
              />
            </button>
          </div>
          <Link
            className={styles.profileIconPosition}
            href="/profile"
            data-testid="profile-button"
          >
            <img
              className={styles.profileIcon}
              src={`/resources/profile-images/${profileColour}-profile-icon.png`}
              width={80}
              height={80}
              alt="profile page"
            />
          </Link>
        </Html>

        {/* <Perf position="top-left" /> */}

        <EffectComposer>
          <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
        </EffectComposer>
        <Environment
          files="./textures/autumn_field_puresky_4k.hdr"
          background
        />
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
    </div>
  );
}
