"use client";
import TopNavLink from "@/top-nav/top-nav-link";
import { FC, ReactNode } from "react";
import styles from "./top-nav.module.css";

export type TopNavProps = {
  logo?: string | ReactNode;
  links?: Array<{ href: string; text: string }>;
  tail?: React.ReactNode;
  className?: string;
};

const TopNav: FC<TopNavProps> = ({ logo, links, className, tail }) => {
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

  let tailElement: JSX.Element | null = null;

  if (tail) {
    tailElement = <div className={styles.tailContainer}>{tail}</div>;
  }

  return (
    <nav className={`${styles.topNav} ${className}`}>
      {logoElement}

      <ul className={styles.links}>
        {links?.map((link, index) => <TopNavLink href={link.href} text={link.text} key={index} />)}
      </ul>

      {tailElement}
    </nav>
  );
};

export default TopNav;
