"use client";
import { Dispatch, FC, ReactNode, SetStateAction } from "react";
import styles from "./top-nav.module.css";

export type TopNavProps = {
  logo?: string | ReactNode;
  links?: ReactNode[];
  profileDetails?: { username?: string; firstName?: string; lastName?: string };
  className?: string;
  profileDialog?: ReactNode;
  profileDialogActive?: boolean;
  setProfileDialogActive?: Dispatch<SetStateAction<boolean>>;
};

const abbreviateUsernameOrFullName = (params: { username?: string; firstName?: string; lastName?: string }) => {
  if (params.firstName && params.lastName) {
    return `${params.firstName.trim().toUpperCase()[0]}${params.lastName.trim().toUpperCase()[0]}`;
  }

  if (params.username) {
    return `${params.username.trim().toUpperCase()[0]}${params.username.trim().toUpperCase()[1]}`;
  }

  return "";
};

const TopNav: FC<TopNavProps> = ({
  logo,
  links,
  className,
  profileDialog,
  profileDetails,
  profileDialogActive,
  setProfileDialogActive,
}) => {
  let logoElement: JSX.Element | null = null;

  if (logo) {
    if (typeof logo === "string") {
      logoElement = (
        <div>
          <img src={logo} alt="logo" height={40} />
        </div>
      );
    } else {
      logoElement = <div style={{ height: 40, overflow: "hidden" }}>{logo}</div>;
    }
  }

  const handleClick = () => {
    if (setProfileDialogActive) {
      setProfileDialogActive(!profileDialogActive);
    }
  };

  return (
    <nav className={`${styles.topNav} ${className}`}>
      {logoElement}

      <div className={styles.right}>
        <ul className={styles.links}>
          {links?.map((link, index) => (
            <li key={index} className={styles.link}>
              {link}
            </li>
          ))}
        </ul>

        {(profileDetails?.username || profileDetails?.firstName || profileDetails?.lastName) && (
          <>
            <div className={styles.profileDialog} onClick={handleClick}>
              {abbreviateUsernameOrFullName(profileDetails)}

              {profileDialogActive && profileDialog}
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default TopNav;
