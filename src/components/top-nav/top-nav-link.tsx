"use client";
import Link from "next/link";
import { FC } from "react";
import { usePathname } from "../../hooks";
import styles from "./top-nav.module.css";

interface TopNavLinkProps {
  href: string;
  text: string;
}

const TopNavLink: FC<TopNavLinkProps> = ({ href, text }) => {
  const path = usePathname();

  console.log("▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾▾");
  console.log(path);

  const anchorStyles = path === href ? styles.active : styles.inactive;

  return (
    <li className={styles.link}>
      <Link className={anchorStyles} href={href}>
        {text}
      </Link>
    </li>
  );
};

export default TopNavLink;
