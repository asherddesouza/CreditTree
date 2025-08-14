"use client";

import styles from "./page.module.css";
import { useActionState } from "react";
import { createUser } from "@/app/register/actions";
import Link from "next/link";

export default function Page() {
  const [state, formAction, pending] = useActionState(createUser, {
    message: "",
  });

  return (
    <form className={styles.container} action={formAction}>
      <div className={`fontPaytone ${styles.title}`}>Create Account</div>
      <div>
        <img
          className={styles.profileIcon}
          src="/resources/profile.png"
          width={33}
          height={51}
          alt="profile"
        />
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          className={`fontPavanam ${styles.field}`}
        />
      </div>

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
          type="password"
          placeholder="Password"
          name="password"
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
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
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
        SIGN UP
      </button>

      <Link href="/login" className={`fontPavanam ${styles.login}`}>
        Already have an account? Click here to login.
      </Link>
    </form>
  );
}
