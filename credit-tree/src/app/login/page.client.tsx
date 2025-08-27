"use client";

import styles from "./page.module.css";
import { useActionState, useState } from "react";
import { loginUser } from "@/app/login/actions";
import Link from "next/link";

export default function Login() {
  const [state, formAction, pending] = useActionState(loginUser, {
    message: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className={styles.container} action={formAction}>
      <div className={`fontPaytone ${styles.title}`}>Welcome Back!</div>

      <div>
        <img
          className={styles.emailIcon}
          src="/resources/mail.png"
          width={45}
          height={30}
          alt="email"
        />
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          className={`fontPavanam ${styles.field}`}
        />
      </div>

      <div>
        <img
          className={styles.padlockIcon}
          src="/resources/padlock.png"
          width={53}
          height={45}
          alt="password"
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          name="password"
          className={`fontPavanam ${styles.field}`}
        />
      </div>

      <button
        onClick={() => setShowPassword(!showPassword)}
        className={`${styles.togglePasswordButton} fontPavanam`}
        type="button"
      >
        <img
          className={styles.eyeIcon}
          src={
            showPassword
              ? "/resources/eye_active.png"
              : "/resources/eye_inactive.png"
          }
          alt="toggle password visibility"
          width={64}
          height={64}
        />
        <div>{showPassword ? "Hide Password" : "Show Password"}</div>
      </button>

      {state?.message && (
        <div className={`fontPavanam ${styles.error}`}>{state.message}</div>
      )}

      <button
        className={`fontPaytone ${styles.signup}`}
        type="submit"
        disabled={pending}
      >
        {pending ? <span className={styles.spinner} /> : "LOGIN"}
      </button>

      <Link href="/register" className={`fontPavanam ${styles.register}`}>
        Haven't registered yet? Click to sign up!
      </Link>
    </form>
  );
}
