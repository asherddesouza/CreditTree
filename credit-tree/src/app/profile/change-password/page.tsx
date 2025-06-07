import styles from "./page.module.css";
import Image from "next/image";

export default function ChangePassword() {
  return (
    <div className={styles.container}>
      <div className={`fontPacifico ${styles.dividerContainer}`}>
        <div className={styles.dividerLine} />
        <div className={`fontPacifico ${styles.divider}`}>Change Password</div>
        <div className={styles.dividerLine} />
      </div>
      <div className={`fontPavanam ${styles.description}`}>
        Your new password must be at least 8 characters long and contain at
        least one uppercase letter, one lowercase letter, and one number.
      </div>
      <div>
        <Image
          className={styles.padlockIcon}
          src="/resources/padlock.png"
          width={53}
          height={45}
          alt="password"
        />
        <input
          type="password"
          placeholder="Old Password"
          className={`fontPavanam ${styles.field}`}
        />
      </div>
      <div>
        <Image
          className={styles.padlockIcon}
          src="/resources/padlock.png"
          width={53}
          height={45}
          alt="password"
        />
        <input
          type="password"
          placeholder="New Password"
          className={`fontPavanam ${styles.field}`}
        />
      </div>
      <div>
        <Image
          className={styles.padlockIcon}
          src="/resources/padlock.png"
          width={53}
          height={45}
          alt="password"
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          className={`fontPavanam ${styles.field}`}
        />
      </div>
      <div className={`fontPaytone ${styles.submitButton}`}>Submit</div>
    </div>
  );
}
