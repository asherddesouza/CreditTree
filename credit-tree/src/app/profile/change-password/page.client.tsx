"use client";

import styles from "./page.module.css";
import Image from "next/image";
import { useState, useEffect, useActionState } from "react";
// import { changePassword } from "@/app/profile/change-password/page";

function changePassword(any: any) {
  return { message: "User updated successfully" };
}

export default function Page() {
  const [state, formAction, pending] = useActionState(changePassword, {
    message: "",
  });

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
      <form className={styles.form} action={formAction}>
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
            name="old_password"
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
            name="new_password"
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
            name="confirm_new_password"
            placeholder="Confirm New Password"
            className={`fontPavanam ${styles.field}`}
          />
        </div>

        {state?.message && (
          <div className={`fontPavanam ${styles.error}`}>{state.message}</div>
        )}

        <button
          className={`fontPaytone ${styles.submitButton}`}
          disabled={pending}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
