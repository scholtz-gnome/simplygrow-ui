import { FC, ReactNode } from 'react';
import styles from './code.module.css';

interface CodeProps {
  children: ReactNode;
}

const Code: FC<CodeProps> = ({ children }) => {
  return <code className={styles.code}>{children}</code>;
};

export default Code;
