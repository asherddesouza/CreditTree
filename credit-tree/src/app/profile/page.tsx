import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <div className={styles.container}>
      <div className={`fontPacifico ${styles.dividerContainer}`}>
        <div className={styles.dividerLine} />
        <div className={`fontPacifico ${styles.divider}`}>Profile</div>
        <div className={styles.dividerLine} />
      </div>
      <Image
        className={styles.profile}
        src="/resources/profile-images/grey-profile-icon.png"
        width={250}
        height={250}
        alt="email"
      />
      <div className={`fontPaytone ${styles.name}`}>Asher De Souza</div>
      <div className={`fontPaytone ${styles.email}`}>
        asher.desouza@ada.ac.uk
      </div>
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
