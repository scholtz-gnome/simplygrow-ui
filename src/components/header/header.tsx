import React, { FC, ReactNode } from 'react';
import { Heading } from '../heading';
import styles from './header.module.css';

interface HeaderProps {
  children: ReactNode;
}

export const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <header className={styles.header}>
      <Heading order={2}>{children}</Heading>
    </header>
  );
};
