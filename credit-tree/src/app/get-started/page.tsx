import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function GetStarted() {
  return (
    <div className={styles.container}>
      <div className={`fontPacifico ${styles.title}`}>Welcome!</div>
      <div className={`fontPavanam ${styles.subtitle}`}>
        If you’ve already got an account, log in to continue your journey!
      </div>
      <Link href="/get-started/login" className={`fontPaytone ${styles.login}`}>
        LOGIN
      </Link>
      <div className={`fontPacifico ${styles.dividerContainer}`}>
        <div className={styles.dividerLine} />
        <div className={`fontPavanam ${styles.divider}`}>or</div>
        <div className={styles.dividerLine} />
      </div>
      <Link
        href="/get-started/register"
        className={`fontPaytone ${styles.signup}`}
      >
        REGISTER
      </Link>
      <Image
        className={styles.sapling}
        src="/resources/sapling.png"
        width={97}
        height={150}
        alt="sapling"
      />
      <Image
        className={styles.ground}
        src="/resources/ground.png"
        width={3000}
        height={761}
        alt="ground"
      />
    </div>
  );
}
