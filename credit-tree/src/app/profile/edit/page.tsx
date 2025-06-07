import styles from "./page.module.css";
import Image from "next/image";

export default function Edit() {
  return (
    <div className={styles.container}>
      <div className={`fontPacifico ${styles.dividerContainer}`}>
        <div className={styles.dividerLine} />
        <div className={`fontPacifico ${styles.divider}`}>Edit Profile</div>
        <div className={styles.dividerLine} />
      </div>
      <div className={styles.profileContainer}>
        <div className={styles.leftArrow} />
        <Image
          className={styles.profile}
          src="/resources/profile-images/grey-profile-icon.png"
          width={250}
          height={250}
          alt="email"
        />
        <div className={styles.rightArrow} />
      </div>
      <div>
        <Image
          className={styles.emailIcon}
          src="/resources/mail.png"
          width={45}
          height={30}
          alt="email"
        />
        <input
          type="email"
          placeholder="New Email Address"
          className={`fontPavanam ${styles.field}`}
        />
      </div>
      <div>
        <Image
          className={styles.saveIcon}
          src="/resources/save.png"
          width={32}
          height={32}
          alt="password"
        />
        <div className={`fontPaytone ${styles.saveButton}`}>Save</div>
      </div>
    </div>
  );
}
