"use client";

import styles from "./page.module.css";
import Image from "next/image";
import { useState, useEffect, useActionState } from "react";
import { editUser } from "@/app/profile/edit/page";

// function editUser(any: any) {
//   return { message: "User updated successfully" };
// }

interface ProfileProps {
  email: string;
  profile_image?: number;
  uuid: string;
}

export default function Page({ email, profile_image, uuid }: ProfileProps) {
  const [state, formAction, pending] = useActionState(editUser, {
    message: "",
  });
  const [currentProfileImage, setCurrentProfileImage] = useState(
    profile_image ?? 0
  );
  const [profileImageSrc, setProfileImageSrc] = useState(
    "/resources/profile-images/grey-profile-icon.png"
  );

  function nextProfileImage() {
    setCurrentProfileImage((prev) => (prev + 1) % 10);
  }

  function prevProfileImage() {
    setCurrentProfileImage((prev) => (prev - 1 + 10) % 10);
  }

  useEffect(() => {
    switch (currentProfileImage) {
      case 0:
        setProfileImageSrc("/resources/profile-images/grey-profile-icon.png");
        break;
      case 1:
        setProfileImageSrc("/resources/profile-images/red-profile-icon.png");
        break;
      case 2:
        setProfileImageSrc("/resources/profile-images/green-profile-icon.png");
        break;
      case 3:
        setProfileImageSrc("/resources/profile-images/blue-profile-icon.png");
        break;
      case 4:
        setProfileImageSrc("/resources/profile-images/orange-profile-icon.png");
        break;
      case 5:
        setProfileImageSrc("/resources/profile-images/yellow-profile-icon.png");
        break;
      case 6:
        setProfileImageSrc(
          "/resources/profile-images/turquoise-profile-icon.png"
        );
        break;
      case 7:
        setProfileImageSrc("/resources/profile-images/purple-profile-icon.png");
        break;
      case 8:
        setProfileImageSrc("/resources/profile-images/pink-profile-icon.png");
        break;
      case 9:
        setProfileImageSrc("/resources/profile-images/black-profile-icon.png");
        break;
      default:
        setProfileImageSrc("/resources/profile-images/grey-profile-icon.png");
        break;
    }
  }, [currentProfileImage]);

  return (
    <div className={styles.container}>
      <div className={`fontPacifico ${styles.dividerContainer}`}>
        <div className={styles.dividerLine} />
        <div className={`fontPacifico ${styles.divider}`}>Edit Profile</div>
        <div className={styles.dividerLine} />
      </div>
      <div className={styles.profileContainer}>
        <button className={styles.leftArrow} onClick={prevProfileImage} />
        <Image
          className={styles.profile}
          src={profileImageSrc}
          width={250}
          height={250}
          alt="profile_image"
        />
        <button className={styles.rightArrow} onClick={nextProfileImage} />
      </div>
      <div className={`fontPavanam ${styles.currentEmail}`}>
        Current email: {email}
      </div>
      <form className={styles.form} action={formAction}>
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
            name="new_email"
            className={`fontPavanam ${styles.field}`}
          />
          <input
            type="hidden"
            name="new_profile_image"
            value={currentProfileImage}
            readOnly
          />
          <input
            type="hidden"
            name="current_email"
            value={email ?? ""}
            readOnly
          />
          <input type="hidden" name="uuid" value={uuid ?? ""} readOnly />
        </div>

        {state?.message && (
          <div className={`fontPavanam ${styles.error}`}>{state.message}</div>
        )}

        <div>
          <Image
            className={styles.saveIcon}
            src="/resources/save.png"
            width={32}
            height={32}
            alt="password"
          />
          <button
            className={`fontPaytone ${styles.saveButton}`}
            disabled={pending}
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
