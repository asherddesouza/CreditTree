import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={`fontPacifico ${styles.title}`}>CreditTree</div>
      <Link href="/get-started" className={`fontPaytone ${styles.getStarted}`}>
        GET STARTED
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
