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

  return (
    <li className={styles.link}>
      <Link className={path === href ? styles.active : styles.inactive} href={href}>
        {text}
      </Link>
    </li>
  );
};

export default TopNavLink;
