import Image from "next/image";
import styles from "./page.module.css";

export default function CreateAccount() {
  return (
    <div className={styles.container}>
      <div className={`fontPaytone ${styles.title}`}>Create Account</div>
      <div>
        <Image
          className={styles.profileIcon}
          src="/resources/profile.png"
          width={33}
          height={51}
          alt="profile"
        />
        <input
          type="text"
          placeholder="Full Name"
          className={`fontPavanam ${styles.field}`}
        />
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
          placeholder="Email Address"
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
          placeholder="Password"
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
          placeholder="Confirm Password"
          className={`fontPavanam ${styles.field}`}
        />
      </div>

      <button className={`fontPaytone ${styles.signup}`}>SIGN UP</button>
    </div>
  );
}
