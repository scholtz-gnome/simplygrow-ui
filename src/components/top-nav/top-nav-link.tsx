"use client";
import { FC } from "react";
import { usePathname } from "../../hooks";
import styles from "./top-nav.module.css";

interface TopNavLinkProps {
  href: string;
  text: string;
}

const TopNavLink: FC<TopNavLinkProps> = ({ href, text }) => {
  const path = usePathname();

  const anchorStyles = path === href ? styles.active : styles.inactive;

  return (
    <li className={styles.link}>
      <a className={anchorStyles} href={href}>
        {text}
      </a>
    </li>
  );
};

export default TopNavLink;
