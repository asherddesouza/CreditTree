"use client";

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";

interface ProfileProps {
  name: string;
  email: string;
  profile_image?: number;
}

export default function Page({ name, email, profile_image }: ProfileProps) {
  const supabase = createClient();

  async function logoutUser() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error logging out:", error);
    } else {
      redirect("/login");
    }
  }

  const [currentProfileImage, setCurrentProfileImage] = useState(
    profile_image ?? 0
  );
  const [profileImageSrc, setProfileImageSrc] = useState(
    "/resources/profile-images/grey-profile-icon.png"
  );

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
      <button
        className={`fontPacifico ${styles.backButton}`}
        onClick={() => {
          redirect("/tree");
        }}
      >
        ⬅
      </button>
      <div className={`fontPacifico ${styles.dividerContainer}`}>
        <div className={styles.dividerLine} />
        <div className={`fontPacifico ${styles.divider}`}>Profile</div>
        <div className={styles.dividerLine} />
      </div>
      <Image
        className={styles.profile}
        src={profileImageSrc}
        width={250}
        height={250}
        alt="profile_image"
      />
      <div className={`fontPaytone ${styles.name}`}>{name}</div>
      <div className={`fontPaytone ${styles.email}`}>{email}</div>
      <div className={`${styles.editContainer}`}>
        <div>
          <Image
            className={styles.editIcon}
            src="/resources/edit.png"
            width={30}
            height={30}
            alt="edit"
          />
          <Link
            href="profile/edit"
            className={`fontPaytone ${styles.editButton}`}
          >
            Edit Profile
          </Link>
        </div>
        <div>
          <Image
            className={styles.changePasswordIcon}
            src="/resources/key.png"
            width={45}
            height={45}
            alt="edit"
          />
          <Link
            href="profile/change-password"
            className={`fontPaytone ${styles.changePasswordButton}`}
          >
            Change Password
          </Link>
        </div>
      </div>
      <div className={`${styles.accountControlsContainer}`}>
        <button
          onClick={logoutUser}
          className={`fontPaytone ${styles.logoutButton}`}
          data-testid="logout-button"
        >
          Logout
        </button>
        <div>
          <Image
            className={styles.deleteIcon}
            src="/resources/bin.png"
            width={32}
            height={35}
            alt="delete"
          />
          <Link
            href="profile/delete-account"
            className={`fontPaytone ${styles.deleteButton}`}
          >
            Delete Account
          </Link>
        </div>
      </div>
    </div>
  );
}
