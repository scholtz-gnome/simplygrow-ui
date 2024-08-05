import { FC, ReactNode } from 'react';
import styles from './dropdown.module.css';

interface DropdownProps {
  children: ReactNode;
  focused: boolean;
}

const Dropdown: FC<DropdownProps> = ({ focused, children }) => {
  return <div className={`${styles.dropdown} ${focused ? styles.focused : ''}`}>{children}</div>;
};

export default Dropdown;
