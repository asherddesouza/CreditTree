import Image from "next/image";
import styles from "./page.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={`fontPaytone ${styles.title}`}>Welcome Back!</div>

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

      <button className={`fontPaytone ${styles.signup}`}>LOGIN</button>
    </div>
  );
}
