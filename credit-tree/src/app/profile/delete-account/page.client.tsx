"use client";

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { useActionState } from "react";
import { deleteAccount } from "./page";

export default function Page() {
  const [state, formAction, pending] = useActionState(deleteAccount, {
    message: "",
  });

  return (
    <div className={styles.container}>
      <div className={`fontPacifico ${styles.dividerContainer}`}>
        <div className={styles.dividerLine} />
        <div className={`fontPacifico ${styles.divider}`}>Delete Account</div>
        <div className={styles.dividerLine} />
      </div>
      <form className={styles.form} action={formAction}>
        <div className={`fontPavanam ${styles.description}`}>
          Are you sure you want to delete your account? This is a permanent
          action.
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
        <div className={`fontPavanam ${styles.description}`}>
          Type CONFIRM into the field below if you're sure.
        </div>
        <input
          type="text"
          placeholder="CONFIRM"
          name="confirm"
          className={`fontPavanam ${styles.field} ${styles.confirmationField}`}
        />

        {state?.message && (
          <div className={`fontPavanam ${styles.error}`}>{state.message}</div>
        )}

        <div className={styles.deleteButtonContainer}>
          <Image
            className={styles.deleteIcon}
            src="/resources/bin.png"
            width={32}
            height={35}
            alt="delete"
          />
          <button
            className={`fontPaytone ${styles.deleteButton}`}
            disabled={pending}
          >
            Delete Account
          </button>
        </div>
      </form>
    </div>
  );
}
