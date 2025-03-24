import { FC, ReactNode } from 'react';
import Heading from '../heading';
import styles from './header.module.css';

interface HeaderProps {
  children: ReactNode;
  className?: string;
}

const Header: FC<HeaderProps> = ({ children, className }) => {
  return (
    <header className={`${styles.header} ${className}`}>
      <Heading order={2}>{children}</Heading>
    </header>
  );
};

export default Header;
