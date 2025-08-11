"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useActionState } from "react";
import { loginUser } from "@/app/login/actions";
import Link from "next/link";

export default function Login() {
  const [state, formAction, pending] = useActionState(loginUser, {
    message: "",
  });

  return (
    <form className={styles.container} action={formAction}>
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
          name="email"
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
          name="password"
          className={`fontPavanam ${styles.field}`}
        />
      </div>

      {state?.message && (
        <div className={`fontPavanam ${styles.error}`}>{state.message}</div>
      )}

      <button
        className={`fontPaytone ${styles.signup}`}
        type="submit"
        disabled={pending}
      >
        LOGIN
      </button>

      <Link href="/register" className={`fontPavanam ${styles.register}`}>
        Haven't registered yet? Click to sign up!
      </Link>
    </form>
  );
}
