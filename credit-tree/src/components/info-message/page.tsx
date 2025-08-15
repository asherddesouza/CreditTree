"use client";

import styles from "./page.module.css";

export interface InfoMessageProps {
  setModalVisible: (visible: boolean) => void;
  modalVisible: boolean;
}

export default function InfoMessage({
  setModalVisible,
  modalVisible,
}: InfoMessageProps) {
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
            <div className={`fontPacifico ${styles.dividerContainer}`}>
              <div className={styles.dividerLine} />
              <div className={`fontPacifico ${styles.divider}`}>CreditTree</div>
              <div className={styles.dividerLine} />
            </div>

            <div className={`fontPavanam ${styles.bulletPoint}`}>
              ↳ Welcome to CreditTree!
            </div>
            <div className={`fontPavanam ${styles.bulletPoint}`}>
              ↳ As your credit score grows, your tree will grow too!
            </div>
            <div className={`fontPavanam ${styles.bulletPoint}`}>
              ↳ Talk to the birds to gain Insights on how you can improve your
              Credit Health!
            </div>

            <br></br>

            <div className={`fontPavanam  ${styles.birdInfo}`}>
              <div>Green birds represent your credit score increasing.</div>
              <img
                className={styles.insightBird}
                src={`/resources/bird-images/green.png`}
                alt="green bird"
                width={68.4}
                height={36.6}
              />
            </div>
            <div className={`fontPavanam ${styles.birdInfo}`}>
              <div>Red birds represent your credit score decreasing.</div>
              <img
                className={styles.insightBird}
                src={`/resources/bird-images/red.png`}
                alt="red bird"
                width={68.4}
                height={36.6}
              />
            </div>
            <div className={`fontPavanam  ${styles.birdInfo}`}>
              <div>Yellow birds represent hard searches on your report.</div>
              <img
                className={styles.insightBird}
                src={`/resources/bird-images/yellow.png`}
                alt="yellow bird"
                width={68.4}
                height={36.6}
              />
            </div>
            <div className={`fontPavanam  ${styles.birdInfo}`}>
              <div>
                Purple birds represent court orders & insolvencies on your
                report.
              </div>
              <img
                className={styles.insightBird}
                src={`/resources/bird-images/purple.png`}
                alt="purple bird"
                width={68.4}
                height={36.6}
              />
            </div>
            <div className={`fontPavanam ${styles.birdInfo}`}>
              <div>Black birds represent your report's payment history.</div>
              <img
                className={styles.insightBird}
                src={`/resources/bird-images/black.png`}
                alt="black bird"
                width={68.4}
                height={36.6}
              />
            </div>
            <div className={`fontPavanam  ${styles.birdInfo}`}>
              <div>Pink birds represent fraud warnings on your report.</div>
              <img
                className={styles.insightBird}
                src={`/resources/bird-images/pink.png`}
                alt="pink bird"
                width={68.4}
                height={36.6}
              />
            </div>
            <div className={`fontPavanam ${styles.birdInfo}`}>
              <div>
                Blue birds represent electoral roll changes and notices on your
                credit report.
              </div>
              <img
                className={styles.insightBird}
                src={`/resources/bird-images/blue.png`}
                alt="blue bird"
                width={68.4}
                height={36.6}
              />
            </div>

            <br></br>
          </div>
        </div>
      )}
    </>
  );
}
