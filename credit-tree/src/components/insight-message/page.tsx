import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

interface InsightMessageProps {
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
    number: string;
    type: string;
  };
  description: string;
  birdColour: "black" | "blue" | "green" | "red" | "yellow" | "purple" | "pink";
}

export default function InsightMessage({
  title,
  date,
  numberChange,
  infoCard,
  description,
  birdColour,
}: InsightMessageProps) {
  return (
    <div className={`fontPavanam ${styles.insightMessageContainer}`}>
      <div className={styles.insightMessage}>
        <div className={styles.closeButtonContainer}>
          <button className={styles.closeButton}>✖</button>
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
                className={styles.icon}
                src={infoCard.iconUrl}
                alt="Account Icon"
                width={50}
                height={50}
              />
              <div className={styles.infoCardText}>
                <div className={styles.name}>{infoCard.name}</div>
                <div className={styles.number}>{infoCard.number}</div>
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
            alt="Insight bird"
            width={342}
            height={183}
          />
        </div>
      </div>
    </div>
  );
}
