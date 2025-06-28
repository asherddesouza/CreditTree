import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

interface ProfileProps {
  name: string;
  email: string;
  profile_image?: number;
}

export default function Page({ name, email, profile_image }: ProfileProps) {
  let profileImageSrc: string;

  switch (profile_image) {
    case 0:
      profileImageSrc = "/resources/profile-images/grey-profile-icon.png";
    case 1:
      profileImageSrc = "/resources/profile-images/red-profile-icon.png";
    case 2:
      profileImageSrc = "/resources/profile-images/green-profile-icon.png";
    case 3:
      profileImageSrc = "/resources/profile-images/blue-profile-icon.png";
    case 4:
      profileImageSrc = "/resources/profile-images/orange-profile-icon.png";
    case 5:
      profileImageSrc = "/resources/profile-images/yellow-profile-icon.png";
    case 6:
      profileImageSrc = "/resources/profile-images/turquoise-profile-icon.png";
    case 7:
      profileImageSrc = "/resources/profile-images/purple-profile-icon.png";
    case 8:
      profileImageSrc = "/resources/profile-images/pink-profile-icon.png";
    case 9:
      profileImageSrc = "/resources/profile-images/black-profile-icon.png";
    default:
      profileImageSrc = "/resources/profile-images/grey-profile-icon.png";
  }

  return (
    <div className={styles.container}>
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
        alt="email"
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
  );
}
