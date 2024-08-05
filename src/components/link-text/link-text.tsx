import { FC, ReactNode } from 'react';
import styles from './link-text.module.css';

interface LinkTextProps {
  href: string;
  color?: 'inherit';
  children: ReactNode;
}

const LinkText: FC<LinkTextProps> = ({ href, color, children }) => {
  const colorStyles = color === 'inherit' ? styles.inheritColor : styles.defaultStyles;

  return (
    <a href={href} className={`${styles.linkText} ${colorStyles}`}>
      {children}
    </a>
  );
};

export default LinkText;
