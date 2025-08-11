"use client";

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export interface InsightMessageProps {
  title: string;
  date: string;
  numberChange?: {
    from: string;
    to: string;
    sentiment: "positive" | "negative";
  };
  infoCard?: {
    iconUrl: string;
    name: string;
    number?: string;
    type: string;
  };
  description: string;
  birdColour?:
    | "black"
    | "blue"
    | "green"
    | "red"
    | "yellow"
    | "purple"
    | "pink";
  setModalVisible: (visible: boolean) => void;
  modalVisible: boolean;
}

export default function InsightMessage({
  title,
  date,
  numberChange,
  infoCard,
  description,
  birdColour = "black",
  setModalVisible,
  modalVisible,
}: InsightMessageProps) {
  return (
    <>
      {modalVisible && (
        <div className={`fontPavanam ${styles.insightMessageContainer}`}>
          <div className={styles.insightMessage}>
            <div className={styles.closeButtonContainer}>
              <button
                className={styles.closeButton}
                onClick={() => setModalVisible(false)}
              >
                ✖
              </button>
            </div>
            <div className={styles.topInfoContainer}>
              <div className={styles.title}>{title}</div>
              <div className={styles.date}>{date}</div>
            </div>
            {numberChange && (
              <div className={styles.numberChangeCard}>
                <div>{numberChange.from}</div>
                {numberChange.sentiment === "positive" ? (
                  <div className={styles.greenArrow}>→</div>
                ) : (
                  <div className={styles.redArrow}>→</div>
                )}
                <div>{numberChange.to}</div>
              </div>
            )}
            {infoCard && (
              <div className={styles.infoCard}>
                <div className={styles.infoCardLeft}>
                  <Image
                    priority
                    className={styles.icon}
                    src={infoCard.iconUrl}
                    alt="accountIcon"
                    width={50}
                    height={50}
                  />
                  <div className={styles.infoCardText}>
                    <div className={styles.name}>{infoCard.name}</div>
                    {infoCard.number ? (
                      <div className={styles.number}>{infoCard.number}</div>
                    ) : null}
                  </div>
                </div>

                <div className={styles.type}>{infoCard.type}</div>
              </div>
            )}

            <div className={styles.description}>{description}</div>
            <Link
              className={`fontPavanam ${styles.externalCta}`}
              href="https://app.clearscore.com/"
            >
              See more info on ClearScore
            </Link>
            <div className={styles.insightBirdContainer}>
              <Image
                className={styles.insightBird}
                src={`/resources/bird-images/${birdColour}.png`}
                alt="insightBird"
                width={342}
                height={183}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
