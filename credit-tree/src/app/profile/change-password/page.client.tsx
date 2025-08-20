"use client";

import styles from "./page.module.css";
import { useActionState } from "react";
import { changePassword } from "@/app/profile/change-password/actions";
import { redirect } from "next/navigation";

export default function Page() {
  const [state, formAction, pending] = useActionState(changePassword, {
    message: "",
  });

  return (
    <div className={styles.container}>
      <button
        className={`fontPacifico ${styles.backButton}`}
        onClick={() => {
          redirect("/profile");
        }}
      >
        ⬅
      </button>
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
          <img
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
          <img
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
          <img
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
          data-testid="submit-button"
        >
          {pending ? <span className={styles.spinner} /> : "Submit"}
        </button>
      </form>
    </div>
  );
}
